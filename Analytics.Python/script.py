'''
    DATA DE CRIAÇÃO 20180825

    EQUIPE MKT.co

'''


from pyodbc import connect
import pandas as pd

pd.set_option('display.max_columns', 50)
pd.set_option('display.width', 1000)


km_padrao = 5


''' FUNCOES PARA UTILIZAR NAS CLASSES '''


def distancia_entre_pontos(lat_local, long_local, lat_anuncio, long_anuncio):
    from math import sin, cos, sqrt, atan2, radians

    # approximate radius of earth in km
    R = 6373.0

    lat1 = radians(lat_local)
    lon1 = radians(long_local)
    lat2 = radians(lat_anuncio)
    lon2 = radians(long_anuncio)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    return distance


dic_plano_local = {2: 0, 3: 1, 4: 2, 5: 3, 6: 4}


dic_local_plano = {0: 2, 1: 3, 2: 4, 3: 5, 4: 6}


''' CLASSES '''


class criar_conexao(object):
    def get(self, IP, DB, USER, PW):
        return connect('DRIVER={SQL Server}'+f';SERVER={IP};DATABASE={DB};UID={USER};PWD={PW}')


class listar_campos(object):
    def get(self, odbc):
        cursor = odbc.cursor()
        tables = list(cursor.tables())
        tables = [x[2] for x in tables if x[1] == 'dbo']
        dicio = {}
        for table_name in tables:
            sql = 'select * from {}'.format(table_name)
            table = pd.read_sql(sql, odbc)
            dicio[table_name] = list(table.columns)
        return dicio


class anuncios_por_latlong(object):
    def get(self, lat_local, long_local):
        sql = 'select * from tbAnuncios'
        table = pd.read_sql(sql, odbc_marcelo)
        table['distancia'] = table.apply(lambda row: distancia_entre_pontos(lat_local, long_local, row['latitude'], row['longitude']), axis=1)
        table = table.loc[table.distancia <= km_padrao]

        return table[['codAnuncio', 'latitude', 'longitude']]


class anuncios_possiveis_no_local(object):
    def get(self, id_local):
        sql = 'select * from tbLocais where codLocal = {}'.format(id_local)
        table = pd.read_sql(sql, odbc_marcelo)
        lat_local = table.latitude[0]
        long_local = table.longitude[0]
        LocalTipo = table.codLocalTipo[0]
        LocalTipo = dic_local_plano[LocalTipo]

        sql = f'select * from tbAnuncios where codPlano >= {LocalTipo}'
        table = pd.read_sql(sql, odbc_marcelo)
        table['distancia'] = table.apply(lambda row: distancia_entre_pontos(lat_local, long_local, row['latitude'], row['longitude']), axis=1)
        table = table.loc[table.distancia <= km_padrao]

        return table[['codAnuncio', 'latitude', 'longitude']]


class locais_por_latlong(object):
    def get(self, lat_local, long_local):
        sql = 'select * from tbLocais'
        table = pd.read_sql(sql, odbc_marcelo)
        table['distancia'] = table.apply(lambda row: distancia_entre_pontos(lat_local, long_local, row['latitude'], row['longitude']), axis=1)
        table = table.loc[table.distancia <= km_padrao]

        return table[['codLocal', 'latitude', 'longitude']]


class locais_possivel_para_anuncio(object):
    def get(self, id_anuncio):
        sql = 'select * from tbAnuncios where codAnuncio = {}'.format(id_anuncio)
        table = pd.read_sql(sql, odbc_marcelo)
        lat_anuncio = table.latitude[0]
        long_anuncio = table.longitude[0]
        plano = table.codPlano[0]
        plano = dic_plano_local[plano]

        sql = f'select * from tbLocais where codLocal <= {plano}'
        table = pd.read_sql(sql, odbc_marcelo)
        table['distancia'] = table.apply(lambda row: distancia_entre_pontos(lat_anuncio, long_anuncio, row['latitude'], row['longitude']), axis=1)
        table = table.loc[table.distancia <= km_padrao]

        return table[['codLocal', 'latitude', 'longitude']]


odbc_marcelo = criar_conexao().get(IP='10.90.86.199', DB='itauDB', USER='sa', PW='maa18#02')

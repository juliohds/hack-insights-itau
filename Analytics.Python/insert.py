

class criar_conexao(object):
    def get(self, IP, DB, USER, PW):
        return connect('DRIVER={SQL Server}'+f';SERVER={IP};DATABASE={DB};UID={USER};PWD={PW}')


odbc_marcelo = criar_conexao().get(IP='10.90.86.199', DB='itauDB', USER='sa', PW='maa18#02')


cursor = odbc_marcelo.cursor()


''' INFORMACOES DE USUARIOS '''
insert = "INSERT INTO dbo.tbUsuarios (nome) VALUES ('dona maria');"
insert = "INSERT INTO dbo.tbUsuarios (nome) VALUES ('padaria sp');"
insert = "INSERT INTO dbo.tbUsuarios (nome) VALUES ('encanador joao');"

''' INFORMACOES DE LOCAIS'''
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('shopping SP' ,-23.550416, -46.633781);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('rua paulista' ,-23.594060, -46.680506);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('parada onibus' ,-23.595602, -46.685260);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('shopping jardins' ,-23.580563, -46.669214);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('praca vila romana' ,-23.536093, -46.697293);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('metro barra funda' ,-23.535463, -46.651807);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('relogio bras' ,-23.546784, -46.615925);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('praca liberdade' ,-23.564574, -46.638582);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('indoor pinheiros' ,-23.565679, -46.685795);"
insert = "INSERT INTO dbo.tbLocais (descricao, latitude, longitude) VALUES ('praca ipiranga' ,-23.582504, -46.602340);"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 3 where codLocal = 1;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 4 where codLocal = 2;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 3 where codLocal = 3;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 2 where codLocal = 4;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 1 where codLocal = 5;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 1 where codLocal = 7;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 1 where codLocal = 8;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 1 where codLocal = 9;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 1 where codLocal = 10;"
insert = "UPDATE dbo.tbLocais SET codLocalTipo = 3 where codLocal = 11;"

''' INFORMACOES DE ANUNCIO'''
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (2, 'chaveiro seu joao', 1 ,-23.558857, -46.640830);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (2, 'personal marcao', 1 ,-23.561217, -46.646173);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (2, 'bolos dona maria', 1 ,-23.596868, -46.686636);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (2, 'xis do beto', 1 ,-23.561666, -46.682834);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (3, 'encanador jose', 1 ,-23.577386, -46.649153);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (3, 'marido de aluguel ricardao', 1 ,-23.629184, -46.669459);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (4, 'pastel do mario', 1 ,-23.590589, -46.590229);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (5, 'costureira mari', 1 ,-23.535988, -46.691132);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (5, 'antenas supreme', 1 ,-23.544956, -46.643361);"
insert = "INSERT INTO dbo.tbAnuncios (codPlano, titulo, codUsuario, latitude, longitude) VALUES (6, 'otica joana', 1 ,-23.617209, -46.687439);"

''' INFORMACOES DE PLANOS'''
insert = "INSERT INTO dbo.tbPlanos (descricao, valor) VALUES ('free', 0);"
insert = "INSERT INTO dbo.tbPlanos (descricao, valor) VALUES ('basic', 30);"
insert = "INSERT INTO dbo.tbPlanos (descricao, valor) VALUES ('medium', 50);"
insert = "INSERT INTO dbo.tbPlanos (descricao, valor) VALUES ('top', 80);"
insert = "INSERT INTO dbo.tbPlanos (descricao, valor) VALUES ('ultra', 500);"

''' TIPO LOCAL '''
insert = "INSERT INTO dbo.tbLocaisTipos (descricao) VALUES ('indoor');"
insert = "INSERT INTO dbo.tbLocaisTipos (descricao) VALUES ('elevador');"
insert = "INSERT INTO dbo.tbLocaisTipos (descricao) VALUES ('outdoor');"
insert = "INSERT INTO dbo.tbLocaisTipos (descricao) VALUES ('cinema');"

''' NEW '''

''' COMMIT '''
cursor.execute(insert)
cursor.commit()

''' TABLES'''
sql = 'select * from dbo.tbUsuarios'
sql = 'select * from dbo.tbAnuncios'
sql = 'select * from dbo.tbLocais'
sql = 'select * from dbo.tbPlanos'
sql = 'select * from dbo.tbLocaisTipos'
table = pd.read_sql(sql, odbc_marcelo)

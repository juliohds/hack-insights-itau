from flask import Flask, jsonify, request
from flask_restful import Api, Resource
import script
import json
from flask.views import View
import pandas as pd
from script import criar_conexao

odbc_marcelo = criar_conexao().get(IP='10.90.86.199', DB='itauDB', USER='sa', PW='maa18#02')

app = Flask(__name__)
api = Api(app)


class anuncios_latlong(View):
    def dispatch_request(self):
        var_x = float(request.args.get('x'))
        var_y = float(request.args.get('y'))
        retorno = script.anuncios_por_latlong().get(lat_local=var_x, long_local=var_y)
        result = {'data': json.loads(retorno.to_json(orient='records'))}
        return jsonify(result)


class locais_latlong(View):
    def dispatch_request(self):
        var_x = float(request.args.get('x'))
        var_y = float(request.args.get('y'))
        retorno = script.locais_por_latlong().get(lat_local=var_x, long_local=var_y)
        result = {'data': json.loads(retorno.to_json(orient='records'))}
        return jsonify(result)


class anuncios_local(Resource):
    def get(self, id_local):
        retorno = script.anuncios_possiveis_no_local().get(id_local=id_local)
        result = {'data': json.loads(retorno.to_json(orient='records'))}
        return jsonify(result)


class locais_anuncio(Resource):
    def get(self, id_anuncio):
        retorno = script.locais_possivel_para_anuncio().get(id_anuncio=id_anuncio)
        result = {'data': json.loads(retorno.to_json(orient='records'))}
        return jsonify(result)


class lista_locais(Resource):
    def get(self):
        sql = 'select * from dbo.tbLocais'
        table = pd.read_sql(sql, odbc_marcelo)
        result = {'data': json.loads(table.to_json(orient='records'))}
        return jsonify(result)


class lista_locais_filtro(Resource):
    def get(self, id_local):
        sql = 'select * from dbo.tbLocais where codLocal = {}'.format(id_local)
        table = pd.read_sql(sql, odbc_marcelo)
        result = {'data': json.loads(table.to_json(orient='records'))}
        return jsonify(result)


class lista_anuncios(Resource):
    def get(self):
        sql = 'select * from dbo.tbAnuncios'
        table = pd.read_sql(sql, odbc_marcelo)
        result = {'data': json.loads(table.to_json(orient='records'))}
        return jsonify(result)


class lista_anuncios_filtro(Resource):
    def get(self, id_anuncios):
        sql = 'select * from dbo.tbAnuncios where codAnuncio = {}'.format(id_anuncios)
        table = pd.read_sql(sql, odbc_marcelo)
        result = {'data': json.loads(table.to_json(orient='records'))}
        return jsonify(result)


app.add_url_rule('/anuncios-por-latlong', view_func=anuncios_latlong.as_view('my_request2'))
app.add_url_rule('/locais-por-latlong', view_func=locais_latlong.as_view('my_request4'))

api.add_resource(anuncios_local, '/anuncios-por-local/<id_local>')  # id 11
api.add_resource(locais_anuncio, '/locais-por-anuncio/<id_anuncio>')  # id 7
api.add_resource(lista_locais, '/lista-locais')
api.add_resource(lista_locais_filtro, '/lista-locais/<id_local>')
api.add_resource(lista_anuncios, '/lista-anuncios')
api.add_resource(lista_anuncios_filtro, '/lista-anuncios/<id_anuncios>')

if __name__ == '__main__':
    app.run(debug=True)

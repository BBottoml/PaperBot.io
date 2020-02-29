import os
from flask import Flask
from flask import redirect, request
import requests 

_client_id = "3c49486c11e7447df67dbbc26fb1168d"
_client_secret = "076f599533ee5116190e7246b3c1a913c8e2fd31" 
_domain = "http://localhost:5000"

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.route('/alpacaAuth')
    def alpacaAuth():
        callback_url = _domain + "/alpacaCallback"
        print(callback_url)
        oauth_url = r"https://app.alpaca.markets/oauth/authorize?response_type=code&client_id=" + _client_id + r"&redirect_uri=" + callback_url + r"&state=RUlMvZWMRU1fZvQKk3jOI1XIuGHoD15e&scope=account:write%20trading%20data"
        
        return redirect(oauth_url, 302)

    @app.route('/alpacaCallback', methods=['GET','POST'])
    def alpacaCallback():
        callback_url = _domain + "/alpacaCallback"
        code = request.args.get('code')
        
        tokenUrl = 'https://api.alpaca.markets/oauth/token'
        
        data = {'grant_type':'authorization_code',
                'code':code,
                'client_id':_client_id, # client key
                'client_secret':_client_secret, # client secret
                'redirect_uri': callback_url
        }
        
        # TODO: Set a cookie here to allow the user to stay logged in
        res = requests.post(tokenUrl,data=data)
        tempData = res.json()
        
        print(tempData)
        authorization_header = {"Authorization":"Bearer {}".format(tempData["access_token"]), "Content-Type":"application/json"}
        print(authorization_header)
        buy_url = 'https://api.alpaca.markets/v2/orders'
        params_json = {
            'symbol': 'iipr',
            'qty': 100,
            'side': 'buy',
            'type': 'market',
            'time_in_force': 'gtc',
        }
        
        res = requests.post(buy_url, params=params_json, headers=authorization_header)


        return res.json()

    '''''
    This route serves as an interface between the frontend and Alpaca api
    Purchases a specified quantity of shares for specified stock
    '''''
    @app.route('/api/buy')
    def buy():
        return "bought"

    return app


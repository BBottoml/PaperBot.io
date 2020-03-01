import os
from flask import Flask,redirect,request, url_for
import os
from flask_sqlalchemy import SQLAlchemy
import requests 
import json
import base64

_client_id = "3c49486c11e7447df67dbbc26fb1168d"
_client_secret = "076f599533ee5116190e7246b3c1a913c8e2fd31" 
_domain = "http://localhost:5000"
_bots = dict()
access_token = ""
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )
    db=SQLAlchemy(app)

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
    @app.route('/')
    def index():
        return 'Hello, World!'

    @app.route('/create_bot', methods=["POST"])
    @app.route('/update_bot', methods=["POST"])
    def create_bot():
        if (request.method=="POST"):
            form = request.values
            name = form['bot_name']
            algorithm = form['bot_algorithm']
            _bots[name]=algorithm.split()
            print(_bots)
        return redirect(url_for('index')) 

    @app.route('/delete_bot', methods=["POST"])
    def delete_bot():
        if (request.method=="POST"):
            form = request.values
            name = form['bot_name']
            if name in _bots:
                _bots.pop(name,None)
            print(_bots)
        return redirect(url_for('index')) 

    @app.route('process_algorithm')
    def process_algorithm():
        for name in _bots.keys():
            instruction_words_length = len(_bots[name])
            truth_value=True
            i=0
            while (i<instruction_words_length):
                word=_bots[name][i]
                i+=1
                if (word=="if"):
                    condition=_bots[name][i]
                    i+=1
                    if condition=="isHighEnough" or "isLowEnough":
                        stock_name=_bots[name][i]
                        i+=1
                        value=_bots[name][i]
                        i+=1
                        truth_value = truth_value and process_condition(condition,stock_name,value)
                    else:
                        value=_bots[name][i]
                        i+=1
                        truth_value = truth_value and process_condition(condition,value)
                if (word=="then"):
                    action=_bots[name][i]
                    i+=1
                    num_shares=_bots[name][i]
                    i+=1
                    stock_name=_bots[name][i]
                    i+=1
                    if (truth_value):
                        execute_order(action,num_shares,stock_name)

    def process_condition(condition,value, stock_name=""):
        if condition=="isTrending":
            return isTrending(value)
        if condition=="isLowEnough":
            return isLowEnough(stock_name,value)
        if condition=="isHighEnough":
            return isHighEnough(stock_name,value)
        } 
        return False

    def execute_order(action,num,shares,stock_name):
        params={
            "side":"sell",
            "symbol":stock_name,
            "type":"market",
            "qty":num,
            "time_in_force":"gtc"
        }
        if action=="sell":
            requests.post('/api/sell',data=params)
        if (action=="buy"):
            params["side"]="buy"
            requests.post('/purchase',data=params)
    @app.route('/alpacaAuth')
    def alpacaAuth():
        callback_url = _domain + "/alpacaCallback"
        print(callback_url)
        oauth_url = r"https://app.alpaca.markets/oauth/authorize?response_type=code&client_id=" + _client_id + r"&redirect_uri=" + callback_url + r"&state=RUlMvZWMRU1fZvQKk3jOI1XIuGHoD15e&scope=account:write%20trading%20data"
        
        return redirect(oauth_url, 302)

    @app.route('/alpacaCallback', methods=['GET','POST'])
    def alpacaCallback():
        global access_token
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
        access_token=tempData['access_token']
        
        print(tempData)
        return redirect(url_for('purchase'))
        
    @app.route('/api/purchase', methods=['POST'])
    def purchase():
        global access_token
        if (request.method=="POST"):
            buy_url = 'https://paper-api.alpaca.markets/v2/orders'

            # auth header setup
            authorization_header = {"Authorization":"Bearer {}".format(access_token), "Content-Type":"application/json"}
            authorization_header = json.dumps(authorization_header)
            authorization_header = json.loads(authorization_header) 

            # request
            res = requests.post(buy_url, data=request.data, headers=authorization_header)

            return res.json()

    @app.route('/api/sell', methods=['POST'])
    def sell():
        global access_token
        if (request.method=="POST"):
            sell_url = 'https://paper-api.alpaca.markets/v2/orders'

            authorization_header = {"Authorization":"Bearer {}".format(access_token), "Content-Type":"application/json"}
            authorization_header = json.dumps(authorization_header)
            authorization_header = json.loads(authorization_header) 
            
            res = requests.post(sell_url, data=request.data, headers=authorization_header)

            return res.json()
    
    def isTrending(trend):
        client_key = 'uFTmFW66AAMEUwx3rZlZDMSCf'
        client_secret = 'LtlxIoQpBvHcqjpSMIA9Gs2E9wCJbr7xkx9EpSdBYoNedaZUgh'

        key_secret = '{}:{}'.format(client_key, client_secret).encode('ascii')
        b64_encoded_key = base64.b64encode(key_secret)
        b64_encoded_key = b64_encoded_key.decode('ascii')

        base_url = 'https://api.twitter.com/'
        auth_url = '{}oauth2/token'.format(base_url)

        auth_headers = {
            'Authorization': 'Basic {}'.format(b64_encoded_key),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
        auth_data = {
            'grant_type': 'client_credentials'
        }

        auth_resp = requests.post(auth_url, headers=auth_headers, data=auth_data)
        access_token = auth_resp.json()['access_token']

        search_headers = {
            'Authorization': 'Bearer {}'.format(access_token)    
        }
        search_params = {
            'id': 1,
        }

        search_url = '{}1.1/trends/place.json'.format(base_url)
        search_resp = requests.get(search_url, headers=search_headers, params=search_params)
        tweet_data = str(search_resp.json())

        somebool = trend in tweet_data.lower()
        return somebool
    
    def currentTemp(somecity):
        url = "https://community-open-weather-map.p.rapidapi.com/weather"

        querystring = {"callback":"test","id":"2172797","units":"%22metric%22 or %22imperial%22","mode":"xml%2C html","q":somecity}

        headers = {
            'x-rapidapi-host': "community-open-weather-map.p.rapidapi.com",
            'x-rapidapi-key': "3fa8a208f3mshac38fad42378d21p160849jsn2a5f80aa3204"
        }

        response = requests.request("GET", url, headers=headers, params=querystring)

        temp = float(response.text.split('"main":{"temp":')[1].split(",")[0])
        temp = 1.8 * (temp - 273) + 32

        return temp 

    return app
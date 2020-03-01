import requests
import sys
import base64
if __name__ == "__main__":


    url = "https://finnhub-realtime-stock-price.p.rapidapi.com/quote"

    querystring = {"symbol":"AAPL"}

    headers = {
        'x-rapidapi-host': "finnhub-realtime-stock-price.p.rapidapi.com",
        'x-rapidapi-key': "3fa8a208f3mshac38fad42378d21p160849jsn2a5f80aa3204"
        }

    response = requests.request("GET", url, headers=headers, params=querystring)

    price = float(response.text.split(":")[1].split(",")[0])

    print()
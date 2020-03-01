import requests
import sys
if __name__ == "__main__":
    url = "https://community-open-weather-map.p.rapidapi.com/weather"

    querystring = {"callback":"test","id":"2172797","units":"%22metric%22 or %22imperial%22","mode":"xml%2C html","q":"Chicago"}

    headers = {
        'x-rapidapi-host': "community-open-weather-map.p.rapidapi.com",
        'x-rapidapi-key': "3fa8a208f3mshac38fad42378d21p160849jsn2a5f80aa3204"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    temp = float(response.text.split('"main":{"temp":')[1].split(",")[0])
    temp = 1.8 * (temp - 273) + 32
    print(temp)
    #print(response.text)
import requests
import json

from decouple import config


def shortener(url):

    linkRequest = {
        "destination": url
        , "domain": {"fullName": "rebrand.ly"}
        # , "slashtag": "A_NEW_SLASHTAG"
        # , "title": "Rebrandly YouTube channel"
    }

    requestHeaders = {
        "Content-type": "application/json",
        "apikey": config("YOUR_API_KEY"),
    }

    r = requests.post("https://api.rebrandly.com/v1/links",
                      data=json.dumps(linkRequest),
                      headers=requestHeaders)

    if (r.status_code == requests.codes.ok):
        link = r.json()
        return link["shortUrl"]
    else:
        return ""


def url_shortener(url):
    import urllib
    import requests
    key = config("CUTTLY_API_KEY")
    urls = urllib.parse.quote(url)
    name = '{}'.format("akmarv_beat_link")
    r = requests.get('http://cutt.ly/api/api.php?key={}&short={}&name={}'.format(key, urls, name))
    if not r:
        print(r,r.text)
    return r.text

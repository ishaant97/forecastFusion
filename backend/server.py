import requests
from fastapi import FastAPI

app = FastAPI()


@app.get("/get/forecast/{location}")
def read_root(location:str):
    url = "https://weatherapi-com.p.rapidapi.com/forecast.json"

    querystring = {"q":location,"days":"3"}

    headers = {
        "X-RapidAPI-Key": "3962322a1amshbf868885feddf98p100253jsnc699c8ec37ff",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    return response.json()
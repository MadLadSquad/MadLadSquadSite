#!/usr/bin/env python3
import requests as req
import time
import os
import json

url = "http://0.0.0.0:8080"

def defaultBehaviour():
    f = open("../modus-mio-artists.csv", "r")
    lines = f.readlines()

    for line in lines:
        components = line.split(",")
        schema = json.loads("{}")

        descriptor = os.open(path=f"../modus-mio-data/{components[0]}.json",flags=(os.O_WRONLY | os.O_CREAT | os.O_TRUNC),mode=0o777)
        f1 = open(descriptor, "w")

        for i in components[1:]:
            i = i.replace("\n", "")
            resp = req.get(f"{url}/artistInsights?artistid={i}")
            if resp.status_code != 200:
                print("Error:", components[0], resp.status_code)
                f2 = open("errors.txt", "a")
                f2.write(f"{components[0]} {resp.status_code} {i}\n")
                f2.close()
            else:
                print("Writing:", components[0])
                rsp = json.loads(resp.text)

                if not schema:
                    schema = rsp
                    trash = schema["data"]["globalChartPosition"]
                else:
                    schema["data"]["globalChartPosition"] += rsp["data"]["globalChartPosition"]
                    if "monthlyListeners" in schema["data"] and "monthlyListeners" in rsp["data"]:
                        schema["data"]["monthlyListeners"] += rsp["data"]["monthlyListeners"]

                    if "monthlyListenersDelta" in schema["data"] and "monthlyListenersDelta" in rsp["data"]:
                        schema["data"]["monthlyListenersDelta"] += rsp["data"]["monthlyListenersDelta"]

                    schema["data"]["followerCount"] += rsp["data"]["followerCount"]
                    schema["data"]["followingCount"] += rsp["data"]["followingCount"]
                    # TODO: Merge cities data


        if schema:
            f1.write(json.dumps(schema))
        f1.close()
        time.sleep(1)

def main():
    os.umask(0)
    defaultBehaviour()

main()

#!/usr/bin/env python3
import json
import os

f = open("../modus-mio-artists.csv", "r")
lines = f.readlines()

length = 0
container = {}
for i, line in enumerate(lines):
    components = line.split(",")
    data = json.loads(open(f"../modus-mio-data/{components[0]}.json", "r").read())
    if "monthlyListeners" in data["data"]:
        container[components[0]] = data["data"]["monthlyListeners"]
    else:
        container[components[0]] = 0

print(dict(sorted(container.items(), key=lambda item: item[1], reverse=True)))

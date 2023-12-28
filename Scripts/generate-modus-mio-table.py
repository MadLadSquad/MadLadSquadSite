#!/usr/bin/env python3
f = open("../modus-mio-artists.csv", "r")
lines = f.readlines()
buf = "| __1__ "

length = 0
for i, line in enumerate(lines):
    line = line.replace("\n", "")
    components = line.split(",")
    buf += f"| [{components[0]}](https://open.spotify.com/artist/{components[1]}) "

    if ((i + 1) % 13) == 0:
        buf += " |"
        print(buf)
        buf = f"| __{int((i + 1)/13) + 1}__ "

    length = i + 1

emptyCells = length % 13
for i in range(emptyCells):
    buf += "|   "
print(buf)

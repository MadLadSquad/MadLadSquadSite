BG: Този документ ще ви покаже как да използвате данните от Modus Mio BG. Той е напълно на английски език, защото всички програмисти го разбират.

EN: This guide will show you how to get and use the Modus Mio BG data.

## Hosted data
The data is hosted under the `modus-mio-data` directory. Since this repository is hosted on GitHub Pages, there are 2 recommended methods to fetch the data:

1. Using the `madladsquad.com` domain: `GET https://madladsquad.com/modus-mio-data/V:RGO.json`
1. Using JSDelivr: `GET https://cdn.jsdelivr.net/gh/MadLadSquad/MadLadSquadSite/modus-mio-data/V:RGO.json`

The data about every artist is stored as plain JSON.

Since all data is stored as `<username>.json`, you can use the `modus-mio-artists.csv` file for a list of usernames or IDs:

1. Using the `madladsquad.com` domain: `GET https://madladsquad.com/modus-mio-artists.csv`
1. Using JSDelivr: `GET https://cdn.jsdelivr.net/gh/MadLadSquad/MadLadSquadSite/modus-mio-artists.csv`

The format looks like this:
```
...
V:RGO,556XyBuO17TCo0Bviw5nCW,7Ah7ps8S6EDjEPiWWRbLW9
...
```
The first element is the name of the artist. The second is the main artist ID. Any following elements are optional additional artist IDs that are used with the data from the main one.
In this case the statistics for `V:RGO` are getting merged with the statistics for `SAUCE KIDS GANG`.

## Generating the data locally
### Setting up the local server
First, you need a server that will fetch the data from spotify. You can clone the [sp-playcount-librespot](https://github.com/MadLadSquad/sp-playcount-librespot) repository anywhere on
your system. After you enter it, do the following:

1. Install Java and Maven
1. Run `mvn clean package`
1. Run `java -jar ./core/target/librespot-core-jar-with-dependencies.jar <spotify_username> <spotify_password>`

The `spotify_username` is your username that you can find [here](https://www.spotify.com/bg-bg/account/profile/), which `spotify_password` is the plaintext password you use to log in
as you would normally. Once you run the command one, you can rerun it without specifying a username or password.

### Generating the data
To generate the data, do the following:

1. Make sure the server is running
1. Clone the website repository: `git clone https://github.com/MadLadSquad/MadLadSquadSite.git --recursive`
1. Enter it and enter the `Scripts` directory
1. Run `./generate-modus-mio-data.py`

When ran successfully, the script will generate a JSON file for all artists under the `modus-mio-data` directory.

If an artist ID is invalid, the failed step will be listed in the `errors.txt` file. After reviewing it, you may fix the issues in `modus-mio-artists.csv`.

## Generating a markdown table from the data
Simply enter the `Scripts` directory and run the following command:
```sh
./generate-modus-mio-table.py
```
This will output a markdown table without a header to STDOUT, so make sure you provide one beforehand.

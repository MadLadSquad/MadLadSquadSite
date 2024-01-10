BG: Този документ ще ви покаже как да използвате данните от Modus Mio BG. Той е напълно на английски език, защото всички програмисти го разбират.

EN: This guide will show you how to get and use the Modus Mio BG data.

## Adding new artists
New artists can be added to the `modus-mio-artists.csv` file. Every line corresponds to a different artist. There are 2 artist formats. For artists with only 1 artist profile:
```
Artist Name,<spotify artist ID here>
```
For artists with multiple artist profiles
```
Artist Name,<id1>,<id2>,...,<idn>,<number 0 to 100>
```
The last number is the percentage of monthly listeners to add to the main account from the alternative accounts. Percentages less than 100 are used to compensate for listener overlap
between these profiles.

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

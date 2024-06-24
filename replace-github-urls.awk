#!/usr/bin/awk -f

{
    assets_pattern = "https://github.com/MadLadSquad/.*/assets/.*"

    # magic for loop lol, i hope you only use this in html inshallah it works (didnt test)
    while (match($0, /https:\/\/github\.com\/MadLadSquad\/[^ \t\n\"\'<>]*/)) {
        url = substr($0, RSTART, RLENGTH)

        if (url !~ assets_pattern) {
            new_url = url
            gsub(/https:\/\/github\.com\/MadLadSquad\//, "https://madladsquad.com/docs/", new_url)
            $0 = substr($0, 1, RSTART-1) new_url substr($0, RSTART+RLENGTH)
        } else {
            $0 = substr($0, RSTART + RLENGTH)
        }
    }

    print
}

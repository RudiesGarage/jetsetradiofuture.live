#!/bin/bash
file="stationsList.txt"
while read -r stationName; do
    # Get list of files in the station folder in the bucket, remove everyting before the last slash, remove .mp3,replace # with url encoding, surround with quotes and add a comma
    songList=$(s3cmd ls "s3://jsrfl/music/stations/"$stationName"/" | sed 's:.*/::' | sed 's:\.mp3::g' | sed 's:#:%23:g' |awk '{ printf "\"%s\",", $0 }')
        
    colorsObj=$(cat "./"$stationName"/colors.json")
    echo "{\"stationName\": \"$stationName\",\"colorsObj\": ${colorsObj},\"songList\": [${songList%?}]}" > ./$stationName/$stationName.json
    
    chmod 777 ./$stationName/$stationName.json
done <$file 

 
 


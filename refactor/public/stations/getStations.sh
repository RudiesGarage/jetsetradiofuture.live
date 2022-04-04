#!/bin/bash
ls -d */ > stationList.txt

for output in `ls -d */`
do
    # Remove the last slash from folder
    stationName=$(echo $output | sed 's/.$//')
    #echo  $stationName
    #echo "Songlist for: "$output
    
    # Get list of files in the station folder in the bucket, remove everyting before the last slash, remove .mp3, surround with quotes and add a comma
    songList=$(s3cmd ls "s3://jsrfl/music/stations/"$output | sed 's:.*/::' | sed 's:\.mp3::g' | awk '{ printf "\"%s\",", $0 }')
    #echo `s3cmd ls "s3://jsrfl/music/stations/"$output | sed 's:.*/::' | sed 's:\.mp3:,:g'`
    colorObj=$(cat $stationName/colors.json)
    
    echo "{\"stationName\": \"$stationName\",\"colorsObj\": $colorObj ,\"songList\": [${songList%?}]}" > ./$stationName/$stationName.json
    
    chmod 777 ./$stationName/$stationName.json
done

rm stationList.txt


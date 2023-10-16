#!/bin/bash
file="stationsList.txt"
echo "{\"stations\":[" > stationsList.json
while read -r stationName; do
	metadata=$(cat $stationName/metadata.json)
	echo "$metadata," >> stationsList.json
done <$file
#remove last , from the array
echo `sed '$ s/.$//' stationsList.json` > stationsList.json
echo "]}" >> stationsList.json 
chmod 777 stationsList.json


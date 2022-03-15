import shutil
import json
import os
import urllib.parse
import requests as req
import requests


baseurl = "https://jsrfl.us-east-1.linodeobjects.com/music/artists/"

for file in os.listdir('.'):
    if os.path.isdir(file):
        # print(file)
        for infolder in os.listdir('./'+file):
            print(infolder)
            if os.path.isfile('./'+file+"/"+infolder):
                if infolder.endswith('.json'):
                    # JSON file
                    f = open('./'+file+"/"+infolder, "r")

                    # Reading from file
                    data = json.loads(f.read())

                    for songData in data['songList']:
                        songUrl = baseurl+urllib.parse.quote(songData['url'])+'.mp3'

                        response = requests.head(songUrl)
                        if response.status_code==404:
                            print("\t" + songData['url'] + " " + str(response.status_code))
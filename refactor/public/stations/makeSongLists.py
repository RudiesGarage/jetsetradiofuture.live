# make a list.js file based on music files in the folder

import os
import pathlib
# get current directory
cwd = os.getcwd()

# for each file in the directory
for file in os.listdir(cwd):
	# check if folder
	if os.path.isdir(file):
		# if file is a folder, then assume it is a station folder
		station = os.path.join(cwd,file)
		
		print("Making ~list.js for "+ file)
				
		# make a ~list.js file in station folder
		os.chdir(station)
		file1 = open('~list.js', 'w')
		
		template = """
//Choose a name for the station
stationName = \"""" + file + """\";

//Add it to the array of stations
stationsArray[stationsArray.length] = stationName;

//Define an array for tracks
this[stationName+\"_tracks\"] = new Array();


//TRACKS

"""
		# bumps dont have this template section
		if file != "bumps":
			file1.write(template)
			
		# list the songs in alphabetical order
		songs = os.listdir(station)
		songs.sort(key=lambda x: x.lower())
		# write song list 
		for song in (songs):
			if pathlib.Path(song).suffix == ".mp3":
				template = ""
				# format for bumps is different
				if file != "bumps":
					template = "this[stationName+\'_tracks\'][this[stationName+\'_tracks\'].length] = \""+pathlib.Path(song).stem+"\";\n"
				else:
					template = "bumpsArray[bumpsArray.length] = \""+pathlib.Path(song).stem+"\";\n"
					
				file1.write(template)
				#print(song)
		file1.close()
	# change working directory back to stations directory	
	os.chdir(cwd)
print("Done")

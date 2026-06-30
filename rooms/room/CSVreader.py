import csv
import json

dico= []
with open ('./rooms/room/data.csv', mode='r', encoding='utf-8') as file:
    csv_reader = csv.reader(file, delimiter=';')
    for salle, nom, desc, photo, audio,legende in csv_reader:
        dico.append({
            'salle': salle,
            'nom': nom,
            'desc': desc,
            'photo': photo,
            'audio': audio,
            'legende': legende,
        })

print(dico)
with open('./rooms/room/data.json', 'w', encoding='utf-8') as json_file:
    json.dump(dico, json_file, indent=4)

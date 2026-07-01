import csv
import json

dico= []
with open ('./rooms/room/data_e.csv', mode='r', encoding='utf-8') as file:
    csv_reader = csv.reader(file, delimiter=';')
    for salle, nom, desc, tableau, audio,legende, photo, legende1 in csv_reader:
        dico.append({
            'salle': salle,
            'nom': nom,
            'desc': desc,
            'tableau': tableau,
            'audio': audio,
            'legende': legende,
            'photo' : photo,
            'legende1' : legende1
        })

print(dico)
with open('./rooms/room/data_e.json', 'w', encoding='utf-8') as json_file:
    json.dump(dico, json_file, indent=4)

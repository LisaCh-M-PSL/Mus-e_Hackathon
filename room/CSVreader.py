import csv
import json

dico= []
with open ('./room/data.csv', mode='r') as file:
    csv_reader = csv.reader(file, delimiter=';')
    for salle, nom, desc, photo, audio in csv_reader:
        dico.append({
            'salle': salle,
            'nom': nom,
            'desc': desc,
            'photo': photo,
            'audio': audio
        })

print(dico)
with open('./room/data.json', 'w') as json_file:
    json.dump(dico, json_file, indent=4)

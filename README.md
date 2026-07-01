# Musée Hackathon

# Manuel utilisateur.
Le projet consiste à coder une webapp audioguide pour le musée de minéralogie de l'école des Mines de Paris. L'audioguide créé présente le parcours "pigments" du musée.

Le projet est codé en html, JavaScript, CSS et Python. 

L'application comporte 5 sections distinctes :
- Accueil : Présentation du musée de minéralogie
- Plan : Plan intéractif du musée. Cliquer sur une des salle permet d'avoir son plan , sur lequel on retrouve des pins placés sur la localisation des minéraux du parcours. En clquant sur le pin, on accède à l'audioguide du minéral.
- Salles : Liste des salles du musée. En choisissant une salle, on obtient la liste des audios proposés dans celle-ci. En cliquant sur un minéral, on obtient sa page, avec sa photo et celle de l'oeuvre associée, son audio et le texte associé.
- Qr-code : Cette section permet de scanner les QR-codes présents au sein du musée, et renvoit vers les pages web associées.
- Infos : Cette section présente les informations pratiques du musée (horaires, tarifs, accès, contact, réseaux sociaux). Elle permet également de changer la langue de l'application.

Ces 5 sections sont reliées entre elles par un menu présent sous forme de bandeau en pied de page.

Afin d'ouvrir l'application, on doit utiliser un serveur local avec vite, en raison des blocages des navigateurs qui empêchent l'ouverture du fichier json utilisé par la section salle.



### Objectif du projet
Le Musée souhaite travailler avec les élèves des mines afin de proposer aux visiteurs une première version d’une application avec audio-guide, téléchargeable sur leurs portables.

L’objectif de ce projet est de présenter le parcours « Arts et Minéraux » mais naturellement le sujet peut être traité de manière plus générique sur la présentation d’un parcours avec application au parcours « Arts et Minéraux ».

Ce projet et ce parcours serviront pour la v1 d’un projet d’audioguide mené dans l’avenir.

Le public cible est constitué des visiteurs francophones et anglophones du musée.

Il s’agira de guider le visiteur dans la galerie, tout en lui proposant diverses informations sur ces minéraux dont l’écoute des textes de présentation des minéraux du parcours.

Le contenu souhaité pour l’application:

- Présentation de la galerie et de la collection systématique (une page)

- Présentation des 26 minéraux et leurs utilisations dans l’art

- le texte

- l’exemple d’un tableau où le minerai a été utilisé

- une carte avec la provenance ou le gisement du minéral

- l’audio en français et en anglais

pour aller plus loin, les élèves peuvent proposer chatbox qui répond aux questions.

L’UX (user experience) souhaitée pour l’application :

- Application mobile, téléchargeable sur iOS/Android ou une appli Web sur mobile

- Choix de basculer entre le français et l’anglais

- Menu dépliant ou en footer pour sélectionner les pages (histoire de l’Ecole, histoire du musée), et un onglet avec les infos pratiques du musée

- Une page par salle, avec les infos et audios de minéraux qui correspondent au parcours (ex : Musée de l’Armée Invalides) OU une page avec les minéraux dans le parcours qui renvoient vers une page avec une image en HD et l’audio (ex : Musée de l’Homme)

- Clavier pour sélectionner un audio qui correspond à un minéral dans le parcours

Toutes les données nécessaires (la base de donnée, les images, les textes, les audios...) seront fournies par le musée. Les élèves ne devront pas les diffuser en dehors du projet (voir avec le musée surtout concernant les images).
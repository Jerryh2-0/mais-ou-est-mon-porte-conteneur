let plainContent = [
    [

    ],
    [
        ['h1', "Carnet de bord de Jean-Paul le Marin"]
    ],
    [
        ['h2', 'Jeudi 10 décembre 2020, 22h07'],
        ["p", "J'embarque pour la première fois à bord d'un navire, un porte-conteneur, le Jean Mermoz, ici, au port de Anchorage en Egypte. Notre navire a pour but de relier l'Europe à l'Asie. Mon rêve de devenir marin devient enfin réalité. Quelle chance qu'un matelot soit en congé maladie après avoir attrapé la Covid-19 et que CMA CGM ait accepté ma candidature. J'ai hâte de vivre cette belle aventure et de visiter d'autres pays que la France pendant cette période de pandémie."],

        ['h2', 'Vendredi 11 décembre 2020, 4h41'],
        ['p', 'Nous arrivons au port du canal de Suez où nous allons faire une halte.'],

        ['h2', 'Vendredi 11 décembre 2020, 11h37'],
        ['p', 'Nous sommes actuellement au large de l\'Egypte, à 30.1217° Nord et 32.5701° Est et nous nous voguons à la vitesse de 9.1 noeuds.']
    ],
    [
        ['h2', 'Samedi 12 décembre 2020, 11h50'],
        ['p', 'Nous voici en mer Rouge aux coordonnées 23° 59\' 40.2" N, 36° 13\' 10.308" E, nous nous dirigeons toujours vers le Sud à une vitesse de 20.1 noeuds pour déboucher sur l\'océan Indien. Un doux vent de force 1 souffle actuellement dans la zone.'],

        ['h2', 'Dimanche 13 décembre 2020, 17h34'],
        ['p', 'Nous sommes maintenant en 15° 40\' 55.272" N, 41° 17\' 58.848" E, toujours en mer Rouge et nous naviguons à 19.1 noeuds. Un vent de force 4 souffle aujourd\'hui.'],

        ['h2', 'Samedi 19 décembre 2020, 3h18'],
        ['p', 'Désolé cher carnet de bord, je n\'ai pas pu te remplir ces derniers jours à cause de mon mal de mer. Nous sommes maintenant en 5° 43\' 6.96" N, 80° 37\' 14.988" E, au sud du Sri Lanka, dans l\'océan Indien. J\'espère que l\'agréable, humide et chaud vent de force 2 me permettra de me remettre de ma maladie.']
    ],
    [
        ['h2', 'Lundi 21 décembre 2020, 20h29'],
        ['p', 'Nous voilà en 6° 6\' 47.642" N, 95° 18\' 17.1" E, nous sommes bientôt arrivé en Malaisie. Un vent de force 4 peut-être ressenti.'],

        ['h2', 'Mardi 22 décembre 2020, 19h56'],
        ['p', 'Nous sommes actuellement en 3° 35\' 17.268" N, 100° 2\' 19.572" E, dans le détroit de Malacca en but d\'aller au port de Klang en Malaisie. Un vent de force 3 souffle dans le détroit actuellement.'],

        ['h2', 'Mercredi 23 décembre 2020, 5h12'],
        ['p', 'Nous voici amarrés au port Klang, nous allons y rester jusqu\'au lendemain de Noël pour nous reposer un peu.']
    ],
    [
        ['h2', 'Samedi 26 décembre 2020, 13h54'],
        ['p', 'Nous voilà repartis en direction de la Chine à une vitesse de 13.4 noeuds avec un vent de force 4. Nous sommes actuellement en 1° 6\' 41.699" N, 103° 32\' 14.64" E'],

        ['h2', 'Lundi 28 décembre 2020, 6h16'],
        ['p', 'Nous sommes en N 10° 39.00\'° / E 110° 18.30\'°, au large du Vietnam. Nous naviguons à une vitesse de 19.0 noeuds.'],

        ['h2', 'Mardi 29 décembre 2020, 5h30'],
        ['p', 'Toujours en mer de Chine méridionale, nous sommes situés en N 17° 03.00\', E 113° 59.50\' et nous naviguons à une vitesse de 19.0 noeuds.']
    ],
    [
        ['h2', 'Mercredi 30 décembre 2020, 8h39'],
        ['p', 'Nous sommes aujourd\'hui en 23° 55\' 31.44" N, 118° 47\' 53.16" E aux abords de Taiwan. Nous naviguons à une vitesse de 15.2 noeuds et le vent est de force 8.'],

        ['h2', 'Jeudi 31 décembre 2020, 8h04'],
        ['p', 'Notre navire est toujours au large de la Chine, en 29° 15\' 38.052" N, 123° 10\' 30.72" E, voguant à une vitesse de 17.8 noeuds. Le vent est de force 8.'],

        ['h2', 'Vendredi 1er janvier 2021, 21h32'],
        ['p', 'J\'ai fêté le nouvel an avec tous les autres marins du navire au large de Tianjin, en 38° 45\' 17.892" N, 119° 19\' 59.52" E, en attendant d\'entrer dans le port.']
    ],
    [
        ['h2', 'Samedi 2 janvier 2021, 3h32'],
        ['p', 'Nous voici amarré au port de Tianjin. Il est prévu que nous repartions lundi.'],

        ['h2', 'Lundi 4 janvier 2021, 6h05'],
        ['p', 'Nous repartons ce matin du port à une vitesse de 17.9 noeuds. Nous sommes actuellement en 38° 43\' 53.472" N, 119° 20\' 26.88" E'],

        ['h2', 'Mardi 5 janvier 2021, 18h14'],
        ['p', 'Nous naviguons actuellement en 37° 19\' 5.628" N, 123° 19\' 5.16" E en direction de la Corée du Sud à une vitesse de 17 noeuds avec un vent de force 6.']
    ],
    [
        ['h2', 'Mardi 5 janvier 2021, 22h01'],
        ['p', 'Nous sommes déjà arrivé au port de Busan d\'où nous repartirons vendredi.'],

        ['h2', 'Vendredi 8 janvier 2021, 3h31'],
        ['p', 'Nous voici repartis en mer ! Nous sommes en 33° 0\' 50.4" N, 127° 6\' 28.8" E et nous naviguons à une vitesse de 18.6 noeuds avec un vent de force 6.'],

        ['h2', 'Samedi 9 janvier 2021, 9h31'],
        ['p', 'Nous voici au port de Ningbo, de nouveau en Chine.'],

        ['h2', 'Dimanche 10 janvier 2021, 9h58'],
        ['p', 'Nous sommes actuellement en 29° 48\' 32.292" N, 122° 14\' 10.32" E et nous naviguons à une vitesse de 10 noeuds avec un vent de force 4 .']
    ],
    [
        ['h2', 'Mercredi 13 janvier 2021, 23h29'],
        ['p', 'Nous voici de nouveau au port de Ningbo.'],

        ['h2', 'Vendredi 15 janvier 2021, 7h05'],
        ['p', 'Nous sommes en 30° 30\' 24.012" N, 122° 36\' 17.64" E, en route vers Shanghai avec un vent de force 4.'],

        ['h2', 'Vendredi 15 janvier 2021, 9h58'],
        ['p', 'Nous voici arrivé au port de Shanghai d\'où repartirons dimanche.'],

        ['h2', 'Dimanche 17 janvier 2021, 14h20'],
        ['p', 'Nous sommes en 30° 21\' 50.4" N, 122° 55\' 19.2" E et nous naviguons à une vitesse de 18.1 noeuds avec un vent de force 4.']
    ],
    [
        ['h2', 'Lundi 18 janvier 2021, 15h17'],
        ['p', 'Nous sommes en 24° 44\' 41.748" N, 119° 44\' 40.2" E, au large de Taiwan. Nous voguons à une vitesse de 12.1 noeuds avec un vent de force 7.'],

        ['h2', 'Mercredi 20 janvier 2021, 4h20'],
        ['p', 'Notre navire est arrivé au port de Shenzen où nous allons rester un jour.'],

        ['h2', 'Jeudi 21 janvier 2021, 7h29'],
        ['p', 'Nous voici déjà repartis en mer. Nous sommes actuellement en 22° 7\' 41.448" N, 114° 26\' 57.84" E, près de Hong Kong. Nous naviguons à une vitesse de 17.8 noeuds avec un vent de force 4.']
    ],
    [
        ['h2', 'Lundi 25 janvier 2021, 17h06'],
        ['p', 'Excuse moi de ne pas t\'avoir rempli ces derniers jours petit journal, j\'ai été malade après avoir mangé ce que mes camarades ont appelé du poisson. Il n\'était pourtant pas rectangle et frit comme je l\'ai toujours mangé ! Bref, nous voici au port de Singapour.'],

        ['h2', 'Mardi 26 janvier 2021, 6h56'],
        ['p', 'Nous voguons maintenant en 1° 30\' 44.64" N, 103° 3\' 43.2" E à une vitesse de 19.7 noeuds avec un vent de force 3.'],

        ['h2', 'Mercredi 27 janvier 2021, 3h19'],
        ['p', 'Nous sommes maintenant en 5° 16\' 52.5" N, 97° 44\' 43.26" E. Nous naviguons à une vitesse de 19.3 noeuds avec un vent de force 4.']
    ],
    [
        ['h2', 'Jeudi 4 février 2021, 6h46'],
        ['p', 'Excuse moi encore petit carnet mais je n\'ai pas pu te remplir pendant plus d\'une semaine à cause du repas de mercredi dernier. On m\'a fait manger des fruits de mer sans me prévenir alors que je suis allergique. J\'ai donc été alité jusqu\'à aujourd\'hui. J\'espère que le cuisinier ne mettra plus de produits de la mer dans nos repas...']
    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [
        ['h2', 'Quelquechosedi JJ février 2021'],
        ["p", "J'ai aujourd'hui reçu une lettre de licenciement. Les autres membres de l'équipage se serait plaint que je laisse mes T-shirt partout ! C'est pourtant faux, je ne laisse QUE trainer mes chaussettes ! Je devrais être récupéré par un navire cette après-midi. Quelle INJUSTICE d'être viré à cause d'un mensonge des autres marins ! Adieu chère carrière chez CMA CGM et adieu cher carnet de bord !"]
    ]
]

export default plainContent
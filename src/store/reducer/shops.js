const initialState = {
    shops: [{
            name: "KOFIFI - kawiarnia i księgarnia dla małych i dużych",
            address: "Ludwika Mierosławskiego 19",
            city: "Warszawa",
            lat: 52.2663477,
            lng: 20.9892083
        },
        {
            name: "Dwa Koty",
            address: "ul. Niekłańska 35",
            city: "Warszawa",
            lat: 52.2374127,
            lng: 21.0598348
        },
        {
            name: "Dziupla zabawki i akcesoria dla dzieci",
            address: "ul. Jerzego Waszyngtona 26/lok.1b",
            city: "Białystok",
            lat: 53.125083,
            lng: 23.153745
        },
        {
            name: "Pomysłowa Kredka",
            address: "al. Tysiąclecia Państwa Polskiego 6",
            city: "Białystok",
            lat: 53.147714,
            lng: 23.157018
        },
        {
            name: "Salon Zabawek Miki",
            address: "ul. Zakopiańska 105",
            city: "Kraków",
            lat: 50.0141659,
            lng: 19.9280389
        },
        {
            name: "elemele24.pl",
            address: "ul. Komuny Paryskiej 1",
            city: "Kraków",
            lat: 50.0060229,
            lng: 19.8970761
        },
        {
            name: "Artykuły Biurowe E & M",
            address: "ul. Józefa Wybickiego 7",
            city: "Kraków",
            lat: 50.0837345,
            lng: 19.9266847
        },
        {
            name: "ABC Dziecka",
            address: "ul. Senatorska 17",
            city: "Warka",
            lat: 51.7838246,
            lng: 21.1902337
        },
        {
            name: "KOLOROWA HISTORIA - fajny sklep z zabawkami",
            address: "ul. Pod Bateriami 26",
            city: "Piaseczno",
            lat: 52.0526536,
            lng: 21.0013092
        },
        {
            name: "Sklep z zabawkami FRAJDA",
            address: "ul. Magiczna 6",
            city: "Warszawa - Białołęka",
            lat: 52.3128168,
            lng: 21.0626806
        },
        {
            name: "F.H.U. Dwa Kółka",
            address: "ul. Henryka Sienkiewicza 51",
            city: "Piaseczno",
            lat: 52.0640847,
            lng: 21.0175539
        },
        {
            name: "Albion s.c. Centrum usług językowych",
            address: "ul. Powstańców Śląskich 1",
            city: "Rybnik",
            lat: 50.0976619,
            lng: 18.5449027
        },
        {
            name: "sklep z zabawkami 'Orino' ABC Domu",
            address: "ul. Edwarda Dembowskiego 10",
            city: "Warszawa",
            lat: 52.1529324,
            lng: 21.0308255
        },
        {
            name: "GC Toys",
            address: "ul. Kamieńskiego 11",
            city: "Kraków",
            lat: 50.0280186,
            lng: 19.9510028
        },
        {
            name: "Gandalf - sklep papierniczy",
            address: "ul. Przejazd 1",
            city: "Blizne Łaszczyńskiego",
            lat: 52.2407235,
            lng: 20.8847455
        },
        {
            name: "ABC Dziecka - Sklep dziecięcy",
            address: "ul. Częstochowska 177",
            city: "Kalisz",
            lat: 51.733711,
            lng: 18.0964093
        },
        {
            name: "sklep papierniczy - Czarny Kot Biały Kot",
            address: "ul. Polinezyjska 8",
            city: "Warszawa",
            lat: 52.152485,
            lng: 21.044923
        },
        {
            name: "Powielarnia",
            address: "ul. Czarnomorska 13",
            city: "Warszawa",
            lat: 52.1799169,
            lng: 21.0457639
        },
        {
            name: "Pegaz Bis",
            address: "ul. Zamkowa 1",
            city: "Ostrzeszów",
            lat: 51.426398,
            lng: 17.932891
        },
        {
            name: "Sklep Muu-MINEK",
            address: "ul. Stanisława Augusta Poniatowskiego 1",
            city: "Izabelin C",
            lat: 52.2936453,
            lng: 20.8126866
        },
        {
            name: "Sklep Muminek",
            address: "ul. Hubala-Dobrzańskiego 62",
            city: "Babice",
            lat: 52.2512807,
            lng: 20.8461754
        },
        {
            name: "Sklep Muu-MINEK",
            address: "ul. Belgradzka 44",
            city: "Warszawa",
            lat: 52.139683,
            lng: 21.0564425
        },
        {
            name: "Sklep Muu-MINEK - C.H. Land",
            address: "ul. Wałbrzyska 11",
            city: "Warszawa",
            lat: 52.1725092,
            lng: 21.0250982
        },
        {
            name: "Matrix",
            address: "ul. Resorowa 30",
            city: "Warszawa",
            lat: 52.1726423,
            lng: 21.0674887
        },
        {
            name: "Kup Klocki - C.H. AtriumTargówek ",
            address: "ul. Głębocka 15",
            city: "Warszawa",
            lat: 52.3040088,
            lng: 21.0583175
        },
        {
            name: "Art-Equipment",
            address: "ul. Piotra Skargi 1",
            city: "Warszawa",
            lat: 52.2522595,
            lng: 21.2153587
        },
        {
            name: "Pszczółka Maja",
            address: "ul. Spółdzielcza 2",
            city: "Halinów",
            lat: 52.224267,
            lng: 21.350488
        },
        {
            name: "TamToSiamTo",
            address: "ul. Radosna 11",
            city: "Warszawa",
            lat: 52.1737491,
            lng: 21.0680085
        },
        {
            name: " Kids-World - C.H. Alfa",
            address: "ul. Świętojańska 15",
            city: "Białystok",
            lat: 53.125718,
            lng: 23.169516
        },
        {
            name: " Kids-World - Galeria Jurowiecka",
            address: "ul. Jurowiecka 1",
            city: "Białystok",
            lat: 53.1363028,
            lng: 23.1630099
        },
        {
            name: " Kids-World - Outlet Białystok",
            address: "ul. Władysława Wysockiego 67",
            city: "Białystok",
            lat: 53.16251,
            lng: 23.185722
        },
        {
            name: " Kids-World - Galeria Zielone Wzgórze",
            address: "ul. Wrocławska 20",
            city: "Białystok",
            lat: 53.1239078,
            lng: 23.0986422
        },
        {
            name: " Kids-World - Galeria Antoniuk",
            address: "ul. Antoniukowska 56",
            city: "Białystok",
            lat: 53.1451058,
            lng: 23.1326009
        },
        {
            name: "Pluszak",
            address: "ul. Porajów 1",
            city: "Warszawa",
            lat: 52.3136691,
            lng: 20.9572671
        },
        {
            name: "U Piotrusia",
            address: "ul. Warszawska 12",
            city: "Nasielsk",
            lat: 52.589677,
            lng: 20.8057561
        },
        {
            name: "Zabawki z Klasą",
            address: "ul. Zagórska 3",
            city: "Kielce",
            lat: 50.8675859,
            lng: 20.638635
        },
        {
            name: "Alik",
            address: "al. Jerzego Szajnowicza-Iwanowa 8A",
            city: "Kielce",
            lat: 50.8808034,
            lng: 20.5890783
        },
        {
            name: "Myszka",
            address: "ul. Klonowa 54",
            city: "Kielce",
            lat: 50.8930501,
            lng: 20.6407775
        },
        {
            name: "Zabawki Z Pasją",
            address: "ul. Szosa Okrężna 3-13",
            city: "Toruń",
            lat: 53.015248,
            lng: 18.559341
        },
        {
            name: "Hurtownia Maro",
            address: "ul. Warszawska 91",
            city: "Rypin",
            lat: 53.054981,
            lng: 19.4264799
        },

        {
            name: "Top Toys - Galeria Mazovia",
            address: "ul. Wyszogrodzka 127",
            city: "Płock",
            lat: 52.5376797,
            lng: 19.7513396
        },

        {
            name: "Top Toys",
            address: "al. Wyzwolenia 3A",
            city: "Szczecin",
            lat: 53.429621,
            lng: 14.5531569
        },
        {
            name: "Top Toys",
            address: "ul. Królowej Jadwigi 20",
            city: "Toruń",
            lat: 53.011064,
            lng: 18.609261
        },
        {
            name: "Top Toys",
            address: "ul. Świętojańska 76",
            city: "Gdynia",
            lat: 54.514065,
            lng: 18.53984
        },
        {
            name: "Top Toys - C.H. MANHATTAN",
            address: "al. Grunwaldzka 82",
            city: "Gdańsk",
            lat: 54.377406,
            lng: 18.6070451
        },
        {
            name: "Top Toys - FOCUS MALL",
            address: "ul. Jagiellońska 39-47",
            city: "Bydgoszcz",
            lat: 53.1241572,
            lng: 18.0166945
        },
        {
            name: "Top Toys - WZORCOWNIA - POZIOM -1",
            address: "ul. Kilińskiego 3",
            city: "Włocławek",
            lat: 52.6553819,
            lng: 19.064247
        },
        {
            name: "Top Toys - GALERIA ASKANA - I piętro",
            address: "al. Konstytucji 3 Maja 102",
            city: "Gorzów Wielkopolski",
            lat: 52.730883,
            lng: 15.2273019
        },
        {
            name: "Księgarnia Polango",
            address: "plac Wilsona 4/109",
            city: "Warszawa",
            lat: 52.269404,
            lng: 20.9848419
        },
        {
            name: "Księgarnia Art. P",
            address: "ul. Kopernika 8",
            city: "Kozienice",
            lat: 51.5912246,
            lng: 21.5390386
        },
        {
            name: "sklep Oki-Doki",
            address: "ul. Kościuszki 14/17",
            city: "Malbork",
            lat: 54.0364128,
            lng: 19.0341961
        },
        {
            name: "Kuferek Gagatka",
            address: "ul. Rubinowa 2",
            city: "Piaseczno",
            lat: 52.0946036,
            lng: 21.0269871
        },
        {
            name: "pepito.pl - kreatywne zabawki",
            address: "ul. Szczuki 2/50",
            city: "Warszawa",
            lat: 52.1459057,
            lng: 21.0474771
        },
        {
            name: "Ygrek - Galeria Lipowa",
            address: "ul. Lipowa",
            city: "Czersk",
            lat: 53.7972679,
            lng: 17.966161
        },
        {
            name: "Artshock.pl",
            address: "ul. Henryka Sienkiewicza 1",
            city: "Wołomin",
            lat: 52.3438857,
            lng: 21.2422624
        },

        {
            name: "Riwana - Kraina zabawek",
            address: "ul. Macieja Rataja 2",
            city: "Bydgoszcz",
            lat: 53.157389,
            lng: 18.149707
        },
        {
            name: "Toy Planet - C.H. Robi",
            address: "ul. Wincentego Pola 6",
            city: "Brodnica",
            lat: 53.2632453,
            lng: 19.3866241
        },
        {
            name: "zaap.pl- sklep papierniczy",
            address: "al. W. Reymonta 12/12",
            city: "Warszawa",
            lat: 52.274471,
            lng: 20.938056
        },
        {
            name: "Puchatek",
            address: "ul. Białostocka 4",
            city: "Wysokie Mazowieckie",
            lat: 52.9201806,
            lng: 22.5220908
        },
        {
            name: "Piccolino",
            address: "ul. Warszawska 84",
            city: "Łomianki",
            lat: 52.3303624,
            lng: 20.9037657
        },

    ]

}

const shops = (state = initialState) => {


    return state
}

export default shops
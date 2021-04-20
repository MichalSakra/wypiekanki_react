import w001Img from "../../assets/images/covers/w001.jpg"
import w002Img from "../../assets/images/covers/w002.jpg"
import w003Img from "../../assets/images/covers/w003.jpg"
import w004Img from "../../assets/images/covers/w004.jpg"
import w005Img from "../../assets/images/covers/w005.jpg"
import w006Img from "../../assets/images/covers/w006.jpg"

const initialStore = {
    sets: [{
            id: "w001",
            name: "Wypiekanki",
            buyLink: 'https://www.fabrykafrajdy.pl/pl/p/Wypiekanki-kreatywna-zabawa/37',
            frontImg: w001Img,
            text: "Stwórz własną, niepowtarzalną kolekcję zawieszek, guzików. Zestaw Wypiekanek sprawi wiele wiele zabawy zarówno dzieciom, jak i dorosłym.",
            href: "#wypiekanki-kreatywna-zabawa",
            logoImg: null,
            colour: "rgb(158, 223, 221)"


        },
        {
            id: "w002",
            name: "Wypiekanki owocowe",
            buyLink: 'https://www.fabrykafrajdy.pl/pl/p/Wypiekanki-owocowe-kreatywna-zabawa-/45',
            frontImg: w002Img,
            text: "Zaskocz wszystkich cytrusowymi guzikami lub kolczykami z soczystą malinką. Lubisz owoce? Owocowe Wypiekanki muszą być Twoje :)",
            href: "#wypiekanki-owocowe",
            logoImg: 'img/owocowe.jpg',
            colour: "rgb(164, 212, 32)"

        }, {
            id: "w003",
            name: "Wypiekanki słodkie",
            buyLink: 'https://www.fabrykafrajdy.pl/pl/p/Wypiekanki-slodkie-kreatywna-zabawa-/46',
            frontImg: w003Img,
            text: "Gratka dla wszystkich łasuchów. Wybierz zestaw Słodkich Wypiekanek i zawsze miej coś słodkiego przy sobie ;)",
            href: "#wypiekanki-slodkie",
            logoImg: 'img/slodkie.jpg',
            colour: "rgb(236, 74, 97)"

        }, {
            id: "w004",
            name: "Wypiekanki morskie",
            buyLink: 'https://www.fabrykafrajdy.pl/pl/p/Wypiekanki-morskie-kreatywna-zabawa-/47',
            frontImg: w004Img,
            text: "Ahoj przygodo! Nawet gdy do wakacji jeszcze daleko, z zestawem Morskich Wypiekanek przeniesiesz się w magiczny świat rajskich przygód.",
            href: "#wypiekanki-morskie",
            logoImg: 'img/morskie.jpg',
            colour: "rgb(46, 127, 121)"

        }, {
            id: "w005",
            name: "Wypiekanki kosmiczne",
            buyLink: 'https://www.fabrykafrajdy.pl/pl/p/Wypiekanki-kosmiczne-kreatywna-zabawa-/48',
            frontImg: w005Img,
            text: "Uwaga! Wykryto nowe formy życia :) Stwórz rakietę i odwiedź najdalsze zakamarki Wszechświata.",
            href: "#wypiekanki-kosmiczne",
            logoImg: 'img/kosmiczne.jpg',
            colour: "rgb(18, 52, 98)"

        }, {
            id: "w006",
            name: "Wypiekanki zwierzakowe",
            buyLink: 'https://www.fabrykafrajdy.pl/pl/p/Wypiekanki-zwierzakowe-kreatywna-zabawa-/49',
            frontImg: w006Img,
            text: "Zwierzakowe Wypiekanki. Stwórz wyjątkowe ozdoby dla siebie i swoich najbliższych :)  ",
            href: "#wypiekanki-zwierzakowe",
            logoImg: 'img/zwierzakowe.jpg',
            colour: "rgb(251, 167, 17)"

        },
    ]
}


const sets = (state = initialStore) => {


    return state
}

export default sets
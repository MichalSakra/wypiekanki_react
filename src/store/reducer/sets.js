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
            buyLink: '#',
            frontImg: w001Img,
            text: "Stwórz własną, niepowtarzalną kolekcję zawieszek, guzików. Zestaw Wypiekanek sprawi wiele wiele zabawy zarówno dzieciom, jak i dorosłym.",
            href: "#wypiekanki-kreatywna-zabawa",
            logoImg: null,


        },
        {
            id: "w002",
            name: "Wypiekanki owocowe",
            buyLink: '#',
            frontImg: w002Img,
            text: "Zaskocz wszystkich cytrusowymi guzikami lub kolczykami z soczystą malinką. Lubisz owoce? Owocowe Wypiekanki muszą być Twoje :)",
            href: "#wypiekanki-owocowe",
            logoImg: 'img/owocowe.jpg',

        }, {
            id: "w003",
            name: "Wypiekanki słodkie",
            buyLink: '#',
            frontImg: w003Img,
            text: "Gratka dla wszystkich łasuchów. Wybierz zestaw Słodkich Wypiekanek i zawsze miej coś słodkiego przy sobie ;)",
            href: "#wypiekanki-slodkie",
            logoImg: 'img/slodkie.jpg',

        }, {
            id: "w004",
            name: "Wypiekanki morskie",
            buyLink: '#',
            frontImg: w004Img,
            text: "Ahoj przygodo! Nawet gdy do wakacji jeszcze daleko, z zestawem Morskich Wypiekanek przeniesiesz się w magiczny świat rajskich przygód.",
            href: "#wypiekanki-morskie",
            logoImg: 'img/morskie.jpg',

        }, {
            id: "w005",
            name: "Wypiekanki kosmiczne",
            buyLink: '#',
            frontImg: w005Img,
            text: "Uwaga! Wykryto nowe formy życia :) Stwórz rakietę i odwiedź najdalsze zakamarki Wszechświata.",
            href: "#wypiekanki-kosmiczne",
            logoImg: 'img/kosmiczne.jpg',

        }, {
            id: "w006",
            name: "Wypiekanki zwierzakowe",
            buyLink: '#',
            frontImg: w006Img,
            text: "NOWOŚĆ! Zwierzakowe Wypiekanki. Stwórz wyjątkowe ozdoby dla siebie i swoich najbliższych :)  ",
            href: "#wypiekanki-zwierzakowe",
            logoImg: 'img/zwierzakowe.jpg',

        },
    ]
}


const sets = (state = initialStore) => {


    return state
}

export default sets
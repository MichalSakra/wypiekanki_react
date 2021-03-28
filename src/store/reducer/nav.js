const initialStore = {
    nav: [{
            name: "Poznaj Wypiekanki",
            href: "",
            destination: "#about",
            id: "1"
        },
        {
            name: "Nasze zestawy",
            href: "zestawy-wypiekanek",
            destination: "#sets",
            id: "2"
        },
        {
            name: "Gdzie kupić?",
            href: "gdzie-kupic-wypiekanki",
            destination: "#shops",
            id: "3"
        },
        {
            name: "Inspiracje",
            href: "galeria-wypiekanek",
            destination: "#gallery",
            id: "4"
        },
        {
            name: "Kontakt",
            href: "kontakt",
            destination: "#contact",
            id: "5"
        },

    ]
}

const nav = (state = initialStore) => {

    return state
}

export default nav
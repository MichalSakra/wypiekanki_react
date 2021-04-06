import w001Img0 from "../../assets/images/gallery/w001/0.jpg"
import w001Img1 from "../../assets/images/gallery/w001/1.jpg"
import w001Img2 from "../../assets/images/gallery/w001/2.jpg"
import w001Img3 from "../../assets/images/gallery/w001/3.jpg"
import w001Img4 from "../../assets/images/gallery/w001/4.jpg"
import w001Img5 from "../../assets/images/gallery/w001/5.jpg"
import w001Img6 from "../../assets/images/gallery/w001/6.jpg"
import w001Img7 from "../../assets/images/gallery/w001/7.jpg"


import w002Img0 from "../../assets/images/gallery/w002/0.jpg"
import w002Img1 from "../../assets/images/gallery/w002/1.jpg"
import w002Img2 from "../../assets/images/gallery/w002/2.jpg"
import w002Img3 from "../../assets/images/gallery/w002/3.jpg"
import w002Img4 from "../../assets/images/gallery/w002/4.jpg"



import w003Img0 from "../../assets/images/gallery/w003/0.jpg"
import w003Img1 from "../../assets/images/gallery/w003/1.jpg"
import w003Img2 from "../../assets/images/gallery/w003/2.jpg"
import w003Img3 from "../../assets/images/gallery/w003/3.jpg"
import w003Img4 from "../../assets/images/gallery/w003/4.jpg"
import w003Img5 from "../../assets/images/gallery/w003/5.jpg"

import w004Img0 from "../../assets/images/gallery/w004/0.jpg"
import w004Img1 from "../../assets/images/gallery/w004/1.jpg"
import w004Img2 from "../../assets/images/gallery/w004/2.jpg"
import w004Img3 from "../../assets/images/gallery/w004/3.jpg"
import w004Img4 from "../../assets/images/gallery/w004/4.jpg"
import w004Img5 from "../../assets/images/gallery/w004/5.jpg"
import w004Img6 from "../../assets/images/gallery/w004/6.jpg"
import w004Img7 from "../../assets/images/gallery/w004/7.jpg"

const initialStore = {
    gallery: [{
            name: "w001",
            images: [w001Img0,
                w001Img1,
                w001Img2,
                w001Img3,
                w001Img4,
                w001Img5,
                w001Img6,
                w001Img7
            ]

        },
        {
            name: "w002",
            images: [w002Img0,
                w002Img1,
                w002Img2,
                w002Img3,
                w002Img4,

            ]

        },
        {
            name: "w003",
            images: [
                w003Img0,
                w003Img1,
                w003Img2,
                w003Img3,
                w003Img4,
                w003Img5,


            ]

        }, {
            name: "w004",
            images: [
                w004Img0,
                w004Img1,
                w004Img2,
                w004Img3,
                w004Img4,
                w004Img5,


            ]

        }
    ]
}


const gallery = (state = initialStore) => {

    return state
}

export default gallery
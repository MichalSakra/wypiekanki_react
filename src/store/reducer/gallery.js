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


import w005Img0 from "../../assets/images/gallery/w005/0.jpg"
import w005Img1 from "../../assets/images/gallery/w005/1.jpg"
import w005Img2 from "../../assets/images/gallery/w005/2.jpg"
import w005Img3 from "../../assets/images/gallery/w005/3.jpg"
import w005Img4 from "../../assets/images/gallery/w005/4.jpg"
import w005Img5 from "../../assets/images/gallery/w005/5.jpg"
import w005Img6 from "../../assets/images/gallery/w005/6.jpg"
import w005Img7 from "../../assets/images/gallery/w005/7.jpg"
import w005Img8 from "../../assets/images/gallery/w005/8.jpg"


import w006Img0 from "../../assets/images/gallery/w006/0.jpg"
import w006Img1 from "../../assets/images/gallery/w006/1.jpg"
import w006Img2 from "../../assets/images/gallery/w006/2.jpg"
import w006Img3 from "../../assets/images/gallery/w006/3.jpg"

const initialStore = {
    gallery: [{
            id: "w001",
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
            id: "w002",
            images: [w002Img0,
                w002Img1,
                w002Img2,
                w002Img3,
                w002Img4,

            ]

        },
        {
            id: "w003",
            images: [
                w003Img0,
                w003Img1,
                w003Img2,
                w003Img3,
                w003Img4,
                w003Img5,


            ]

        }, {
            id: "w004",
            images: [
                w004Img0,
                w004Img1,
                w004Img2,
                w004Img3,
                w004Img4,
                w004Img5,
                w004Img6,
                w004Img7,


            ]

        },
        {
            id: "w005",
            images: [
                w005Img0,
                w005Img1,
                w005Img2,
                w005Img3,
                w005Img4,
                w005Img5,
                w005Img6,
                w005Img7,
                w005Img8,


            ]

        },
        {
            id: "w006",
            images: [
                w006Img0,
                w006Img1,
                w006Img2,
                w006Img3,


            ]

        }
    ]
}


const gallery = (state = initialStore) => {

    return state
}

export default gallery
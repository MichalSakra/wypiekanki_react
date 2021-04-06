import React from 'react';
import Lightbox from 'react-image-lightbox'

const LightboxItem = props => {


    return <Lightbox
        mainSrc={props.mainSrc}
        nextSrc={props.nextSrc}
        prevSrc={props.prevSrc}
        onCloseRequest={props.closeRequest}
        onMovePrevRequest={props.movePrevRequest}
        onMoveNextRequest={props.moveNextRequest} />
}
export default LightboxItem
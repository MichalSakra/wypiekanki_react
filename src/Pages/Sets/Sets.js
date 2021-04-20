import React from 'react';
import Section from "../../containers/Section/Section"
import Set from "../../components/Set/Set"
import { connect } from "react-redux"
import classes from './Sets.module.sass';

import Lightbox from "../../components/UI/LightboxItem/LightboxItem"

class Sets extends React.Component {

    state = {
        isLightboxOpen: false,
        photoIndex: 0,
        images: []
    }

    showLightboxModal = (galleryId) => {
        console.log(galleryId);
        console.log(this.props.gallery);

        const images = this.props.gallery.filter(set => {
            return set.id === galleryId
        })
        console.log(images);

        this.setState({
            isLightboxOpen: true,
            images: images[0].images
        })
    }
    closeLightboxModal = () => {
        this.setState({ isLightboxOpen: false, images: [], photoIndex: 0 })
    }

    buyBynHandler = (link) => {
        window.open(link, "_blank")
    }

    render() {
        const { isLightboxOpen, images, photoIndex } = this.state
        return <Section classes={classes.Sets}>

            {isLightboxOpen ? (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    closeRequest={() => this.closeLightboxModal()}
                    movePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                    }
                    moveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                    }
                />
            ) : null}
            {this.props.sets.map((set, i) => {
                return <Set key={set.id} data={set} id={set.id} buyBtnClick={this.buyBynHandler} galleryBtnClick={this.showLightboxModal} />

            })}


        </Section>
    }
}
const mapStateToProps = state => {

    return {
        sets: state.sets.sets,
        gallery: state.gallery.gallery
    }

}

export default connect(mapStateToProps)(Sets)
import React from 'react';
import { connect } from 'react-redux'
import Section from '../../containers/Section/Section'
import Image from "../../components/UI/Image/Image"

import classes from './Gallery.module.sass';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class Gallery extends React.Component {

    state = {
        images: [],
        isLightboxOpen: false,
        photoIndex: 0

    }

    componentDidMount() {
        this.showImages()
    }

    lightboxOpenHandler = (e) => {
        const photoIndex = e.target.attributes["data-index"].value
        this.setState(prev => {
            return {
                ...prev,
                isLightboxOpen: true,
                photoIndex

            }
        })
    }

    showImages = () => {

        const images = this.props.gallery.gallery.reduce((prev, next) => {

            return [...prev, ...next.images]
        }, [])

        this.setState(prev => {
            return {
                ...prev,
                images
            }
        })
    }

    render() {
        const { images, isLightboxOpen, photoIndex } = this.state
        return (
            <Section classes={classes.Gallery_Wrapper}>
                {images !== [] ?
                    images.map((image, index) => {

                        return <Image key={image} index={index} click={this.lightboxOpenHandler} src={image} />
                    }) : null}



                {isLightboxOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isLightboxOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </Section>
        )
    }
}

const mapStateToProps = state => {

    return {
        gallery: state.gallery
    }
}

export default connect(mapStateToProps)(Gallery)
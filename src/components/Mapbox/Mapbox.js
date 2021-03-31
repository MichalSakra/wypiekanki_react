import React, { useState } from 'react';
import Map, { Marker } from "react-map-gl"
import { connect } from "react-redux"
import MapModal from "../../components/UI/MapModal/MapModal"
import { GiPositionMarker } from "react-icons/gi"
import classes from './Mapbox.module.sass';
const Mapbox = props => {
    const [viewport, setViewport] = useState({
        latitude: 51.7577,
        longitude: 19.2376,
        zoom: 5
    });

    const [selectedShop, setSelectedShop] = useState(null)

    const showShopInfoHandler = (e, shop) => {
        e.preventDefault()
        setSelectedShop(shop)
    }

    const closeShopInfoHandler = () => {
        console.log();
        setSelectedShop(null)
    }

    const showMarkers = shops => {
        return shops.shops.map((shop, i) => {
            return <Marker
                key={shop.name}
                latitude={shop.lat}
                longitude={shop.lng}
            >
                <div onClick={(e) => showShopInfoHandler(e, shop)}>
                    <GiPositionMarker className={classes.Marker} />
                </div>
            </Marker>
        })
    }

    const showInformationModal = () => {
        return (
            <div className={classes.Mapbox_ShopCard}>

                <MapModal data={selectedShop} click={closeShopInfoHandler} />

            </div >
        )
    }

    return (

        <div className={classes.Mapbox_Wrapper}>

            {selectedShop !== null ? showInformationModal() : null
            }

            <Map {...viewport}
                onClick={closeShopInfoHandler}
                mapStyle="mapbox://styles/michals2/ckmxwnk8618gn17o8badxf9mg"
                mapboxApiAccessToken="pk.eyJ1IjoibWljaGFsczIiLCJhIjoiY2tteGlqN2NrMHBjcTMycm5ydnl1bjlyeSJ9.KkJ-AswJxnogzq_rcIyExQ"
                width="80vw"
                height="500px"
                onViewportChange={(viewport) => setViewport(viewport)}>

                {showMarkers(props.shops)}
            </Map>
        </div >
    )
}
const mapStateToProps = state => {
    return {
        shops: state.shops
    }
}


export default connect(mapStateToProps)(Mapbox)
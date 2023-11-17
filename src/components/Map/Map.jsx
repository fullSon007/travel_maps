import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import {LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import makeStyles from "./style";

const Map = ({setCoordinates, setBounds, coordinates }) => {
    const classes = makeStyles();
    const isMoblie = useMediaQuery('(min-with:600px)');

 
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyDWC6zeN1h1Z4jrdKPSq0EgITMFhS5F_rM'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                }}
                onChildClick={''}
            
            >

            </GoogleMapReact>

        </div>

        // <h1>Map</h1>
    );
}

export default Map;
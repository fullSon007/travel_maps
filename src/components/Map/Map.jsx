import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import makeStyles from "./style";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
    const classes = makeStyles();
    const isMoblie = useMediaQuery('(min-with:600px)');

    // const coordinates = { lat: 0, lng: 0};
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyBTtUQpn-x5lGoBNYDe5O4xkxiinbpf7Pw' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
            
            >
                {places?.map((place,i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longtitude)}
                        key={i}
                    >
                        {
                            isMoblie ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typograohy} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : ''}
                                        alt={place.name}
                                    />

                                </Paper>
                            ) 
                        }
                    </div>
                ))}
            </GoogleMapReact>

        </div>

        // <h1>Map</h1>
    );
}

export default Map;
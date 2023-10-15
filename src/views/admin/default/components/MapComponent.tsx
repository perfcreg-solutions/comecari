import React from 'react';
import { useState } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useEffect } from 'react';

const MapComponent = (props) => {
    const { pickupPoint, destination, activeLocation, height } = props;
    const [directions, setDirections] = useState<any>(null);

    const mapContainerStyle = {
        width: "100%",
        height: height || "600px",
    };
    // const icon = typeof window !== "undefined" && new window.google.maps.Size(40, 40)
    const carIconUrl = 'https://images.app.goo.gl/bGSLFLjYr9Wy3epA6'


    const onMapLoad = (map) => {
        // const icon = typeof window !== "undefined" && new window.google.maps.Size(40, 40)
        const carIconUrl = 'https://images.app.goo.gl/bGSLFLjYr9Wy3epA6'

        const carIcon = {
            url: carIconUrl,
            // scaledSize: icon,
        };

        // ... Rest of your code
    };



    const center = { lat: (pickupPoint.lat + destination.lat) / 2, lng: (pickupPoint.lng + destination.lng) / 2 };
    useEffect(() => {
        if (window.google) {
            const directionsService = new window.google.maps.DirectionsService();

            directionsService.route(
                {
                    origin: pickupPoint,
                    destination: destination,
                    travelMode: "DRIVING",
                },
                (result, status) => {
                    if (status === "OK") {
                        setDirections(result);
                    }
                }
            );
        }
    }, [pickupPoint, destination]);

    // https://images.app.goo.gl/bGSLFLjYr9Wy3epA6

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
            onLoad={onMapLoad}
        >
            <Marker position={pickupPoint} label="Pickup" />
            <Marker position={destination} label="Destination" />
            {/* <Marker position={activeLocation} label="Active Location" /> */}

            <Marker
                position={activeLocation}
                icon={carIconUrl}
                label="Active Location"
            />
            {/* Add DirectionsRenderer to show the route */}

            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    );
};

export default MapComponent;

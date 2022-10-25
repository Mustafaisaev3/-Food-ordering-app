import { useState } from "react";

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult

interface fetchDirectionsInterface {
    origin: LatLngLiteral,
    destination: LatLngLiteral,
}

const fetchDirections = () => {
    const [directions, setDirections] = useState<DirectionsResult | null>(null);

    const getDirections = ({origin, destination}: fetchDirectionsInterface) => {
        const service = new google.maps.DirectionsService();
        if(destination){
            service.route(
              {
                origin,
                destination,
                travelMode: google.maps.TravelMode.DRIVING,
              },
              (result, status) => {
                if (status === "OK" && result) {
                  setDirections(result);
                }
              }
            );
        }
    }

    return {
        directions,
        getDirections
    }

};

export default fetchDirections
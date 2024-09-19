import React from "react";
import {destinations} from "../../store/FakeApi";
import {calculateDistance} from "../../utils";
import {NearbyLocationsProps} from "../../types/DestinationType";
import styles from "./NearbyLocations.module.scss";

const NearbyLocations: React.FC<NearbyLocationsProps> = ({
                                                             selectedDestination,
                                                             onLocationClick,
                                                         }) => {
    const nearby = destinations
        .filter((location) => location.id !== selectedDestination.id)
        .map((location) => ({
            ...location,
            distance: calculateDistance(
                selectedDestination.latitude,
                selectedDestination.longitude,
                location.latitude,
                location.longitude
            ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

    return (
        <div>
            <p className={styles.nearbyText}>Nearby Locations</p>
            <div>
                {nearby.map((location) => (
                    <button
                        key={location.id}
                        className={styles.nearbyButton}
                        onClick={() => onLocationClick(location)}
                    >
                        {location.name.toUpperCase()}, {location.country.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NearbyLocations;
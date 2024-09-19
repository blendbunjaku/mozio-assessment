export interface Destination {
    id: number;
    name: string;
    description: string;
    country: string;
    climate: string;
    currency: string;
    latitude: number;
    longitude: number;
}

export type SelectedDestination = {
    latitude: number;
    longitude: number;
    id: number;
};

export type NearbyLocationsProps = {
    selectedDestination: SelectedDestination;
    onLocationClick: (destination: Destination) => void;
};
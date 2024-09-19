import React, { useState, useEffect } from 'react';
import styles from './SearchDestination.module.scss';
import Select from 'react-select';
import { fetchDestinations } from '../../store/FakeApi';
import { Destination } from '../../types/DestinationType';
import NearbyLocations from '../NearbyLocations/NearbyLocations';
import Spinner from '../Spinner/Spinner';
import { debounce } from 'lodash';

const DestinationSearch = () => {
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

    const handleSelectChange = debounce(async (option: any) => {
        if (option) {
            setLoading(true);
            setError(null);
            try {
                const fetchedDestinations = await fetchDestinations(option.value);
                const destination = fetchedDestinations.find((dest) => dest.name === option.value);
                setSelectedDestination(destination || null);
            } catch (err) {
                setError("Failed to fetch destination.");
            } finally {
                setLoading(false);
            }
        }
    }, 300);


    useEffect(() => {
        const loadOptions = async () => {
            try {
                const fetchedDestinations = await fetchDestinations('');
                setOptions(fetchedDestinations.map((destination) => ({
                    value: destination.name,
                    label: `${destination.name}, ${destination.country}`,
                })));
            } catch (error) {
                console.error('Error loading options:', error);
            }
        };

        loadOptions();
    }, []);


    const handleNearbyLocationClick = (destination: Destination) => {
        setLoading(true);
        setTimeout(() => {
            setSelectedDestination(destination);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
            <p className={styles.locationText}>Location</p>
            <Select
                id="location"
                options={options}
                onChange={handleSelectChange}
                placeholder="Search for a location..."
                isClearable
            />

            {error && <p className={styles.error}>{error}</p>}
            {loading && <Spinner />}
            </div>

            {!loading && selectedDestination && (
                <div>
                    <p className={styles.cityText}>{selectedDestination.name}</p>
                    <p>{selectedDestination.description}</p>
                    <p><strong>Country:</strong> {selectedDestination.country}</p>
                    <p><strong>Climate:</strong> {selectedDestination.climate}</p>
                    <p><strong>Currency:</strong> {selectedDestination.currency}</p>
                    <NearbyLocations
                        selectedDestination={selectedDestination}
                        onLocationClick={handleNearbyLocationClick}
                    />
                </div>
            )}
        </div>
    );
};

export default DestinationSearch;

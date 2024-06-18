import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_API_KEY } from './../../config';
import { requestLocationPermission } from './permissions';
import { countries } from 'country-data';

Geocoder.init(GOOGLE_API_KEY);

export const getCurrentLocation = async () => {
  const permission = await requestLocationPermission();
  if (permission) {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          try {
            const address = await Geocoder.from(coords);
            const addressComponents = address.results[0].address_components;

            // Extract the street name
            const street = addressComponents.find(component =>
              component.types.includes("route")
            )?.long_name;

            // Extract the street number
            const streetNumber = addressComponents.find(component =>
              component.types.includes("street_number")
            )?.long_name;

            // Extract the country name
            const countryName = addressComponents.find(component =>
              component.types.includes("country")
            ).short_name;

            // Get the country code
            const countryCode = getCountryCode(countryName);

            resolve({ coords, countryName, countryCode, street, streetNumber });
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    });
  } else {
    throw new Error('Location permission denied');
  }
};

const getCountryCode = (countryName) => {
  const countryInfo = Object.values(countries).find(
    (country) => country.alpha2 === countryName
  );
  return countryInfo ? countryInfo.countryCallingCodes[0] : '+972';
};

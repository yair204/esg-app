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
          console.log("🚀 ~ coords:", coords)
          try {
            const address = await Geocoder.from(coords);
            console.log("🚀 ~ address:", address)
            const countryName = address.results[0].address_components.find(component => component.types.includes("country")).short_name;
            const countryCode = getCountryCode(countryName);
            resolve({ coords, countryName, countryCode });
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

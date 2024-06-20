import axios from 'axios';
import { GOOGLE_API_KEY } from '../../config';

export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in kilometers
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return Math.floor(d);
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}


// Function to calculate time
export const calculateTravelTime = (distance, mode) => {
  let speed; // speed in km/h

  switch (mode) {
    case 'walking':
      speed = 5; // Average walking speed in km/h
      break;
    case 'bicycling':
      speed = 15; // Average bicycling speed in km/h
      break;
    case 'driving':
      speed = 60; 
      break
    default:
      throw new Error('Invalid mode of transportation');
  }

  // Calculate time in hours
  const timeInHours = distance / speed;

  // Convert time to minutes
  const timeInMinutes = timeInHours * 60;

  return timeInMinutes;
};





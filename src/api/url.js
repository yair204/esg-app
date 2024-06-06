export const API = 'http://10.0.2.2:8000';


export const GET_ITEMS_FROM_MARKETPLACE = () => `${API}/api/items`;
export const GET_USER_BY_ID = (id) => `${API}/api/accounts/users/${id}`;
export const GET_ALL_RESTAURANTS = () => `${API}/api/restaurants/list`;
export const GET_USER_BY_EMAIL_AND_PASSWORD = () => `${API}/api/accounts/users/authenticate/`;
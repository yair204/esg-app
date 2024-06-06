import {get, put, post, deleteRequest} from './request';
import {
  GET_ITEMS_FROM_MARKETPLACE,
  GET_USER_BY_ID,
  GET_ALL_RESTAURANTS,
  GET_USER_BY_EMAIL_AND_PASSWORD,
} from './url';


const privetRequest = false;

export const api = {
    marketplace:{
        getItemsFromMarketPlace:async () => await get( GET_ITEMS_FROM_MARKETPLACE(),  privetRequest),

    },
    users:{
      getUserById:async (id) => await get(GET_USER_BY_ID(id),privetRequest),
      getUserByEmailAndPassword:async (body) => await post(GET_USER_BY_EMAIL_AND_PASSWORD(),body, privetRequest),
    },

    foodMarket:{
      getAllRestaurants:async () => await get( GET_ALL_RESTAURANTS(), privetRequest),
    },
}


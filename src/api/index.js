import {get, put, post, deleteRequest} from './request';
import {
  GET_ITEMS_FROM_MARKETPLACE,
  GET_USER_BY_ID,
  GET_ALL_RESTAURANTS,
  GET_USER_BY_EMAIL_AND_PASSWORD,
  GET_REPORT_BY_COMPANY_NAME,
  GET_MANAGER_BY_ID,
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
    reports:{
      getReportByCompanyName:async (name) => await get(GET_REPORT_BY_COMPANY_NAME(name),privetRequest),
    },
    managers:{
      getManagerById:async (id) => await get(GET_MANAGER_BY_ID(id),privetRequest),
    },
}


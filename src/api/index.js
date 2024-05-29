import {get, put, post, deleteRequest} from './request';
import {
  GET_ITEMS_FROM_MARKETPLACE
} from './url';


const privetRequest = false;

export const api = {
    marketplace:{
        getItemsFromMarketPlace:async () => await get( GET_ITEMS_FROM_MARKETPLACE(),  privetRequest),

    }
}


import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM, 
         SHOW_APP_NOTIFICATION, HIDE_APP_NOTIFICATION } from "./action-types";
import store from "./store";

export const addListItem = (payload) => ({ type: ADD_LIST_ITEM, payload })
export const updateListItem = (payload) => ({ type: UPDATE_LIST_ITEM, payload })
export const removeListItem = (id) => {
  store.dispatch(showAppNotification("Todo List Item removed"));
  return { type: REMOVE_LIST_ITEM, id }
}

export const showAppNotification = (content) => ({ type: SHOW_APP_NOTIFICATION, content })
export const hideAppNotification = () => ({ type: HIDE_APP_NOTIFICATION })

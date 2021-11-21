import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { combineReducers } from "redux";
import { contactsApi } from "./contacts/contactsSlice";
import filter from "./contacts/contacts-reducer";

// const phoneBook = combineReducers({
//   [contactsApi.reducerPath]: contactsApi.reducer,
//   filter: filter,
// })

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   devTools: process.env.NODE_ENV === "development",
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

// export default store;

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filterValue: filter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);

export default store;

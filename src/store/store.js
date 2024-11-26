import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
// Customize the store with the API slice and middleware
const store = configureStore({
    reducer: {
        // Add the API slice reducer to your store
        [api.reducerPath]: api.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import user from "../Slices/user";

const store = configureStore({
    reducer: {
        userInfo: user,
    },
});

export default store;
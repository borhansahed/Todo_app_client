import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reduxSlice/TodoSlice";

const store = configureStore({
    reducer:{
        todosReducer: todosReducer,
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice"


const store = configureStore({
    reducer: {
        UserTodos: todoReducer
    }
    // reducer: todoReducer
});

console.log("store");

// listener that run every time when action dispatch
store.subscribe(() => {
    console.log(store.getState());
});


export default store;
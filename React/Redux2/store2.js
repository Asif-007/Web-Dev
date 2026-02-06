import { configureStore } from "@reduxjs/toolkit";
import FoodSlicer from './slice2';
const stores = configureStore({
    reducer: {
        slice2: FoodSlicer,
    }
})


export default stores;
import {configureStore  } from '@reduxjs/toolkit'
import moveSlice from './reducer'

export default configureStore({
    reducer: {
        movieListing:moveSlice
    }
});
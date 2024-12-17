import { createSlice, current } from '@reduxjs/toolkit';

type Movie = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: number;
};

type MovieState = {
    movies: Movie[];
};

const initialState: MovieState = {
    movies: []
};

const movieSlice = createSlice({
    name: 'movieListing',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload; // Assuming action.payload is an array of Movie objects
            console.log(current(state));
        }
    }
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;

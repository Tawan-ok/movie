import React, { useEffect, useState } from 'react';
import movieApi from '../../api/MovieApi';
import { APIKey } from '../../api/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../store/reducer';
import MovieList from '../MovieList/MovieList';
import './Home.scss'
import Footer from '../Footer/Footer';
function Home() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    console.log(search)

    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor";
            try {
                const res = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`);
                if (res.data && res.data.Search) {
                    dispatch(addMovie(res.data.Search));
                }
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };

        fetchMovies();
    }, [search]);

    return(
        <>
        <div>
        <h3 style={{margin:"1rem 0"}}>Movies</h3>
        <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch( e.target.value)}/>
        <MovieList/>
        <Footer/>
        </div>
        </>
    )
}

export default Home;

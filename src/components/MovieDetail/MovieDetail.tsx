
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './MovieDetail.scss'
import Footer from "../Footer/Footer";
type Movie = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
};

function MovieDetail() {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await MovieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
                setMovie(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error", error);
                setLoading(false);
            }
        };

        fetchDetail();
    }, [id]);

    return (
        <div>
            {loading ? (
                <h4 style={{ margin: "1rem 0" }}>Loading...</h4>
            ) : (
                movie && (
                    <div className="movie-detail-con">
                        <div className="movie-detail-img">
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                        <div className="movie-detail-info">
                            <h3>{movie.Title}</h3>
                            <p style={{ margin: "2rem 0" }}>{movie.Plot}</p>
                            <div>
                                <strong>Released: {movie.Released}</strong>
                            </div>
                        </div>
                    </div>
                )
            )}
            <Footer/>
        </div>
        
    );
}

export default MovieDetail;

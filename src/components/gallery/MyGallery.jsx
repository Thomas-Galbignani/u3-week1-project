import { Component } from "react"
import './MyGallery.css'



class MyGallery extends Component {
    state = {
        movies: [],

    };

    constructor() {
        super();


    }
    componentDidMount() {
        this.fetchMovies(this.props.searchQuery);
    }

    fetchMovies = (query) => {

        fetch(
            `http://www.omdbapi.com/?apikey=7abb1630&s=${query}`
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Errore nel caricamento delle immagini: ' + response.statusText);
            }
        })
            .then((data) => {
                this.setState({ movies: data.Search, isLoading: false });
                console.log(data.Search)
            })
            .catch((error) => {
                console.log('Errore di rete o fetch:', error);

            });
    };
    render() {
        return (
            <>
                <div className="bg-black p-4">
                    <h4 className="text-light">{this.props.titleMovie}</h4>
                    <div
                        className=" g-2  row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 "
                    >
                        {
                            this.state.movies.slice(0, 6).map((movie, index) => {
                                return (
                                    <div key={index} className="col text-center px-1">
                                        <img className="imgDimension" src={movie.Poster} alt="movie picture" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }


}
export default MyGallery

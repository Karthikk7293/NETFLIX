
import axios from '../../axios'
import { useEffect, useState } from 'react';
import Youtube from 'react-youtube'
import { API_KEY, IMAGE_URL } from '../../constants/constants';
import './RowPost.css'

function RowPost(props) {

    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response) => {
            // console.log("api call :", response.data.results[0]);
            setMovie(response.data.results)
        })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const movieTrailer = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log("tariler call", response.data.results[0].key);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
        })
    }

    return (
        <div className="container-fluid">
            <div className="card-title m-4 text-light">
                <h3>{props.title}</h3>
            </div>
            <div className="card-row d-flex my-4">
                {
                movie.map((data) => {
                    return (
                        <div className=" mx-3 poster">
                            <img onClick={() => movieTrailer(data.id)} src={`${IMAGE_URL + data.poster_path}`} className={props.isSmall ? 'action-poster' : 'netflix-poster'} alt="" />
                        </div>
                    )
                })
                }
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    );
}

export default RowPost;

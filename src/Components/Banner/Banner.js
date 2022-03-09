import React from 'react';
import './Banner.css'
import axios from '../../axios'
import { useEffect,useState } from 'react';
import { API_KEY,IMAGE_URL } from '../../constants/constants';

const Banner = () => {

    const [movie, setMovie] = useState('');

useEffect(() => {
  axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      console.log("api call:",response.data.results);
      setMovie(response.data.results.sort(() =>{ return 0.5 - Math.random() })[0])
  })
}, []);

    return (
        <div
        style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}}
        // background:url(http://image.tmdb.org/t/p/w500/wrhLyiY7ksW0fQCqNpa52qiOAH8.jpg)
         className="conatainer-fluid banner" >
            <div className="row pt-5 d-flex justify-content-around">
                <div className="col-lg-4 p-4">
                    <div className="title text-light">
                        <p> movies</p>
                        <h1>{movie ? movie.name : ""} </h1>
                    </div>
                    <div className="buttons">
                        <button className="play rounded m-1">
                            <ion-icon name="play"></ion-icon> <span>Play</span>
                        </button>
                        <button className="my-list rounded m-1">
                            <ion-icon name="add"></ion-icon><span> My List</span>
                        </button>
                    </div>
                    <div className="description text-light mt-4">
                        <h3>Watch Part 3 Now</h3>
                        <p>
                        {movie ? movie.overview : ""}
                        </p>
                    </div>
                </div>
                <div className="col-lg-4"></div>
           
                
            </div>

        </div>
    )
};

export default Banner;

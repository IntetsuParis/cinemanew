import React, { useEffect,useState } from 'react'

import styles from './Trending.module.scss'

import Trending from './Trending';

import Fire from './img/Fire.svg'



function TrendingFilm() {
    const [movieList, setMovieList] = useState([]);

  const getMovies=()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=cb46d76a0b00b19847f93f36a4873953')
    .then(response => response.json())
   .then(json=>setMovieList(json.results))
  }

  useEffect(()=> {
getMovies()
  },[]) 
  return (
<div className = {styles.header}>
    {/* <img src={Fire} alt="Trending" /> */}
    <h2>Trending</h2>
    <h2>See more</h2>
    <div className={styles.film}>
      {movieList.map((movie,index)=>{
        return <Trending key = {index} {...movie}/>
      })}
    </div>
    </div>
  )
}

export default TrendingFilm

import React, { useEffect,useState } from 'react'

import styles from './Trending.module.scss'

import Trending from './Trending';

import Fire from './img/Fire.svg'



function TrendingFilm() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cb46d76a0b00b19847f93f36a4873953');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const json = await response.json();
        
        // Assuming setMovieList is a function that sets the movie list
        setMovieList(json.results.slice(0,12));
      } catch (error) {
        console.error('Error fetching movies:', error);
        // You may want to handle the error in a more user-friendly way in a production environment
      }
    };

  useEffect(()=> {
getMovies()
  },[]) 

  return (
    <>
    <div className={styles.header}>
  <div className={styles.leftSection}>
    <img src={Fire} alt="Trending" />
    <h2>Trending</h2>
  </div>
  <div className={styles.rightSection}>
    <h2>See more</h2>
  </div>
</div>
    <div className={styles.film}>
      {movieList.map((movie,index)=>{
        return <Trending key = {index} {...movie}/>
      })}
    </div>
    </>
  )
    

}

export default TrendingFilm

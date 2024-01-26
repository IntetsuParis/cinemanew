import React, { useEffect,useState } from 'react'

import styles from './Trending.module.scss'

import Trending from './Trending';

import Fire from './img/Fire.svg'



function TrendingFilm() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cb46d76a0b00b19847f93f36a4873953');
<<<<<<< HEAD
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const json = await response.json();
        
        // Assuming setMovieList is a function that sets the movie list
        setMovieList(json.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
        // You may want to handle the error in a more user-friendly way in a production environment
      }
    };
=======
        const json = await response.json();
        setMovieList(json.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    
>>>>>>> da78bf615c11e0e71cfc755406d901d8367cf63b

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

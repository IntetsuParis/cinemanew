import React, { useEffect,useState } from 'react'

import styles from './Trending.module.scss'

import Film from './img/film.png'

import Record from './img/Record.svg'


const  getImage = (poster_path) =>{
return  `https://image.tmdb.org/t/p/w500${poster_path}`

}

const Trending = ({title,poster_path,release_date,vote_average})=> {

 
  return (
    <div className = {styles.movie__container}> 
      <div className ={styles.movies}>
        <img src={getImage(poster_path)} alt="Film" />
        <div className = {styles.movie__info}>
          <h3>{title}</h3>
          <div className = {styles.movie__subinfo}>
            <p>{release_date}</p>
            <img src={Record} alt="Live" />
            <p>{vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending

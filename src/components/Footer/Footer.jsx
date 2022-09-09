import React from 'react'
import style from './Footer.module.css'
import windows from '../../images/ventanas.png'
import search from '../../images/search.png'
import task from '../../images/task.png'

export default function Footer() {
  return (
    <div className={style.container}>
        <div>
            <img className={style.imageWindows} src={windows} alt='Img Windows'></img>
        </div>
        <div className={style.containerInput}>
            <img className={style.imageSearch} src={search} alt='Img Search'></img>
            <input
            className={style.input}
            type="text"
            placeholder="Type here to search"
          ></input>
        </div>
        <div>
            <img className={style.taskImage} src={task} alt='img task'></img>
        </div>
    </div>
  )
}

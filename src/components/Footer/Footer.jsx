import React from 'react'
import { useState } from 'react'
import style from './Footer.module.css'
import windows from '../../images/ventanas.png'
import search from '../../images/search.png'
import task from '../../images/task.png'
import vsCode from '../../images/icons8-visual-studio-code-2019-48.png'

export default function Footer() {

  const [hour, setHour] = useState('')
  const [input, setInput] = useState('')

  const handleVsCode = () => {
    window.open('https://code.visualstudio.com/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if(input === ''){
      return alert('No se puede realizar una busqueda vacia')
    }
    setInput(e.target.value)
    window.open(`https://www.google.com/search?q=${input}`)
    setInput('')
  }



  // const handleInput = (e) => {
  //   e.preventDefault()
  //   const input = document.getElementById('input')
  //   const value = input.value
  //   if(value === '') {
  //     return alert('No se puede realizar una busqueda vacia')
  //   }
  //   window.open(`https://www.google.com/search?q=${value}`)
  // }

  

  const updateTime = () => {
    setHour(new Date().toLocaleTimeString())
  }

  setInterval(updateTime, 1000)

  return (
    <div className={style.container}>
        <div>
            <img className={style.imageWindows} src={windows} alt='Img Windows'></img>
        </div>
        <div className={style.containerInput}>
          <form onSubmit={handleSearch}>
            <img className={style.imageSearch} src={search} alt='Img Search'></img>
            <input
            className={style.input}
            type="text"
            placeholder="Type here to search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          </form>
        </div>
        <div>
            <img className={style.taskImage} src={task} alt='img task'></img>
        </div>
        <div>
            <img onClick={handleVsCode} className={style.imageVsCode} src={vsCode} alt='Img VsCode'></img>
        </div>
        <div className={style.hourContainer}>
            <p className={style.hour}>{hour}</p>
        </div>
    </div>
  )
}

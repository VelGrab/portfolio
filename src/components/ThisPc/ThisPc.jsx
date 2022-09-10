import React from 'react'
import FolderImg from '../../images/desktop-computer.png'
import style from './ThisPc.module.css'

export default function ThisPc() {

  const handleClickFolder = () => {
    if(document.getElementById('folderThisPc').style.display === 'block'){
      document.getElementById('folderThisPc').style.display = 'none'
    } else {
      document.getElementById('folderThisPc').style.display = 'block'
    }
  }

  const handleClose = () => {
    document.getElementById('folderThisPc').style.display = 'none'
  }

  return (
    <div>
      <div onClick={handleClickFolder} className={style.cotainerThisPc}>
        <img className={style.folderImg} src={FolderImg} alt="Folder" />
        <p className={style.folderName}>This Pc</p>
      </div>
      <div id='folderThisPc' className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img className={style.folderImgInside} src={FolderImg} alt="Folder Inside" />
          <p className={style.folderNameInside}>This Pc</p>
          <button onClick={handleClose} className={style.buttonFolder}>X</button>
        </div>
        <div>
          <h5>Hola bienvenido</h5>
        </div>
      </div>
    </div>
  )
}

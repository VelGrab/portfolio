import React from 'react'
import FolderSocial from '../../images/folder_desktop.png'
import style from './SocialNetwork.module.css'

export default function SocialNetwork() {

  const handleClickFolder = () => {
    if(document.getElementById('folderSocial').style.display === 'block'){
      document.getElementById('folderSocial').style.display = 'none'
    } else {
      document.getElementById('folderSocial').style.display = 'block'
    }
  }

  const handleClose = () => {
    document.getElementById('folderSocial').style.display = 'none'
  }

  return (
    <div>
      <div onClick={handleClickFolder} className={style.cotainerSocial}>
        <img className={style.folderImg} src={FolderSocial} alt="Folder" />
        <p className={style.folderName}>Social Networks</p>
      </div>
      <div id='folderSocial' className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img className={style.folderImgInside} src={FolderSocial} alt="Folder Inside" />
          <p className={style.folderNameInside}>Social Networks</p>
          <button onClick={handleClose} className={style.buttonFolder}>X</button>
        </div>
        <div>
          <h5>Hola bienvenido</h5>
        </div>
      </div>
    </div>
  )
}

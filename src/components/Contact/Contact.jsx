import React from 'react'
import style from './Contact.module.css'
import FolderContact from '../../images/correo.png'

export default function Contact() {
    const handleClickFolder = () => {
        if(document.getElementById('folderContact').style.display === 'block'){
          document.getElementById('folderContact').style.display = 'none'
        } else {
          document.getElementById('folderContact').style.display = 'block'
        }
      }
    
      const handleClose = () => {
        document.getElementById('folderContact').style.display = 'none'
      }
  return (
    <div>
      <div onClick={handleClickFolder} className={style.cotainerSocial}>
        <img className={style.folderImg} src={FolderContact} alt="Folder" />
        <p className={style.folderName}>Contact</p>
      </div>
      <div id='folderContact' className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img className={style.folderImgInside} src={FolderContact} alt="Folder Inside" />
          <p className={style.folderNameInside}>Contact</p>
          <button onClick={handleClose} className={style.buttonFolder}>X</button>
        </div>
        <div>
          <h5>Hola bienvenido</h5>
        </div>
      </div>
    </div>
  )
}

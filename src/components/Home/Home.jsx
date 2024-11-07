import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import FolderImg from "../../images/desktop-computer.png";
import FolderSkills from "../../images/folder_desktop.png";
import FolderProjects from "../../images/folder_desktop.png";
import FolderMusic from "../../images/ondas-sonoras.png";
import FolderContact from "../../images/correo.png";
import vsCode from "../../images/icons8-visual-studio-code-2019-48.png";
import style from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  
  const [positions, setPositions] = useState(() => {
    const saved = localStorage.getItem('iconPositions');
    return saved ? JSON.parse(saved) : {
      thispc: { x: 20, y: 20 },
      skills: { x: 20, y: 120 },
      projects: { x: 20, y: 220 },
      contact: { x: 20, y: 320 },
      music: { x: 20, y: 420 },
      vscode: { x: 20, y: 520 }
    };
  });

  const dragStartTime = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    localStorage.setItem('iconPositions', JSON.stringify(positions));
  }, [positions]);

  const handleDragStart = () => {
    setIsDragging(true);
    dragStartTime.current = new Date().getTime();
  };

  const handleDragStop = (id, data, to) => {
    const dragEndTime = new Date().getTime();
    const dragDuration = dragEndTime - dragStartTime.current;
    const deltaX = Math.abs(data.x - positions[id].x);
    const deltaY = Math.abs(data.y - positions[id].y);
  
    setPositions(prev => ({
      ...prev,
      [id]: { x: data.x, y: data.y }
    }));
  
    // Aumentamos el umbral de tiempo y movimiento
    if (dragDuration < 300 && deltaX < 10 && deltaY < 10) {
      setTimeout(() => {
        navigate(to);
      }, 50);
    }
  
    setIsDragging(false);
  };

  const DesktopIcon = ({ id, to, image, name }) => {
    const iconRef = useRef(null);
    
    return (
      <Draggable
        nodeRef={iconRef}
        position={positions[id]}
        onStart={handleDragStart}
        onStop={(e, data) => handleDragStop(id, data, to)}
        bounds="parent"
        handle={`.${style.iconWrapper}`}
        grid={[20, 20]}
      >
        <div ref={iconRef} className={style.iconWrapper}>
          <div 
            className={style.iconContainer}
            onClick={(e) => {
              if (!isDragging) {
                navigate(to);
              }
            }}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isDragging) {
                navigate(to);
              }
            }}
          >
            <img className={style.folderImg} src={image} alt={`${name} icon`} />
            <p className={style.folderName}>{name}</p>
          </div>
        </div>
      </Draggable>
    );
  };

  return (
    <div className={style.desktopContainer}>
      <div className={style.containerFoldersDesktop}>
        <DesktopIcon
          id="thispc"
          to="/thispc"
          image={FolderImg}
          name="This PC"
        />
        <DesktopIcon
          id="skills"
          to="/skills"
          image={FolderSkills}
          name="Skills"
        />
        <DesktopIcon
          id="projects"
          to="/projects"
          image={FolderProjects}
          name="Projects"
        />
        <DesktopIcon
          id="contact"
          to="/contact"
          image={FolderContact}
          name="Contact"
        />
        <DesktopIcon
          id="music"
          to="/music"
          image={FolderMusic}
          name="Music"
        />
        <DesktopIcon
          id="vscode"
          to="/code-editor"
          image={vsCode}
          name="VS Code"
        />
      </div>
    </div>
  );
}
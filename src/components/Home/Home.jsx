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
    const saved = localStorage.getItem("iconPositions");
    return saved
      ? JSON.parse(saved)
      : {
          thispc: { x: 20, y: 20 },
          skills: { x: 20, y: 120 },
          projects: { x: 20, y: 220 },
          contact: { x: 20, y: 320 },
          music: { x: 20, y: 420 },
          vscode: { x: 20, y: 520 },
        };
  });

  const dragStartTime = useRef(null);
  const dragStartPos = useRef({});
  const isDraggingRef = useRef(false);
  const draggedDistance = useRef({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem("iconPositions", JSON.stringify(positions));
  }, [positions]);

  const handleDragStart = (id, data) => {
    dragStartTime.current = Date.now();
    dragStartPos.current[id] = { x: data.x, y: data.y };
    isDraggingRef.current = false;
    draggedDistance.current = { x: 0, y: 0 };
  };

  const handleDrag = (id, data) => {
    const start = dragStartPos.current[id];
    if (start) {
      const movedX = Math.abs(data.x - start.x);
      const movedY = Math.abs(data.y - start.y);
      
      draggedDistance.current = { x: movedX, y: movedY };
      
      if (movedX > 5 || movedY > 5) {
        isDraggingRef.current = true;
      }
    }
  };

  const handleDragStop = (id, data, to) => {
    const duration = Date.now() - (dragStartTime.current || Date.now());
    const movedX = draggedDistance.current.x;
    const movedY = draggedDistance.current.y;

    setPositions((prev) => ({
      ...prev,
      [id]: { x: data.x, y: data.y },
    }));

    if (!isDraggingRef.current && movedX < 5 && movedY < 5 && duration < 300) {
      navigate(to);
    }

    // Reset refs
    isDraggingRef.current = false;
    draggedDistance.current = { x: 0, y: 0 };
  };

  const DesktopIcon = ({ id, to, image, name }) => {
    const iconRef = useRef(null);

    return (
      <Draggable
        nodeRef={iconRef}
        position={positions[id]}
        onStart={(e, data) => handleDragStart(id, data)}
        onDrag={(e, data) => handleDrag(id, data)}
        onStop={(e, data) => handleDragStop(id, data, to)}
        bounds="parent"
        handle={`.${style.iconWrapper}`}
        grid={[20, 20]}
      >
        <div ref={iconRef} className={style.iconWrapper}>
          <div
            className={style.iconContainer}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") navigate(to);
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
        <DesktopIcon id="music" to="/music" image={FolderMusic} name="Music" />
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
// CodeEditor.jsx
import React, { useState, useCallback } from "react";
import Home from "../Home/Home";
import style from "./CodeEditor.module.css";
import { Link } from "react-router-dom";

const ExecutableCodeEditor = () => {
  const [code, setCode] = useState(
    '// Escribe tu código JavaScript aquí\n// Ejemplo:\nconsole.log("Hola mundo!");\n'
  );
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const executeCode = useCallback(() => {
    setOutput("");
    setError("");

    const sandboxEnv = {
      console: {
        log: (...args) => {
          setOutput((prev) => prev + args.join(" ") + "\n");
        },
        error: (...args) => {
          setOutput((prev) => prev + "Error: " + args.join(" ") + "\n");
        },
      },
    };

    try {
      const wrappedCode = `
        try {
          ${code}
        } catch (error) {
          console.error(error.message);
        }
      `;

      /* eslint-disable no-new-func */
      const safeFunction = new Function(
        ...Object.keys(sandboxEnv),
        wrappedCode
      );
      /* eslint-enable no-new-func */
      safeFunction(...Object.values(sandboxEnv));
    } catch (err) {
      setError(err.message);
    }
  }, [code]);

  return (
    <div>
      <Home />
      <div className={style["code-editor-card"]}>
        <div className={style["editor-header"]}>
          <span className={style["editor-title"]}>
            Editor de Código JavaScript
          </span>
          <button className={style["run-button"]} onClick={executeCode}>
            Ejecutar
          </button>
          <div className={style["window-controls"]}>
            <div className={`${style.control} ${style.yellow}`}></div>
            <div className={`${style.control} ${style.green}`}></div>
            <Link to="/home" className={style.redLink}>
              <div className={`${style.control} ${style.red}`}></div>
            </Link>
          </div>
        </div>

        <div className={style["editor-container"]}>
          <div className={style["code-panel"]}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={style["code-textarea"]}
              spellCheck="false"
            />
          </div>

          <div className={style["output-panel"]}>
            <div className={style["console-header"]}>Consola</div>
            <div className={style["console-content"]}>
              <pre className={style["output-text"]}>{output}</pre>
              {error && <pre className={style["error-text"]}>{error}</pre>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutableCodeEditor;

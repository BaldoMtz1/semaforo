import React, { useEffect, useState } from "react";

export const App = () => {
  const [color, setColor] = useState();
  const [flag, setFlag] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0)

  // console.log(currentSpeed);

  const incremetSpeed = Number(currentSpeed)
  // console.log(incremetSpeed);

  useEffect(() => {
    setColor("red");

    setTimeout(() => {
      setColor("yellow");
    }, 2000 + incremetSpeed);

    setTimeout(() => {
      setColor("green");
    }, 4000 + incremetSpeed);

    setTimeout(() => {
      setFlag(!flag);
    }, 6000 + incremetSpeed);
  }, [flag]);

  const handleChange =(e) => {
    setCurrentSpeed(e.target.value)

  }

  return (
    <>
      <section>
        <div className="container_semaforo">
          <h1>Semaforo</h1>
          <select onChange={handleChange} >
            <option value="1000">3s</option>
            <option value="2000">4s</option>
            <option value="3000">5s</option>
            
          </select>

          <div className="semaforo">
            <div className={`item ${color === "red" ? "rojo" : ""}`}></div>
            <div
              className={`item ${color === "yellow" ? "amarillo" : ""}`}
            ></div>
            <div className={`item ${color === "green" ? "verde" : ""}`}></div>
          </div>

          <div className="poste_semaforo"></div>
          <div className="base_semaforo"></div>
        </div>
      </section>
    </>
  );
};

export default App;

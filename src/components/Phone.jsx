import { NavLink } from "react-router-dom";

import "./Phone.css";

function Phone() {
  return (
    <div className="telefono-exterior">
      <div className="telefono-camara"></div>
      <div className="telefono-pantalla">
        <div className="telefono-contenido">
          <img
            src="/src/assets/gif/mano.gif"
            style={{ width: "50%", rotate: "180deg" }}
            alt=""
          />
          <NavLink to={"/Menu"}>INICIAR</NavLink>
          <img src="/src/assets/gif/mano.gif" style={{ width: "50%" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Phone;

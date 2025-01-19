import "./ExitButton.css"
import { NavLink } from "react-router-dom";

function ExitButton({to}) {
  return (
    <div className="exit">
      <NavLink to={to}>
        volver
      </NavLink>
    </div>
  )
}

export default ExitButton

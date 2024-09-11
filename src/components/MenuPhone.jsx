import "./MenuPhone.css";

function MenuPhone({ text, imgMain, imgSrc, color, isActive, onClick }) {
  return (
    <div 
      className={`menu-exterior ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      <div className="menu-camara"></div>
      <div className="menu-pantalla">
        <div className="menu-contenido">
          <img src={imgMain} style={{ width: "30%" }} alt="" />
          <h1 style={{ color: color }}>{text}</h1>
          <img src={imgSrc} style={{ width: "70%" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MenuPhone;

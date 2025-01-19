import { useState } from "react";
import MenuPhone from "../components/MenuPhone";
import ExitButton from "../components/ExitButton";
import "../styles/Menu.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const options = [
    {
      text: "NÚMEROS DE EMERGENCIAS",
      imgMain: "assets/gif/libro.gif",
      imgSrc: "assets/img/iconoemergencia.png",
      color: "red",
      audio: "assets/audio/emergencia.mp3", // Ruta del audio para números de emergencia
    },
    {
      text: "CONCEPTOS DE PREVENCIÓN",
      imgMain: "assets/gif/sos.gif",
      imgSrc: "assets/img/iconosos.png",
      color: "blue",
      audio: "assets/audio/sos.mp3", // Ruta del audio para conceptos de prevención
    },
  ];

  const navigate = useNavigate();
  const audioRef = useRef(null);

  // Reproduce el audio automático al cargar el componente
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1; // Ajusta el volumen (entre 0.0 y 1.0)
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
  }, []);

  const handleNavigation = (audioSrc, route) => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.play().then(() => {
        setTimeout(() => {
          navigate(route);
        }, 2000); // Espera 2 segundos antes de redirigir
      }).catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
  };

  return (
      <div className="menu">
        <audio ref={audioRef} controls style={{ display: "none" }}>
          <source src="assets/audio/opcion.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <section>
          <NavLink 
            to="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(0);
              handleNavigation(options[0].audio, "/Numbers");
            }}
          >
            <MenuPhone
              text={options[0].text}
              imgMain={options[0].imgMain}
              imgSrc={options[0].imgSrc}
              color={options[0].color}
              isActive={activeIndex === 0}
            />
          </NavLink>
        </section>
        <div className="menu-nino">
          <img
            src="assets/img/nino.png"
            alt=""
            style={{
              height: "30%",
              position: "fixed",
              left: "40%",
              bottom: "40%",
            }}
          />
        </div>
        <section>
          <NavLink 
            to="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(1);
              handleNavigation(options[1].audio, "/Concepts");
            }}
          >
            <MenuPhone
              text={options[1].text}
              imgMain={options[1].imgMain}
              imgSrc={options[1].imgSrc}
              color={options[1].color}
              isActive={activeIndex === 1}
            />
          </NavLink>
        </section>
        <ExitButton to="/" />
      </div>
  );
}

export default Menu;

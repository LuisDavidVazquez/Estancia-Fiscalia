import { useState, useEffect, useRef } from "react";
import NumberPhone from "../components/NumberPhone";
import { Fade } from "react-awesome-reveal";
import "../styles/Numbers.css";
import ExitButton from "../components/ExitButton";

function Numbers() {
  // Datos del carrusel
  const phoneNumbers = [
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Emergencias",
      subtitle: "911",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Denuncias anónimas",
      subtitle: "089",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Policia Cibernética",
      subtitle: "800 221 484",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Fiscalía de adolescentes",
      subtitle: "961 639 60 11",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Fiscalía de la mujer",
      subtitle: "961 617 23 00-7427",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Fiscalía de víctimas desaparecidas",
      subtitle: "961 617 23 00-17541",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Fiscalía de la mujer",
      subtitle: "961 617 23 00-7427",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Centro para la prevención de adicciones (CENTRA)",
      subtitle: "961 617 23 00-17496",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Módulo de atención inmediata (MAI)",
      subtitle: "961 612 55 11-3503",
    },
    {
      image: "/src/assets/img/numbers/1.png",
      title: "Centro de integración juvenil (CIJ)",
      subtitle: "961 618 1851",
    },
  ];

  // Estado para el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para manejar la navegación del carrusel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? phoneNumbers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === phoneNumbers.length - 1 ? 0 : prevIndex + 1));
  };

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1; // Ajusta el volumen (entre 0.0 y 1.0)
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
  }, []);

  return (
    <Fade style={{ height: "100%" }}>
      <div className="numbers">
      <audio ref={audioRef} controls style={{ display: "none" }}>
          <source src="/src/assets/audio/tutoriale.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <section className="section-1">
          <div className="libreta">
            {/* Contenido del carrusel */}
            <div className="libreta-slide">
              <img src={phoneNumbers[currentIndex].image} alt={phoneNumbers[currentIndex].title} className="libreta-imagen" />
              <div className="libreta-texto">
                <h3>{phoneNumbers[currentIndex].title}</h3><br />
                <p>{phoneNumbers[currentIndex].subtitle}</p>
              </div>
            </div>

            {/* Botones de navegación */}
            <div>
            <button className="carousel-button prev-button" onClick={handlePrev}>
              {"<<"}
            </button>
            <button className="carousel-button next-button" onClick={handleNext}>
              {">>"}
            </button>
            </div>
          </div>
        </section>
        <section className="section-2">
          <NumberPhone />
        </section>
        <ExitButton to="/Menu" />
      </div>
    </Fade>
  );
}

export default Numbers;

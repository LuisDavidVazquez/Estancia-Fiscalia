import { Fade } from "react-awesome-reveal";
import "../styles/Concepts.css";
import ExitButton from "../components/ExitButton";
import { useState, useEffect, useRef } from "react";

function Conepts() {

    const phoneNumbers = [
        {
          title: "Bullying y acoso escolar",
          subtitle:
            "Sabías que Bullying y acoso escolar es lo mismo?, y se define como la violencia repetida entre pares, compañeros, compañeras, en la que uno o más individuos tienen la intención de intimidar y hostigar a otros. Se caracteriza por el abuso de poder entre niños y jóvenes en edad escolar.",
        },
        {
          title: "Violación",
          subtitle:
            "Sabías que la violación se refiere a las caricias o manoseos sexuales no deseados. Forzar a que la víctima realice actos sexuales como: sexo oral o penetración en el cuerpo de la víctima.",
        },
        {
          title: "Ciberbullying",
          subtitle:
            "Sabías que Ciberbullying es todo acoso realizado entre usuarios de una edad similar y contexto social equivalente, mediante el aprovechamiento de medios digitales, desde un teléfono móvil hasta Internet o a través de videojuegos online.",
        },
        {
          title: "Sexting",
          subtitle:
            "Sabías que el sexting es cuando se envían a través del teléfono móvil u otro dispositivo con cámara, fotografías o vídeos producidos por uno mismo con connotación sexual. El riesgo está en que una vez enviados estos contenidos, pueden ser utilizados o viralizados dañando tu estado emocional y psicológico.",
        },
        {
          title: "Cutting",
          subtitle:
            "Sabías que el cutting son cortes en la piel que algunas personas se realizan de manera intencional sin el propósito inmediato de atentar contra su vida, en muchas ocasiones estos cortes se convierten en una conducta mal adaptativa y repetida.",
        },
        {
          title: "Alcoholismo",
          subtitle:
            "Sabías que el alcoholismo es una enfermedad que se manifiesta en la incapacidad de controlar el consumo de alcohol debido a una dependencia física y emocional.",
        },
        {
          title: "Grooming",
          subtitle:
            "Sabías que el grooming es una práctica en la que un adulto se hace pasar por un menor en Internet o intenta establecer un contacto con niños y adolescentes que dé pie a una relación de confianza, pasando después al control emocional y, finalmente al chantaje con fines sexuales.",
        },
        {
          title: "Acoso",
          subtitle:
            "Sabías que el acoso es un comportamiento agresivo y no deseado entre niños en edad escolar que involucra un desequilibrio de poder real o percibido. El comportamiento se repite o tiende a repetirse con el tiempo. Tanto los niños que son acosados como los que acosan pueden padecer problemas graves y duraderos.",
        },
        {
          title: "Depresores",
          subtitle:
            "Sabías que los depresores son sustancias que suprimen, inhiben o reducen algunos aspectos de la actividad del sistema nervioso central, se manifiesta mediante confusión, habla distorsionada, mareos, resequedad en la boca, problemas motrices y de memoria.",
        },
        {
          title: "Estimulantes",
          subtitle:
            "Sabías que los estimulantes activan o potencian la actividad del sistema nervioso central, se manifiesta mediante: aumento de frecuencia cardiaca, aumento de la temperatura corporal y presión arterial.",
        },
        {
          title: "Alucinógenos",
          subtitle:
            "Sabías que los alucinógenos inducen alteraciones de la percepción visual y del pensamiento, alteración en la memoria, euforia, dilatación de pupilas, presión arterial alta, taquicardia y cuerpo tembloroso.",
        },
        {
          title: "Fármacos",
          subtitle:
            "Sabías que los fármacos son medicamentos para el tratamiento de trastornos mentales.",
        },
      ];

  // Estado para el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para manejar la navegación del carrusel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? phoneNumbers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === phoneNumbers.length - 1 ? 0 : prevIndex + 1
    );
  };

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

  return (
    <Fade style={{height: "100%"}}>
      <div className="concepts">
      <audio ref={audioRef} controls style={{ display: "none" }}>
          <source src="/src/assets/audio/tutorials.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <section className="section-1">
          <div className="libreta">
            {/* Contenido del carrusel */}
            <div className="libreta-slide">
              <div className="libreta-texto">
                <h3>{phoneNumbers[currentIndex].title}</h3><br /><br />
                <p>{phoneNumbers[currentIndex].subtitle}</p><br /><br />
              </div>
            </div>

            {/* Botones de navegación */}
            <div>
              <button
                className="carousel-button prev-button"
                onClick={handlePrev}
              >
                {"<<"}
              </button>
              <button
                className="carousel-button next-button"
                onClick={handleNext}
              >
                {">>"}
              </button>
            </div>
          </div>
        </section>
        <ExitButton to="/Menu" />
      </div>
    </Fade>
  );
}

export default Conepts;

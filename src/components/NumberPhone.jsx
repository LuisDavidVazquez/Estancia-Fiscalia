import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./NumberPhone.css";
import Swal from "sweetalert2"; // Importa SweetAlert2

function NumberPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate(); // Hook de navegación
  const beepRef = useRef(null); // Ref para manejar el audio del beep

  const phoneNumbers = [
    { image: "/src/assets/img/numbers/1.png", title: "Emergencias", subtitle: "911" },
    { image: "/src/assets/img/numbers/1.png", title: "Denuncias anónimas", subtitle: "089" },
    { image: "/src/assets/img/numbers/1.png", title: "Policia Cibernética", subtitle: "800221484" },
    { image: "/src/assets/img/numbers/1.png", title: "Fiscalía de adolescentes", subtitle: "9616396011" },
    { image: "/src/assets/img/numbers/1.png", title: "Fiscalía de la mujer", subtitle: "9616172300-7427" },
    { image: "/src/assets/img/numbers/1.png", title: "Fiscalía de víctimas desaparecidas", subtitle: "9616172300-17541" },
    { image: "/src/assets/img/numbers/1.png", title: "Fiscalía de la mujer", subtitle: "9616172300-7427" },
    { image: "/src/assets/img/numbers/1.png", title: "Centro para la prevención de adicciones (CENTRA)", subtitle: "9616172300-17496" },
    { image: "/src/assets/img/numbers/1.png", title: "Módulo de atención inmediata (MAI)", subtitle: "9616125511-3503" },
    { image: "/src/assets/img/numbers/1.png", title: "Centro de integración juvenil (CIJ)", subtitle: "9616181851" },
  ];

  const handleButtonClick = (value) => {
    // Reproduce el sonido de beep
    if (beepRef.current) {
      beepRef.current.currentTime = 0; // Reinicia el audio
      beepRef.current.play().catch((error) => {
        console.error("Error al reproducir el beep:", error);
      });
    }

    if (value === "borrar") {
      setPhoneNumber(phoneNumber.slice(0, -1)); // Elimina el último dígito
    } else {
      setPhoneNumber(phoneNumber + value); // Agrega el dígito presionado
    }
  };

  const handleCall = () => {
    const foundNumber = phoneNumbers.find((item) => item.subtitle === phoneNumber);
    
    if (foundNumber) {
      const index = phoneNumbers.indexOf(foundNumber);
      navigate(`/Numbers/${index}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "OH NO",
        text: "El número que ingresaste no está registrado.",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="telefono-exterior">
      {/* Control de audio oculto para el sonido de beep */}
      <audio ref={beepRef} src="/src/assets/audio/bib.mp3" style={{ display: "none" }}></audio>
      
      <div className="telefono-camara"></div>
      <div className="telefono-pantalla">
        <div className="telefono-contenido">
          {/* Input de número de teléfono */}
          <input
            type="text"
            className="telefono-input"
            value={phoneNumber}
            readOnly
          />

          {/* Teclado numérico */}
          <div className="telefono-teclado">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "-", 0, "borrar"].map((key) => (
              <button
                key={key}
                onClick={() => handleButtonClick(key)}
                className={key === "borrar" ? "teclado-boton borrar-boton" : "teclado-boton"}
              >
                {key === "borrar" ? (
                  <img src="src/assets/img/borrar.png" alt="Borrar" className="icono-borrar" />
                ) : (
                  key
                )}
              </button>
            ))}
          </div>

          {/* Botón de Llamar */}
          <button className="boton-llamar" onClick={handleCall}>
            <img src="src/assets/img/llamada.png" style={{height: "80%"}} alt="Llamar" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberPhone;

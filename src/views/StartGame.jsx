import Phone from "../components/Phone";
import "../styles/StartGame.css"
import { useEffect, useRef } from "react";


function StartGame() {

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1 ; // Ajusta el volumen (entre 0.0 y 1.0)
      audioRef.current.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  }, []);

  return (
      <div className="startgame">
      <audio ref={audioRef} controls style={{ display: 'none' }}>
        <source src="assets/audio/presentacion.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <section className="section-1">
        <h1>TELÉFONO MÓVIL PREVENTIVO</h1>
        <img src="assets/img/adolecente.png"alt="" />
      </section>
      <section className="section-2">
        <Phone />
      </section>
    </div>
  )
}

export default StartGame

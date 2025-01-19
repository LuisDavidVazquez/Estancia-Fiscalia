import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import StartGame from "./views/StartGame";
import Nube from "./components/Nube";
import Logos from "./components/Logos";
import Menu from "./views/Menu";
import { useEffect, useRef } from "react";
import Numbers from "./views/Numbers";
import Concepts from "./views/Conepts";
import Call from "./views/Call";

// Componente wrapper para manejar el audio
function AudioController({ children }) {
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (audioRef.current) {
      // Detener el audio solo si estamos en una subruta de Numbers (Numbers/:id)
      if (location.pathname.match(/^\/Numbers\/\d+$/)) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.07;
        audioRef.current.loop = true;
        audioRef.current.play().catch(error => {
          console.error('Error al reproducir el audio:', error);
        });
      }
    }
  }, [location]);

  return (
    <>
      <audio ref={audioRef} controls style={{ display: 'none' }}>
        <source src="assets/audio/fondo.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      {children}
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AudioController>
        <Logos />
        <Nube />
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Numbers" element={<Numbers />} />
          <Route path="/Concepts" element={<Concepts />} />
          <Route path="/Numbers/:id" element={<Call />} />
        </Routes>
      </AudioController>
    </HashRouter>
  );
}

export default App;

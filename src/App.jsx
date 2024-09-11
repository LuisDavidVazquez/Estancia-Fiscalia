import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartGame from "./views/StartGame";
import Nube from "./components/Nube";
import Logos from "./components/Logos";
import Menu from "./views/Menu";
import { useEffect, useRef } from "react";
import Numbers from "./views/Numbers";
import Concepts from "./views/Conepts";
import Call from "./views/Call";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Ajusta el volumen (entre 0.0 y 1.0)
      audioRef.current.loop = true; // Reproduce en bucle
      audioRef.current.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  }, []);

  return (
    <BrowserRouter>
      {/* <audio ref={audioRef} controls style={{ display: 'none' }}>
        <source src="/src/assets/audio/fondo.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio> */}
      <Logos />
      <Nube />
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Numbers" element={<Numbers />} />
        <Route path="/Concepts" element={<Concepts />} />
        <Route path="/Numbers/:id" element={<Call />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

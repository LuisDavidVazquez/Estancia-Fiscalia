import { motion } from "framer-motion";
import "./Nube.css";

function Nube() {
  return (
    <div className="nube-container">
      <motion.img
        src="/src/assets/img/nube.png"
        alt="Nube"
        className="nube1"
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <motion.img
        src="/src/assets/img/nube.png"
        alt="Nube"
        className="nube2"
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.img
        src="/src/assets/img/nube.png"
        alt="Nube"
        className="nube3"
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />
      <motion.img
        src="/src/assets/img/nube.png"
        alt="Nube"
        className="nube4"
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      />
    </div>
  );
}

export default Nube;

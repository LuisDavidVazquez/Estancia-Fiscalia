import "../styles/Call.css"
import ExitButton from "../components/ExitButton"
import { useParams } from "react-router-dom";

function Call() {

  const { id } = useParams();
  const videoSrc = `assets/videos/video${id}.mp4`;

  return (
      <div>
        <div className="call-video">
        <video controls autoPlay style={{}}>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <ExitButton to="/Numbers" />
      </div>
  )
}

export default Call

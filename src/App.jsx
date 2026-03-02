import preguntas from "./data/preguntas";
import "./App.css";

import { Page, Row, TextQuestion } from "./styled/index.js";
import Confetti from "react-confetti";

import useWindowSize from "./hooks/useWindowSize.js";
import useTrivialGame from "./hooks/useTrivialGame.js";

import Media from "./components/Media.jsx";
import AnswersList from "./components/AnswerList.jsx";
import QuestionHeader from "./components/QuestionHeader.jsx";


function App() {

  const windowSize = useWindowSize();

  const {
    loading,
    pregunta,
    mensaje,
    respuestaSeleccionada,
    esCorrecta,
    mostrarConfeti,
    bloqueado,
    manejarRespuesta,
  } = useTrivialGame(preguntas, 5000);

  if (loading) return <div>Cargando...</div>;

  return (
    <Page>
       {mostrarConfeti && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200}/>
      )}

      <QuestionHeader categoria={pregunta.categoria} />

      <Row>
        <TextQuestion>{pregunta.pregunta}</TextQuestion>
      
          <Media src={pregunta.img} />

          <AnswersList  
            preguntaId={pregunta.id}
            opciones={pregunta.opciones}
            onAnswer={manejarRespuesta}
            bloqueado={bloqueado}
            respuestaSeleccionada={respuestaSeleccionada}
            esCorrecta={esCorrecta}
            />

            {mensaje && (
              <p aria-live="polite" style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center" }}>
                {mensaje}
              </p>
            )}
        
      </Row>
    </Page>
  );
}

export default App;

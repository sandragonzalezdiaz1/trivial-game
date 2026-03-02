
import { AnswerButton, Box } from "../styled/index.js";
// Constantes
const letrasOpciones = ["A", "B", "C", "D"];
const coloresOpciones = ["#a2d2ff", "#ffd6a5", "#caffbf", "#ffc6ff"];

export default function AnswersList( {preguntaId, opciones, onAnswer, bloqueado, respuestaSeleccionada, esCorrecta }) {

    return (
        <Box as="ul">
          {opciones.map((opcion, indice) => {
            return (
              <li key={`${preguntaId}-${indice}`}>
                <AnswerButton
                  onClick={() => onAnswer(opcion)}
                  disabled={bloqueado}
                  $bgColor={coloresOpciones[indice]}
                  $correct={respuestaSeleccionada === opcion ? esCorrecta : null}
                  aria-label={`Responder ${letrasOpciones[indice]} : ${opcion}`}
                >
                  {letrasOpciones[indice]}
                </AnswerButton>
                {opcion}
              </li>
            );
          })}
        </Box>
    );
}

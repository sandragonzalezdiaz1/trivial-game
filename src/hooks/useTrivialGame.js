import { useEffect, useRef, useState } from "react";

// Función para desordenar las preguntas
const mezclarPreguntas = (array) => {
    const copia = [...array]; // Hace una copia superficial del array, sin crear referencias al array original
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Suma 1 para que incluya el maximo
        [copia[i], copia[j]] = [copia[j], copia[i]]; // Algoritmo Fisher Yates: para desordenar/barajear elementos del array
    }

    return copia;
};

export default function useTrivialGame(preguntas, delaysMs = 5000){
    // Variables de estado
    const [preguntasBarajadas, setPreguntas] = useState([]);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null); //Opción seleccionada (texto)
    const [esCorrecta, setEsCorrecta] = useState(null); // true / false / null
    const [mostrarConfeti, setMostrarConfeti] = useState(false);

    const [bloqueado, setBloqueado] = useState(false);
    const timeoutRef = useRef(null);


      useEffect(() => {
        setPreguntas(mezclarPreguntas(preguntas));
      }, [preguntas]);
    
    
      useEffect(() => {
      // Limpieza del timeout al desmontar
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);


  const pregunta = preguntasBarajadas[preguntaActual];

  const limpiarFeedback = () => {

     setMensaje(""); // Limpiar mensaje
      setRespuestaSeleccionada(null);
      setEsCorrecta(null);
      setMostrarConfeti(false); // Desactivamos confeti

  }

  const irSiguientePregunta = () => {
    setPreguntaActual((prev) => prev < preguntasBarajadas.length - 1 ? prev + 1 : 0)
    // Si nos encontramos en la ultima pregunta, vuelve a la primera (indice 0)
  }


  const manejarRespuesta = (opcion) => {
    // Evita click repetidos mientras esta bloqueado
    if(bloqueado || !pregunta) return;

    setEsCorrecta(null);
    setRespuestaSeleccionada(opcion);
    
    const correcta = opcion === pregunta.respuesta;

     if(!correcta){
      setEsCorrecta(false);
      setMensaje("❌ La respuesta no es correcta, inténtalo de nuevo.");
      return;
    }

      // Si la respuesta es correcta
      setEsCorrecta(true);
      setMensaje("Respuesta correcta!!!🎉");
      setMostrarConfeti(true); // Activamos confeti
      setBloqueado(true);

      // Si hubiese un timeout previo, lo cancelamos
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
      }

      // Cambia de pregunta después de un pequeño delay
      timeoutRef.current = setTimeout(() => {
        irSiguientePregunta();
        limpiarFeedback();
        setBloqueado(false)
        timeoutRef.current = null
      }, delaysMs);
  };

  return {
    loading: preguntasBarajadas.length === 0,
    pregunta,
    mensaje,
    respuestaSeleccionada,
    esCorrecta,
    mostrarConfeti,
    bloqueado,
    manejarRespuesta
  };

}
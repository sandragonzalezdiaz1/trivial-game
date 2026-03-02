import styled, { keyframes, css } from "styled-components";

// Animación de shake para errores
const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(90deg, #1d7ae4, #4bb0ff);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    margin: 20px auto;
    max-width: 800px;
    letter-spacing: 2px;
`;

export const Category = styled.p`
     text-align: center;
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 25px;
    font-style: italic;
   
`;

export const Row = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 18px;
    max-width: 900px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 768px){
      grid-template-columns: 1fr;
    }
`;

export const TextQuestion = styled.p`
    font-size: 2rem; /*Duplica el tamaño de la fuente respecto al tamaño original */
    font-weight: bold;
    text-shadow: 1px 1px 1px gray; 
    text-align: center;
    
    @media (max-width: 768px){
      font-size: 1.6rem;
    }

`;


export const Box = styled.ul`
  font-size: 1.5rem;
  padding-left: 0;     
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    li {
      justify-content: flex-start;
    }
  }
`;


export const AnswerButton = styled.button`
   background: ${(props) =>
    props.$correct === true
      ? "#28a745"
      : props.$correct === false
      ? "#dc3545"
      : props.$bgColor || "#a2d2ff"};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;

  color: ${(props) =>
    props.$correct === true || props.$correct === false ? "#fff" : "#111"};

    
  font-weight: bold;
  font-size: 1.4rem;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;

  &:not(:disabled):hover {
    transform: scale(1.15);
  }

  &:not(:disabled):active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  ${(props) =>
    props.$correct === false &&
    css`
      animation: ${shake} 0.5s;
    `}
`;


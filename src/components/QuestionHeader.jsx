import { Title, Category } from "../styled/index.js";

export default function QuestionHeader({ categoria }){

    return (
        <>
            <Title>TRIVIAL</Title>
            <Category>Categoría: {categoria}</Category>
        </>
    )
}
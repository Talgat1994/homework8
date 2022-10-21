import { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";

const StyleForm = styled("form")`
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
padding-top: 50px;
padding-left: 50px
background-color: aliceblue;
`;

const StyleInput = styled("input")`
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border-color: grey;
  background-color: aliceblue;
`;
const StyleBtn = styled("button")`
  height: 55px;
  width: 100px;
  border-radius: 10px;
  border-color: grey;
  margin-left: 20px;
`;

const StyleLi = styled("li")`
  font-size: 25px;
  color: blue;
  font-family: "Times New Roman", Times, serif;
  list-style: none;
`;

function App() {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState([]);

  const inputHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAdd((data) => {
      return [...data, input];
    });

    setInput("");
  };

  return (
    <StyleForm onSubmit={submitHandler}>
      <StyleInput value={input} type="text" onChange={inputHandler} />
      <StyleBtn type="submit">GO</StyleBtn>
      <ul>
        {add.map((el, index) => {
          return <StyleLi key={Math.random}>{el}</StyleLi>;
        })}
      </ul>
    </StyleForm>
  );
}

export default App;

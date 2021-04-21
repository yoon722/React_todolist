import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from './components/TodoTemplate';
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from './TodoContext';
// import InputSample from "./components/test/InputSample";


const GlobalStyle = createGlobalStyle`
	body {
		background: #e9ecef;
	}
`
// 템플릿 리터럴

function App() {
  return (
		<TodoProvider>
			<GlobalStyle />
			<TodoTemplate>
				<TodoHead />
				<TodoList />
				<TodoCreate />
			</TodoTemplate>
		</TodoProvider>
		// <InputSample></InputSample>
  );
}


export default App;

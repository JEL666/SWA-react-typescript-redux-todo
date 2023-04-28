import styled from "@emotion/styled";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;  
`;

function App() {
  return (
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
  );
}

export default App;


// 
// craco
// yarn add @craco/craco

// emotion
// yarn add @emotion/react
// yarn add @emotion/styled
// yarn add -D @emotion/babel-preset-css-prop
//
// craco.config.js에 다음 내용을 기입
// module.exports = {
//   babel: {
//     presets: ['@emotion/babel-preset-css-prop']
//   }
// }

// storybook
// npx -p @storybook/cli sb init
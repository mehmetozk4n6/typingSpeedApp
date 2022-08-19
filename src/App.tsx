import React from 'react';
import './App.css';
import { ControlPanel } from './components/styled/ControlPanel.styled';
import NewText from './components/newText';
import { Container } from './components/styled/Container.styled';
import TextGenerator from './components/textGenerator';
import Timer from './components/timer';
import TypingArea from './components/typingArea';

function App() {

  return (
    <div className="App">
      <Container>
        <TextGenerator/>
        <ControlPanel>
          <TypingArea/>
          <Timer/>
          <NewText/>
        </ControlPanel>
      </Container>
    </div>
  );
}

export default App;

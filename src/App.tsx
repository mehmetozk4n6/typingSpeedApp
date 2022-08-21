import './App.css';
import { ControlPanel } from './components/styled/ControlPanel.styled';
import NewText from './components/newText';
import { Container } from './components/styled/Container.styled';
import TextGenerator from './components/textGenerator';
import TypingArea from './components/typingArea';
import ResultTyping from './components/result';
import Time from './components/time';
import { useAppSelector } from './redux/hooks';
import { selectSituation } from './redux/typingSlice';

function App() {

  const situation = useAppSelector(selectSituation);
  return (
    <div className="App">
      <Container>
        <TextGenerator/>
        <ControlPanel>
          <Time/>
          <TypingArea/>
          <NewText/>
        </ControlPanel>
        {situation==='finished' && <ResultTyping/>}
      </Container>
    </div>
  );
}

export default App;

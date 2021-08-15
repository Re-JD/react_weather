import './App.css';
import Header from './components/header';
import LocalBox from './components/localbox';
import WeatherBox from './components/weatherbox';
import WeatherContainer from './container/WeatherContainer';

function App() {
  return (
    <>
      <Header/>
      <LocalBox/>
      <WeatherContainer>

      </WeatherContainer>
    </>
  );
}

export default App;

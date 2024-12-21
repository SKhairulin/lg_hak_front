import './style/App.css';
import { Footer } from './components/footer';
import { Header } from './components/header'
import { MainPage } from './components/mainPage';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './config/AppRouter';

const App = observer(() => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
})
export default App;

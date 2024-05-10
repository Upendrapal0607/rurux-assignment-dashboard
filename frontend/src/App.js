import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Fotter';
import { AllRoute } from './Routes/AllRoute';
import { StudentSignUp } from './Pages/StudentSignUp';
// import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoute/>
      {/* <StudentSignUp/> */}
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import {
  BrowserRouter
} from "react-router-dom";

// if you use some tabs and you dont want to showing spinner when you change the tab you can use startTransition func search about it
// about this project bundle size just change about 1 KB  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

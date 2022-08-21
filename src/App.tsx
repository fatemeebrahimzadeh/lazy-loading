import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './AppRouter';
import CustomNavbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";

// if you use some tabs and you dont want to showing spinner when you change the tab you can use startTransition func search about it
// about this project bundle size just change about 1 KB  

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

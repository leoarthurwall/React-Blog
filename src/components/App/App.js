import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

function App() {

  return (
    <div className="App">
      <Navbar/>
    <div className='content' >
      <Home/>
    </div>
    
    </div>
  );
}

export default App;

// use curly braces in the JSX for dynamic values
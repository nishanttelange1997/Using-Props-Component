import './design.css';
import Component from './components/Compo.js';
function App() {
  return (
    <center>
    <div className="decore">
      <h1 style={{backgroundColor:"lightblue"}}>Students Introduction</h1> 
  
      <Component name="Nishant" age="23" mobno="9172432493"><h1 style={{color:"black"}}>This is My Introduction</h1></Component>
    
      <Component name="Chetan" age="23" mobno="9654123625"><h1 style={{color:"black"}}>This is My Introduction</h1></Component>
      
      <Component name="Prashant" age="22" mobno="7852634132"><h1 style={{color:"black"}}>This is My Introduction</h1></Component>
      
    </div>
    </center>
  );
}

export default App;


import './create.css';
function Compo(props) {
    return (
      <div id="about">
        <p>
          {props.children}
          </p>

          <ul>
          
            <li>My Name is :     {props.name}</li>
            <li>My Age is:     {props.age}</li>
            <li>My Mob Number is:    {props.mobno}</li>
            
            </ul>
        
      </div>
    );
  }
  
  export default Compo;
  

import './App.css';
import ChildA from './Components/ChildA';
let Properties={
  height : 6,
  color : "fair",
  surname : "Dighe",
  haircolor: "black"
}

function App()
 {
  return (
   <div>
             <ChildA k={Properties}></ChildA> 
    </div>
  );
}

export default App;

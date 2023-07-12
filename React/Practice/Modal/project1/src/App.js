import { useState } from "react";
import Modal0 from "./components/Modal0";

function App() {
  // modal
  const [modalState, setModal0] = useState(false);

  return (
    <div>
      <div state={modalState}>
        <ul>
          <li>
            <h1>Modal</h1>
            <button onClick={() => setModal0(true)}>opne modal</button>
          </li>
        </ul>
      </div>
      <Modal0 state={modalState} setModal0={setModal0}/>
    </div>
  )
}

export default App;
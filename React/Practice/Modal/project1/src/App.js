import { useState } from "react";
import { Modal0 } from "./components/Modal0";
import { Modal1 } from "./components/Modal1";

function App() {
  // modal
  const [modalState, setModalState] = useState(false);
  const [modalState1, setModalState1] = useState(false);

  return (
    <div>
      <div state={modalState}>
        <ul>
          <li>
            <h1>Modal</h1>
            <button onClick={() => setModalState(true)}>opne modal</button>
            <button onClick={() => setModalState1(true)}>opne modal</button>
          </li>
        </ul>
      </div>
      <Modal0 modalState={modalState} setModalState={setModalState}/>
      <Modal1 modalState={modalState1} setModalState={setModalState1}/>
    </div>
  )
}

export default App;
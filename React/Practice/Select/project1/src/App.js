import { useState } from "react";
import { Select } from "./compontens/Select";

function App() {
  const [selectItems1, setSelectItems1] = useState(['리액트','자바','스프링','리액트네이티브']);
  const [selectItems2, setSelectItems2] = useState(['리액트','자바']);

  return (
    <div>
      <h1>Select</h1>
      <Select items={selectItems1}/>
      <Select items={selectItems2}/>
    </div>
  )
}

export default App;
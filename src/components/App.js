import React, { useState, useMemo } from "react";

function expensiveCalculation(n) {
  for (let i = 0; i < 1000000000; i++) {
    n += 1;
  }
  return n;
}

const App = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(count + 1);
  }

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleAddBtn = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  }

  return (
    <div>
      <h2>My todos</h2>
      <p>{todos}</p>
      <button onClick={addTodo}>Add Todo</button>
      
      <p>Count: {count} <button onClick={increment}>+</button></p>
      <h1>Expensive Calculation</h1>
      <p>{calculation}</p>

      <h1>React.memo</h1>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleAddBtn}>Add Skill</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;

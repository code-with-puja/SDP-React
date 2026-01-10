import { useState, useEffect } from "react";

function App() {
  // Step 1: Create state
  const [count, setCount] = useState(0);

  // Step 2: useEffect runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Count updated:", count);
  }, [count]);   // Dependency array

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>useState & useEffect Example</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;
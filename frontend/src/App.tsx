import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      Note Application ( MERN ) -- {count} --
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Update</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Clear</button>
      </div>
    </div>
  );
};

export default App;

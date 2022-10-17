import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {/* Short Circuit */}
      {show && <LifeCycleMethods />}
    </div>
  );
}

export default App;

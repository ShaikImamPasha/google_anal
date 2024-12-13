// src/components/PreviewButton.js
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/countSlice.js";
import Link from "next/link";


const PreviewButton = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonContainer">
          <button onClick={() => dispatch(decrement())}>-</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <Link href="/previewView">
        clk prv
        </Link>
      </header>
    </div>
  );
};

export default PreviewButton;

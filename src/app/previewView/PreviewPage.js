// src/pages/preview.js
import { useSelector } from "react-redux";

const PreviewPage = () => {
  const count = useSelector((state) => state.count.value);


  if (!count) {
    return <div>No preview data available.</div>;
  }

  return (
    <div>
    {count}
    </div>
  );
};

export default PreviewPage;

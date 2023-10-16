import React, { useEffect } from "react";
import usePopup from "../hooks/usePopup";

const Home = () => {
  const popup = usePopup();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    popup.show("Test popup");
  };

  return (
    <div className="center" style={{ height: "70vh" }}>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;

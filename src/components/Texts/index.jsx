import { useEffect, useState } from "react";

const Texts = (text) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 50);

    return () => clearInterval(intervalId);
  });

  return text.slice(0, count);
};

export default Texts;

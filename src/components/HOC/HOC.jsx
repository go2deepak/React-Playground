import { useState } from "react";
const HOC = (Counter) => {

  const Inner = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <Counter count={count} value={increment} />;
  };
  return Inner;
};
export default HOC;
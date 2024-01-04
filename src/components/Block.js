import { useState, useEffect } from "react";

const Block = ({ mark, changeMark, position }) => {
  const [sign, setSign] = useState("");

  useEffect(() => {
    if (mark === 1) setSign("X");
    if (mark === 2) setSign("O");
  }, [mark]);

  return (
    <div
      className="w-20 h-20 border-2 border-black mb-1 flex justify-center items-center text-4xl"
      onClick={() => changeMark(position)}
    >
      {sign}
    </div>
  );
};

export default Block;

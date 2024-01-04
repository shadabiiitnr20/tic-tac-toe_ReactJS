import React, { useEffect, useState } from "react";
import Block from "./Block";

const Board = () => {
  const [marks, setMarks] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const changeMark = (i) => {
    let m = [...marks];
    if (m[i] === 0 && !gameOver) {
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    } else {
      if (gameOver) {
        alert("Game Over");
      } else {
        alert("Click On empty Box");
      }
    }
  };

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let c of combinations) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        setTimeout(() => {
          alert("Player 1 wins");
        }, 50);
        setGameOver(true);
      } else if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        setTimeout(() => {
          alert("Player 2 wins");
        }, 50);
        setGameOver(true);
      }
    }
  }, [marks]);

  return (
    <div className="m-10 flex gap-1">
      <div>
        <Block mark={marks[0]} changeMark={changeMark} position={0} />
        <Block mark={marks[1]} changeMark={changeMark} position={1} />
        <Block mark={marks[2]} changeMark={changeMark} position={2} />
      </div>
      <div>
        <Block mark={marks[3]} changeMark={changeMark} position={3} />
        <Block mark={marks[4]} changeMark={changeMark} position={4} />
        <Block mark={marks[5]} changeMark={changeMark} position={5} />
      </div>
      <div>
        <Block mark={marks[6]} changeMark={changeMark} position={6} />
        <Block mark={marks[7]} changeMark={changeMark} position={7} />
        <Block mark={marks[8]} changeMark={changeMark} position={8} />
      </div>
      <div>
        {gameOver ? (
          <button
            className="m-2 p-2 bg-slate-400 font-semibold rounded-lg"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Board;

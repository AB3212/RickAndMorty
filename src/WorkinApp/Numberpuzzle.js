import React, { useState, useEffect } from "react";
import "../css/Game.css";

const Numberpuzzle = () => {
    const winningState = ['1', '2', '3', '4', '5', '6', '7', '8', ''];

    // Shuffle the array
    const shuffleArray = (array) => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const [data, setData] = useState(shuffleArray(winningState));
    const [isWin, setIsWin] = useState(false);

    const checkWinCondition = (data) => {
        return data.every((val, index) => val === winningState[index]);
    };

    const dataToswipe = (pos) => {
        let temp = [...data];
        const swap = (i, j) => {
            [temp[i], temp[j]] = [temp[j], temp[i]];
            setData(temp);
            if (checkWinCondition(temp)) {
                setIsWin(true);
            } else {
                setIsWin(false);
            }
        };

        switch (pos) {
            case 0:
                if (data[1] === '') swap(0, 1);
                else if (data[3] === '') swap(0, 3);
                break;
            case 1:
                if (data[0] === '') swap(1, 0);
                else if (data[2] === '') swap(1, 2);
                else if (data[4] === '') swap(1, 4);
                break;
            case 2:
                if (data[1] === '') swap(2, 1);
                else if (data[5] === '') swap(2, 5);
                break;
            case 3:
                if (data[0] === '') swap(3, 0);
                else if (data[4] === '') swap(3, 4);
                else if (data[6] === '') swap(3, 6);
                break;
            case 4:
                if (data[1] === '') swap(4, 1);
                else if (data[3] === '') swap(4, 3);
                else if (data[5] === '') swap(4, 5);
                else if (data[7] === '') swap(4, 7);
                break;
            case 5:
                if (data[2] === '') swap(5, 2);
                else if (data[4] === '') swap(5, 4);
                else if (data[8] === '') swap(5, 8);
                break;
            case 6:
                if (data[3] === '') swap(6, 3);
                else if (data[7] === '') swap(6, 7);
                break;
            case 7:
                if (data[4] === '') swap(7, 4);
                else if (data[6] === '') swap(7, 6);
                else if (data[8] === '') swap(7, 8);
                break;
            case 8:
                if (data[5] === '') swap(8, 5);
                else if (data[7] === '') swap(8, 7);
                break;
            default:
                break;
        }
    };

    const restartGame = () => {
        setData(shuffleArray(winningState));
        setIsWin(false);
    };

    useEffect(() => {
        if (checkWinCondition(data)) {
            setIsWin(true);
        }
    }, [data]);

    return (
        <div className="container ">
            <h3 className="text-center me-5">Number puzzle</h3>
          
            <div className="main-box ms-auto ">
                {data.map((item, index) => (
                    <div key={index} className="item-number" onClick={() => dataToswipe(index)}>
                        <div className="item-box">{item}</div>
                    </div>
                ))}
            </div>
            {isWin && <div className="text-center text-success fs-2 mt-3 me-5 ">You win!</div>}
            <div className="text-center mt-3 ms-auto me-5">
                <button className="btn btn-secondary " onClick={restartGame}>Restart</button>
            </div>
        </div>
    );
};

export default Numberpuzzle;

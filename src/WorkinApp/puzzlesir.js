import React, { useState } from "react";
import "../css/Game.css";

const Numberpuzzle = () => {

    const [data,setData] = useState(['2','3','1','','5','4','6','8','7'])
   
   const dataToswipe = (pos)=>{

       if(pos === 0){
         console.log('hi')
           if(data[1] === ''){
              let temp = [...data]
              temp[1] = temp[0]
              temp[0] = ''
              setData(temp)
              
           }else if(data[3] === ''){
            let temp = [...data]
            temp[3] = temp[0]
            temp[0] = ''
            setData(temp)
            console.log('1')
           }
       }
   }



  return (
    <div>
      <h3 className="title my-3">Number puzzle</h3>
      <div className="main-box">
        <div className="item-number"  onClick={()=>dataToswipe(0)}>
          <div className="item-box">{data[0]}</div>
        </div>
        <div className="item-number">
          <div className="item-box">{data[1]}</div>
        </div>
        <div className="item-number">
          <div className="item-box">{data[2]}</div>
        </div>

        <div className="item-number">
          <div className="item-box">{data[3]}</div>
        </div>
        <div className="item-number">
          <div className="item-box">{data[4]}</div>
        </div>
        <div className="item-number">
          <div className="item-box">{data[5]}</div>
        </div>

        <div className="item-number">
          <div className="item-box">{data[6]}</div>
        </div>
        <div className="item-number">
          <div className="item-box">{data[7]}</div>
        </div>
        <div className="item-number">
          <div className="item-box">{data[8]}</div>
        </div>
      </div>
    </div>
  );
};

export default Numberpuzzle;


// import React, { useState, useEffect } from "react";
// import "../css/Game.css";

// const Numberpuzzle = () => {
//     const [data, setData] = useState(['2', '3', '1', '', '5', '4', '6', '8', '7']);
//     const [isWin, setIsWin] = useState(false);

//     const winningState = ['1', '2', '3', '4', '5', '6', '7', '8', ''];

//     const checkWinCondition = () => {
//         if (data.every((val, index) => val === winningState[index])) {
//             setIsWin(true);
//         } else {
//             setIsWin(false);
//         }
//     };

//     useEffect(() => {
//         checkWinCondition();
//     }, [data]);

//     const dataToswipe = (pos) => {
//         let temp = [...data];
//         const swap = (i, j) => {
//             [temp[i], temp[j]] = [temp[j], temp[i]];
//             setData(temp);
//         };

//         switch (pos) {
//             case 0:
//                 if (data[1] === '') swap(0, 1);
//                 else if (data[3] === '') swap(0, 3);
//                 break;
//             case 1:
//                 if (data[0] === '') swap(1, 0);
//                 else if (data[2] === '') swap(1, 2);
//                 else if (data[4] === '') swap(1, 4);
//                 break;
//             case 2:
//                 if (data[1] === '') swap(2, 1);
//                 else if (data[5] === '') swap(2, 5);
//                 break;
//             case 3:
//                 if (data[0] === '') swap(3, 0);
//                 else if (data[4] === '') swap(3, 4);
//                 else if (data[6] === '') swap(3, 6);
//                 break;
//             case 4:
//                 if (data[1] === '') swap(4, 1);
//                 else if (data[3] === '') swap(4, 3);
//                 else if (data[5] === '') swap(4, 5);
//                 else if (data[7] === '') swap(4, 7);
//                 break;
//             case 5:
//                 if (data[2] === '') swap(5, 2);
//                 else if (data[4] === '') swap(5, 4);
//                 else if (data[8] === '') swap(5, 8);
//                 break;
//             case 6:
//                 if (data[3] === '') swap(6, 3);
//                 else if (data[7] === '') swap(6, 7);
//                 break;
//             case 7:
//                 if (data[4] === '') swap(7, 4);
//                 else if (data[6] === '') swap(7, 6);
//                 else if (data[8] === '') swap(7, 8);
//                 break;
//             case 8:
//                 if (data[5] === '') swap(8, 5);
//                 else if (data[7] === '') swap(8, 7);
//                 break;
//             default:
//                 break;
//         }
//     };

//     return (
//         <div>
//             <h3 className="title my-3">Number puzzle</h3>
//             {isWin && <div className="win-message">Congratulations, you win!</div>}
//             <div className="main-box">
//                 {data.map((item, index) => (
//                     <div key={index} className="item-number" onClick={() => dataToswipe(index)}>
//                         <div className="item-box">{item}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Numberpuzzle;

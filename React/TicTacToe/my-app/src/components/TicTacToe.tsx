import React, { useState } from "react";
import "./TicTacToe.css"
 function TicTacToe(){
    const [turn,setTurn]=useState("X")
    const [cells,setCells]=useState(Array(9).fill(null))
    const [winner,setWinner]=useState(null)
    const [playerScores, setPlayerScores] = useState({ X: 0, O: 0 });


    const handleWin = (square: any[]) => {
        console.log(square);
      
        if (square[0] === square[1] && square[1] === square[2]) {
          setWinner(square[0]);
        } else if (square[3] === square[4] && square[4] === square[5]) {
          setWinner(square[3]);
        } else if (square[6] === square[7] && square[7] === square[8]) {
          setWinner(square[6]);
        } else if (square[0] === square[3] && square[3] === square[6]) {
          setWinner(square[0]);
        } else if (square[1] === square[4] && square[4] === square[7]) {
          setWinner(square[1]);
        } else if (square[2] === square[5] && square[5] === square[8]) {
          setWinner(square[2]);
        } else if (square[0] === square[4] && square[4] === square[8]) {
          setWinner(square[0]);
        } else if (square[2] === square[4] && square[4] === square[6]) {
          setWinner(square[2]);
        }
      
        console.log(square);
      };
         
    const handlePlayAgain=()=>{
       setWinner(null)
       setCells(Array(9).fill(null))
    }
     const handleclick=(num:number)=>{

       const square=[...cells]
       if(cells[num]===null)
       { if(turn==="X")
      {  square[num]="X"
      
       setTurn("O")}
    else
   { square[num]="O"
  
    setTurn("X")}}
    setCells(square)
    handleWin(square)
     }
    
       const Cell= (props:{num:number})=>{
            return <td onClick={()=>{handleclick(props.num)}}>{cells[props.num]}</td>
       }
      const ticTacMatrix=[
        0,0,0,0,0,0,0,0,0
       ]
        return (
            <div className="Container">
                <h1>Tic Tac Toe</h1>
                <table>
                    Turn: {turn}
                    <body className="body">
                     {ticTacMatrix.map((_,index)=>{return <Cell num={index}/>})}
                    </body>
                </table>
                    {winner && <><h1 className="Winner">Winner is {winner}</h1> 
                    <button className="Button" onClick={handlePlayAgain}>Play Again</button>
                    </> }
            </div>
        )
 }

 export default TicTacToe
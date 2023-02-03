import { useState } from "react"
import Square from "./Square"

export default function Board(){
    // val contains arr of size 9 initialize with null
    const [val,setVal] = useState(Array(9).fill(null));

    // boolean var contains which players Turns
    const [isXTurn,setIsXTurn] = useState(true);

    // winner is (gets executed every time component change its state)
    let winner = checkForWinner()

    function handleAction(i){
        // if Square already filled or winner is declared
        if(val[i] || winner){
            return;
        }

        // copying val arr into new arr
        let newArr = val.slice();

        // changing new arr
        if(isXTurn){
            newArr[i] = "X";
        }
        else{
            newArr[i] = "O"
        }

        // setting val to new arr and changing turn
        setVal(newArr);
        setIsXTurn(!isXTurn);
    }

    // logic for checking winner
    function checkForWinner() {
        // Check for rows
        for (let i = 0; i < 9; i += 3) {
          if (val[i] && val[i] === val[i + 1] && val[i + 1] === val[i + 2]) {
            return val[i];
          }
        }
      
        // Check for columns
        for (let i = 0; i < 3; i++) {
          if (val[i] && val[i] === val[i + 3] && val[i + 3] === val[i + 6]) {
            return val[i];
          }
        }
      
        // Check for diagonals
        if (val[0] && val[0] === val[4] && val[4] === val[8]) {
          return val[0];
        }
        if (val[2] && val[2] === val[4] && val[4] === val[6]) {
          return val[2];
        }
      
        // checking for draw
        const draw = !val.includes(null);
        if(draw){
            return -1;
        }
                // Return null if there is no winner
        return null;
      }
      
    let status = null;
    if(winner===-1){
        status = "Draw"
    }
    else if(winner){
        status = "Winner " + winner
    }
    else{
        status = "Next Turn " + (isXTurn ? "X" : "O")
    }
    return(
    <div className="main">
        <h2>{status}</h2>
        <div className="board-row">
            <Square val={val[0]} action={()=> handleAction(0)}/>
            <Square val={val[1]} action={()=> handleAction(1)}/>
            <Square val={val[2]} action={()=> handleAction(2)}/>
        </div>
        <div className="board-row">
            <Square val={val[3]} action={()=> handleAction(3)}/>
            <Square val={val[4]} action={()=> handleAction(4)}/>
            <Square val={val[5]} action={()=> handleAction(5)}/>
        </div>
        <div className="board-row">
            <Square val={val[6]} action={()=> handleAction(6)}/>
            <Square val={val[7]} action={()=> handleAction(7)}/>
            <Square val={val[8]} action={()=> handleAction(8)}/>
        </div>
    </div>
    )
}
import { useState } from "react"
import Board from "./Board"

export default function Game(){

    
    // contains history (array of 9size arr)
    const [history,setHistory] = useState([Array(9).fill(null)]);
    
    // current move
    const [move,setMove] = useState(0)
    
    // shows which turn it is
    let isXTurn = move%2===0

    // currnet val of the board
    const val = history[move];

    function handlePlay(newVal){
        // append new val array to history
        setHistory([...history.slice(0,move+1),newVal])

        setMove(move+1)
        // change turn
    }

    function jumpTo(i){
        setMove(i);
    }
    const move_list = history.map(
        (val,i)=>{
            return(
                <li key={i}>
                    <button onClick={()=>jumpTo(i)}>Go to Move {i}</button>
                </li>
            )
        }
    )
    return(
        <>
        <div className="main">
            <Board isXTurn={isXTurn} val = {val} onPlay={handlePlay} />
        </div>
        <div className="info">
            <ul>
                {move_list}
            </ul>
        </div>
        </>
    )
}
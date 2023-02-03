import { useState } from "react"
import Board from "./Board"

export default function Game(){

    // shows which turn it is
    const [isXTurn,setIsXTurn] = useState(true);

    // contains history (array of 9size arr)
    const [history,setHistory] = useState([Array(9).fill(null)]);

    // currnet val of the board
    const val = history[history.length -1];

    function handlePlay(newVal){
        // append new val array to history
        setHistory([...history,newVal])
        // change turn
        setIsXTurn(!isXTurn)
    }
    return(
        <>
        <div className="main">
            <Board isXTurn={isXTurn} val = {val} onPlay={handlePlay} />
        </div>
        <div className="info">
            <ul type="+">
                <li>move 1</li>
                <li>move 2</li>
                <li>move 3</li>
            </ul>
        </div>
        </>
    )
}
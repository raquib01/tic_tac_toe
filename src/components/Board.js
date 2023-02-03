import Square from "./Square"

export default function Board(props){

    // winner is (gets executed every time component change its state)
    let winner = checkForWinner()

    function handleAction(i){
        // if Square already filled or winner is declared
        if(props.val[i] || winner){
            return;
        }

        // copying val arr into new arr
        let newArr = props.val.slice();

        // changing new arr
        if(props.isXTurn){
            newArr[i] = "X";
        }
        else{
            newArr[i] = "O"
        }

        // giving back to Game for update
        props.onPlay(newArr)
    }

    // logic for checking winner
    function checkForWinner() {
        // Check for rows
        for (let i = 0; i < 9; i += 3) {
          if (props.val[i] && props.val[i] === props.val[i + 1] && props.val[i + 1] === props.val[i + 2]) {
            return props.val[i];
          }
        }
      
        // Check for columns
        for (let i = 0; i < 3; i++) {
          if (props.val[i] && props.val[i] === props.val[i + 3] && props.val[i + 3] === props.val[i + 6]) {
            return props.val[i];
          }
        }
      
        // Check for diagonals
        if (props.val[0] && props.val[0] === props.val[4] && props.val[4] === props.val[8]) {
          return props.val[0];
        }
        if (props.val[2] && props.val[2] === props.val[4] && props.val[4] === props.val[6]) {
          return props.val[2];
        }
      
        // checking for draw
        const draw = !props.val.includes(null);
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
        status = "Next Turn " + (props.isXTurn ? "X" : "O")
    }
    return(
        <>
            <h2>{status}</h2>
            <div className="board-row">
                <Square val={props.val[0]} action={()=> handleAction(0)}/>
                <Square val={props.val[1]} action={()=> handleAction(1)}/>
                <Square val={props.val[2]} action={()=> handleAction(2)}/>
            </div>
            <div className="board-row">
                <Square val={props.val[3]} action={()=> handleAction(3)}/>
                <Square val={props.val[4]} action={()=> handleAction(4)}/>
                <Square val={props.val[5]} action={()=> handleAction(5)}/>
            </div>
            <div className="board-row">
                <Square val={props.val[6]} action={()=> handleAction(6)}/>
                <Square val={props.val[7]} action={()=> handleAction(7)}/>
                <Square val={props.val[8]} action={()=> handleAction(8)}/>
            </div>
        </>
    )
}
export default function Square(props){

    return(
        <button className="square" onClick={props.action}>{props.val}</button>
    );
}

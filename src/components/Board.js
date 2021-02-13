import React from "react";
import Square from "./Square";

function Board(props){
    return(
        <>
        <div className="container">
            <div className="boardback">
                <div className="gridview">
                    <div className="element">
                        <div className="text">
                            <Square value={props.squares[0]} onClick = {() => props.onclick(0)}/>
                        </div>
                    </div>
                    <div className="mx-1 element">
                        <div className="text">
                            <Square value={props.squares[1]} onClick = {() => props.onclick(1)}/>
                        </div>
                    </div>
                    <div className="element">
                        <div className="text">
                            <Square value={props.squares[2]} onClick = {() => props.onclick(2)}/>
                        </div>
                    </div>
                    <div className="my-1 element">
                        <div className="text">
                            <Square value={props.squares[3]} onClick = {() => props.onclick(3)}/>
                        </div>
                    </div>
                    <div className="mx-1 my-1 element">
                        <div className="text">
                            <Square value={props.squares[4]} onClick = {() => props.onclick(4)}/>
                        </div>
                    </div>
                    <div className="my-1 element">
                        <div className="text">
                            <Square value={props.squares[5]} onClick = {() => props.onclick(5)}/>
                        </div>
                    </div>
                    <div className="element">
                        <div className="text">
                            <Square value={props.squares[6]} onClick = {() => props.onclick(6)}/>
                        </div>
                    </div>
                    <div className="mx-1 element">
                        <div className="text">
                            <Square value={props.squares[7]} onClick = {() => props.onclick(7)}/>
                        </div>
                    </div>
                    <div className="element">
                        <div className="text">
                            <Square value={props.squares[8]} onClick = {() => props.onclick(8)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Board;
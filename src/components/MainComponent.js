import React, {Component} from "react";
import Board from './Board';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xisNext: true
        }
    }

    handleClick(i){
        const squares= this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xisNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xisNext: !this.state.xisNext
        })
    }
    render(){        
        if(calculateWinner(this.state.squares)){
            const winner = calculateWinner(this.state.squares) == "X" ? "Player 1" : "Player2";
            console.log(winner);
        }

        return(
            <Board squares={this.state.squares} onclick = {(i) => this.handleClick(i)}/>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Main;
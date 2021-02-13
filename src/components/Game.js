import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "../css/BoardView.css";
import Board from './Board';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xisNext: true,
            isNewGame:true,
            move: 0,
            displayModal: true,
            isDraw: false,
            winner:null,
            result: false
        }
        this.toggleDisplayModal=this.toggleDisplayModal.bind(this);
    }

    toggleDisplayModal(){
        
        this.setState({
            displayModal: !this.state.displayModal,
            result:true
        });
        if(calculateWinner(this.state.squares)){
            console.log("Winner Declared");
            const name = (calculateWinner(this.state.squares) == "X" && this.props.switchPlayer) || (calculateWinner(this.state.squares) == "O" && !this.props.switchPlayer) ? this.props.player1: this.props.player2;
            this.props.manageScore(name);
        }
        else if(this.state.move == 9){
            console.log("Move Count");
            this.props.manageScore(null);
        }
        this.props.manageGames();
    }

    handleClick(i){
        const squares= this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xisNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xisNext: !this.state.xisNext,
            isNewGame: false,
            move: this.state.move + 1
        })
    }
    
    displayWinner(winner){
        if(winner){
            return(
                <Modal isOpen={this.state.displayModal} toggle={this.toggleDisplayModal} centered={true}>
                    <ModalBody>
                        <span>{winner} is winner</span>
                        <div onClick={this.toggleDisplayModal}>Next</div>
                    </ModalBody>
                </Modal>
            );
        }
        else if(this.state.move == 9){
            return(
                <Modal isOpen={this.state.displayModal} toggle={this.toggleDisplayModal} centered={true}>
                    <ModalBody>
                        <span>Game Draw</span>
                        <div onClick={this.toggleDisplayModal}>Next</div>
                    </ModalBody>
                </Modal>
            )
        }
        return(
            <div></div>
        )
        
    }

    render(){

        const next = this.state.xisNext? "X" : "O";
        let message = null;
        if(this.props.player1){
            const firstPlayer = this.props.switchPlayer? this.props.player1: this.props.player2;
            message = this.state.isNewGame?  "Game Started : First Turn: " + firstPlayer : "Next Turn : " + next;
        }

        const figure = calculateWinner(this.state.squares);
        let winner=null;
        if(figure){
            message = "Game Ended";
            winner = (figure == "X" && this.props.switchPlayer) || (figure == "O" && !this.props.switchPlayer) ? this.props.player1:this.props.player2;
        }

        return(
            <>  
                {this.displayWinner(winner)}
                <div className="container">
                    <div className="players">
                        <div className="float-left"><span>{this.props.player1}</span><span>{this.props.scoreX}</span></div>
                        <div className="float-right"><span>{this.props.player2}</span><span>{this.props.scoreO}</span></div>
                    </div>
                </div>
                <Board squares={this.state.squares} onclick = {(i) => this.handleClick(i)}/>
                <div className="message">
                    {message}
                </div>
                
            </>
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

export default Game;
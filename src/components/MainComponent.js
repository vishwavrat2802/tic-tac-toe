import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Game from "./Game";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalGames: 1,
            player1: "",
            player2: "",
            isModalOpen: true,
            test: "",
            scoreX: 0,
            scoreO: 0,
            isWinner:true,
            switchPlayer: 1

        }

        this.baseState = this.state;
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.manageScore = this.manageScore.bind(this);
        this.manageGames=this.manageGames.bind(this);
        this.toggleWinnerModal=this.toggleWinnerModal.bind(this);
    }

    
    restartGame(){
        if(this.state.totalGames == 0){
            {console.log("Restart executed")}
            if(this.state.scoreX == this.state.scoreO){
                return(
                    <Modal isOpen={this.state.isWinner} centered={true}>
                        <ModalBody>Game Overall Draw</ModalBody>
                        <Button outline color="primary" onClick={this.toggleWinnerModal}>Play Again</Button>
                    </Modal>
                )
            }
            else{
                const winner = this.state.scoreX > this.state.scoreO ? this.state.player1 : this.state.player2;
                return(
                    <Modal isOpen={this.state.isWinner} centered={true}>
                        <ModalBody>{winner} is the overall winner</ModalBody>
                        <Button outline color="primary" onClick={this.toggleWinnerModal}>Play Again</Button>
                    </Modal>
                )
            }
        }

    }
    toggleModal(){
        this.setState({
            isModalOpen:false
        })
    }

    toggleWinnerModal(){
        this.setState(this.baseState);
    }

    manageGames(){
        console.log("Executed");
        this.setState({
            totalGames: this.state.totalGames - 1
        })
    }

    manageScore(winner){
        if(winner){
            console.log(winner);
            if(this.state.player1 == winner){
                this.setState({
                    scoreX:this.state.scoreX+1,
                })
            }
            else{
                this.setState({
                    scoreO:this.state.scoreO+1,
                })
            }
        }
        else{
            console.log("Draw Score");
            this.setState({
                scoreX: this.state.scoreX + 0.5,
                scoreO: this.state.scoreO + 0.5
            })
        }
        this.setState({
            switchPlayer: !this.state.switchPlayer
        })
    }

    handleSubmit(event){
        this.toggleModal();
        this.setState({
            player1: this.playerX.value,
            player2: this.playerO.value,
            totalGames: this.gameCount.value
        })
        event.preventDefault();
    }

    players(player1,player2){
        this.setState({
            player1: player1,
            player2: player2
        })
    }
    render(){
        console.log(this.state.totalGames);
        return(
            <>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} centered={true}>
                    <ModalHeader>New Game</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="playerX" md={4}>Player 1 : X</Label>
                                    <Col md={8}>
                                    <Input type="text" id="playerX" name="playerX"
                                    innerRef={(input) => this.playerX=input}
                                    ></Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="playerO" md={4}>Player 2 : O</Label>
                                    <Col md={8}>
                                    <Input type="text" id="playerO" name="playerO"
                                    innerRef={(input) => this.playerO=input}
                                    ></Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="gameCount" md={4}>Game Count: </Label>
                                    <Col md={8}>
                                    <Input type="number" id="gameCount" name="gameCount"
                                    innerRef={(input) => this.gameCount=input}
                                    ></Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Start</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            <Game key={this.state.totalGames} player1={this.state.player1} player2={this.state.player2}
                    manageGames={() => this.manageGames()}
                    scoreX={this.state.scoreX}
                    scoreO={this.state.scoreO}
                    manageScore={(winner) => this.manageScore(winner)}
                    switchPlayer={this.state.switchPlayer}
                />
                {this.restartGame()}
            </>
        )
    }
}

export default Main;
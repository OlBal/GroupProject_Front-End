import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class GuessForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roundInputs: props.roundInputs,
            round: props.round,
            guess: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const guess = e.currentTarget.value;
        this.setState({ guess });
    }
   
    handleSubmit(e) {
        e.preventDefault();
        const { guess, round } = this.state;

        if(guess !== "") {        
            this.props.handleGuess(round, guess);
        }
    };

    render() {
        const { roundInputs, round, guess } = this.state;

        return (
            <>
                <img
                    className="container" 
                    src={ round === 2 ? roundInputs[0] : roundInputs[2] } 
                />
                <form onSubmit={ this.handleSubmit } className="container">
                    <Input 
                        name="guess"
                        type="text"
                        value={ guess }
                        handleChange={ this.handleChange }
                        required
                    />                
                    <Button
                        buttonClass="btn btn-primary"
                        label="Guess"
                    />
                </form>
            </>
        );
    }
}

export default GuessForm;
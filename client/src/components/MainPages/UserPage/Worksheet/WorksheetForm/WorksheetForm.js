import React from 'react';
import './WorksheetForm.css'
// import MultipleSelect from './MultipleSelect'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorksheetData from './WorksheetData';





class WorksheetForm extends React.Component {
    constructor() {
        super();
        this.state = {
            max: 0,
            min: 0,
            numOfQuestions: 0,
            question: [],
            displayAnswers: false
        };
    }

    handleChange = event => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: target
        });
        console.log(name)
    };


    getEquations = () => {

        axios
            .get(`/slope_intercept?min=${this.state.min}&max=${this.state.max}&numOfQuestions=${this.state.numOfQuestions}`)
            .then(res => {
                console.log(res)
                this.setState({ question: res.data })
            })
    }

    handleEquations = (event) => {
        event.preventDefault()

        this.getEquations();
    }

    handleClick = () => {
        this.setState({ displayAnswers: !this.state.displayAnswers });
      };
    



    render() {
        const renderedEquations = this.state.question.map((e, i) => {
            return <WorksheetData key={i} index={Number(i + 0)} equations={e.question} answer={e.answer} displayAnswers={this.state.displayAnswers}/>
        })

        return (
            <div>
                <h1>Create a Worksheet</h1>
                <form className='workshett-form'>
                    <div>
                        <TextField
                            id="filled-number"
                            label="Min Number"
                            name='min'
                            value={this.state.min}
                            onChange={this.handleChange}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Max Number"
                            name="max"
                            value={this.state.max}
                            onChange={this.handleChange}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Number of Equations"
                            name="numOfQuestions"
                            value={this.state.numOfQuestions}
                            onChange={this.handleChange}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            onClick={this.handleEquations}
                            className="submit-btn"
                            type="submit"
                            value="Save"
                        >
                            Populate
            </Button>
                    </div>
                </form>


                    <h1>Worksheet section....</h1>
                    <Button
                            variant="contained"
                            onClick={this.handleClick}
                            className="submit-btn"
                            type="submit"
                        >
                            show answer
            </Button>
                <div className='Worksheet'>

                    <div className="equation-container">

                        {renderedEquations}

                    </div>
                </div>
            </div>
        )
    }
}

export default WorksheetForm;
import React, { Component } from 'react';
import { addAnswer } from '../actions/answerActions';

import { countShare } from '../actions/countShareAction';
import { connect } from 'react-redux';



class Answers extends Component {


    constructor(props) {

        super(props);



        this.onAddAnswer = this.onAddAnswer.bind(this);
        this.onCountShare = this.onCountShare.bind(this);
    }


    onAddAnswer(event) {

        this.props.onCountShare();



        this.props.onAddAnswer(event.target.value, this.props.id);



    };
    onCountShare() {



        this.props.onCountShare();


    };


    render() {
        return (


            <div>


                <input id={this.props.id} onBlur={this.onAddAnswer} placeholder={this.props.id}></input>


            </div>


        );
    }
}


const mapStateToProps = (state, props) => {

    console.log(state)



    return {

        counters: state.counter,

        answer: state.answer


    }


};





const mapActionToProps = {

    onAddAnswer: addAnswer,
    onCountShare: countShare


};


export default connect(mapStateToProps, mapActionToProps)(Answers);

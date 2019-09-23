

import './App.css';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addMcq, apiPost } from '../src/actions/mcqActions';
import { increment } from './actions/incrementAction'

import Answers from './components/answer';
import List from './components/list';
import "bootstrap/dist/css/bootstrap.css";


class App extends Component {



  constructor(props) {

    super(props);



    this.onAddMcq = this.onAddMcq.bind(this);


    this.btnClick = this.btnClick.bind(this);

    this.btnIncrement = this.btnIncrement.bind(this);
  }














  onAddMcq(event) {

    this.props.onAddMcq(event.target.value);



  }







  btnClick() {



    console.log(this.props.question);

    this.props.onApiPost(this.props.question, this.props.answer);



    this.forceUpdate();
    //window.location.reload(true);

  }

  btnIncrement(value) {


    let arr = this.props.counters;
    let arrLength = arr.length;
    let index = arrLength - 1;



    console.log(this.props.counters[index].id);
    this.props.btnIncrement(this.props.counters[index].id);
    // console.log(this.state.counter);
    this.forceUpdate();



  }



  render() {
    return (
      <div>

        <h2 >Enter Your MCQ QUESTION</h2>
        <hr />

        <input id='qq' onChange={this.onAddMcq} placeholder='Your Question Here' />




        <h3>Answers</h3>


        {this.props.counters.map(counter => <span id={counter.id} key={counter.id}> < Answers id={counter.id} /> </span>)}

        <button className="btn btn-success" onClick={this.btnIncrement}>+</button>


        <hr />

        <button className="btn btn-outline-secondary" onClick={this.btnClick}>Save MCQ</button>




        <h1> </h1>

        <List />


      </div>
    );
  }
}


const mapStateToProps = (state, props) => {

  console.log(state)


  return {

    question: state.mcq,
    answer: state.answer,
    counters: state.counter


  }


};





const mapActionToProps = {

  onAddMcq: addMcq,

  onApiPost: apiPost,

  btnIncrement: increment




};


export default connect(mapStateToProps, mapActionToProps)(App);

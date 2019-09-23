import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionTab } from 'primereact/accordion';

//const QANSWER = 'answer[1][newAnswer]';

class List extends Component {




    componentDidMount() {
        fetch('http://localhost:3006/list')
            .then(res => res.json())
            .then((data) => {

                this.setState({ quiz: data })


                /// console.log(data[30]);
                console.log(data);


                //console.log(data[9].answer[0]);
                //console.log(data[30].ans[])
                console.log(data[2]);
            })
            .catch(console.log)
    }
    state = {
        quiz: []




    }


    deleteFromList(e, id) {


        alert("deleted");



        return fetch('http://localhost:3006/list/' + id, {
            method: 'DELETE',


        },
            window.location.reload(true));



    }


    render() {
        return (<div className="col-xs-12">
            <h1>All Survey Questions </h1>
            {

                this.state.quiz.map((quiz) => (

                    <div className="card" key={quiz.id}>
                        <div className="card-body">
                            <h5 className="card-title">{quiz.newQuiz}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">

                                {



                                    <span>
                                        {quiz.answer[0].newAnswer}
                                        <hr />
                                        {quiz.answer[1].newAnswer}
                                    </span>







                                }




                            </h6>
                            <div key={quiz.id}>
                                <button className="btn btn-outline-danger btn-sm" onClick={(e) => { this.deleteFromList(e, quiz.id) }}



                                > Delete </button>
                                <button


                                    className="btn-outline-primary btn-sm"
                                > Update </button>
                            </div>

                            <hr />



                        </div>
                    </div>
                ))}
        </div>);
    }
}

export default connect(null)(List);
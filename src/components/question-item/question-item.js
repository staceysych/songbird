import React, { Component } from 'react';

export default class QuestionItem  extends Component {
    constructor() {
        super();
        this.state = {
            active: 1,
            id: 0,
        }
    }

    /* generateId = () => {
        this.setState((state) => {
            let { id } = state;
            id = id++;
            return id;
        });
    } */

    render() {
        const { questionArr } = this.props;
        

        return questionArr.map((el) => {

            return (<li key={el} className="list-group-item"><a className="question-link" href="#">{el}</a></li>)
        });
    }
}

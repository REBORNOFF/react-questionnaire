import React, {Component} from "react";
import classes from './QuestionnaireList.module.css';
import {NavLink} from "react-router-dom";


export default class QuestionnaireList extends Component {

    questionnaires () {
        return [1, 2, 3].map((questionnaire, index) => {
            return (
                <li key = {index}>
                    <NavLink to = {'/questionnaire/' + questionnaire}>
                        {questionnaire}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuestionnaireList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.questionnaires()}
                    </ul>
                </div>
            </div>
        )
    }
}
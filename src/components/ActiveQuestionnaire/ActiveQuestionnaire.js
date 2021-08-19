import React from "react";
import classes from './ActiveQuestionnaire.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuestionnaire = props => (
    <div className={classes.ActiveQuestionnaire}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.questionnaireLength}</small>
        </p>
        <AnswersList
            answers = {props.answers}
            onAnswerClick = {props.onAnswerClick}
            state = {props.state}
        />
    </div>
)

export default ActiveQuestionnaire
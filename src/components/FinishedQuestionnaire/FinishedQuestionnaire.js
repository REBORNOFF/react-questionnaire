import React from "react";
import classes from './FinishedQuestionnaire.module.css'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuestionnaire = props => {

    const succesCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }

        return total
    }, 0)

    return (
        <div className={classes.FinishedQuestionnaire}>
            <ul>
                {props.questionnaire.map((questionnaireItem, index) => {
                    const cls = [
                        'fa',
                        props.results[questionnaireItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[questionnaireItem.id]]
                    ]
                    return (
                        <li key = {index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {questionnaireItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {succesCount} из {props.questionnaire.length}</p>
            <div>
                <Button onClick = {props.onRetry} type = "primary">Повторить</Button>
                <Link to = {"/"} >
                    <Button type = "success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuestionnaire
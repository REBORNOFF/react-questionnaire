import React, {Component} from 'react';
import classes from './Questionnaire.module.css';
import ActiveQuestionnaire from '../../components/ActiveQuestionnaire/ActiveQuestionnaire';
import FinishedQuestionnaire from '../../components/FinishedQuestionnaire/FinishedQuestionnaire'

class Questionnaire extends Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        questionnaire: [
            {
                id: 1,
                question: 'Сколько типов данных существуют в JavaScript?',
                rightAnswerId: 4,
                answers: [
                    {text: 3, id: 1},
                    {text: 5, id: 2},
                    {text: 7, id: 3},
                    {text: 8, id: 4}
                ]
            },
            {
                id: 2,
                question: 'Что такое this в JavaScript?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Обычное слово', id: 1},
                    {text: 'Контекст вызова', id: 2},
                    {text: 'Область видимости', id: 3},
                    {text: 'Служебная переменная', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.questionnaire[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {

                if (this.isQuestionnaireFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null

                    })
                }

                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuestionnaireFinished() {
        return this.state.activeQuestion + 1 === this.state.questionnaire.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.Questionnaire}>
                <div className={classes.QuestionnaireWrapper}>
                    <h1>Questionnaire</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuestionnaire
                                results = {this.state.results}
                                questionnaire = {this.state.questionnaire}
                                onRetry = {this.retryHandler}
                                />
                            : <ActiveQuestionnaire
                                answers = {this.state.questionnaire[this.state.activeQuestion].answers}
                                question = {this.state.questionnaire[this.state.activeQuestion].question}
                                onAnswerClick = {this.onAnswerClickHandler}
                                questionnaireLength = {this.state.questionnaire.length}
                                answerNumber = {this.state.activeQuestion + 1}
                                state = {this.state.answerState}
                                />
                    }
                </div>
            </div>
        )
    }
}

export default Questionnaire;


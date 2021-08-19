import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from "react-router-dom";
import Questionnaire from "./containers/Questionnaire/Questionnaire";
import QuestionnaireList from "./containers/QuestionnaireList/QuestionnayreList";
import Auth from "./containers/Auth/Auth";
import QuestionnaireCreator from "./containers/QuestionnaireCreator/QuestionnaireCreator";

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path = "/auth" component = {Auth} />
                <Route path = "/questionnaire-creator" component = {QuestionnaireCreator} />
                <Route path = "/questionnaire/:id" component = {Questionnaire} />
                <Route path = "/" component = {QuestionnaireList} />
            </Switch>
        </Layout>
    )
  }
}

export default App;
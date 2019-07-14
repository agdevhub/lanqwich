import React from "react";
import Axios from "axios";
import Question from "../Question";

export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      learningUnitId: props.unitId
    };
  }

  async componentDidMount() {
    const response = await Axios.get(
      `/api/questions/${this.state.learningUnitId}`
    );
    this.setState({ questions: response.data });
  }

  render() {
    return this.state.questions.map((question, index) => (
      <Question
        key={index}
        questionId={question._id}
        questionString={question.questionString}
        answers={question.answers}
      />
    ));
  }
}

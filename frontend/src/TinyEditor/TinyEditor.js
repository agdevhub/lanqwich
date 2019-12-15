import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import Axios from "axios";

class TinyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tinyContent: "",
      learningUnitId: props.match.params.learningUnitId,
      learningUnitContent: props.location.state.learningUnitContent,
      learningModuleId: props.location.state.learningModuleId
    };
    this.saveUnit = this.saveUnit.bind(this);
    console.log("Learning Unit" + this.state.learningUnitId);
    console.log("Learning Unit" + this.state.learningUnitContent);
  }

  async saveUnit() {
    const learningUnitId = this.state.learningUnitId;
    const tinyContent = this.state.tinyContent;

    console.log("ok so far");
    //const response = await Axios.post(`/api/learning-units/${learningUnitId}`);
    const response = await Axios.post("/api/learning-units", null, {
      params: { learningUnitId, tinyContent }
    });
    console.log(response.data);
  }
  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
    this.setState({ tinyContent: e.target.getContent() });
  };

  render() {
    return (
      <div className="container">
        <Link
          className="btn btn-outline-info"
          to={{ pathname: `/arabic/module/${this.state.learningModuleId}` }}
        >
          Back to Module
        </Link>
        <br />
        <br />
        <Editor
          initialValue={this.state.learningUnitContent}
          apiKey="rmnf1639shivuzohy58jhz9uw1r08kjccdqta1tem10y1bwp"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help | code"
          }}
          onChange={this.handleEditorChange}
        />
        <br />
        <a className="btn btn-outline-info" onClick={this.saveUnit}>
          Save Unit
        </a>
      </div>
    );
  }
}

export default TinyEditor;

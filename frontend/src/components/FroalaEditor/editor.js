import React from "react";
import ReactDOM from "react-dom";

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Require Font Awesome.
import "font-awesome/css/font-awesome.css";

import FroalaEditor from "react-froala-wysiwyg";
const axios = require("axios");
  
  class EditorComponent extends React.Component {
    constructor (props) {
      super(props);
  
      this.handleModelChange = this.handleModelChange.bind(this);
  
      this.state = {
        model: this.props.html,
        userId: this.props.userId
      };
    }
  
    handleModelChange = function(model) {
      this.setState({
        model: model
      });
    }

    componentDidUpdate(){
      console.log(this.state)
    }

    onFormSubmit = () => {
      const formData = new FormData();
        formData.append('html_code', this.state.model);
         axios.post(`http://localhost:5000/html/${this.state.userId}/`, formData)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
        });
    }

  
    render () {
       
      return (
            
          <div>
              <FroalaEditor
                tag='textarea'
                model={this.state.model}
                onModelChange={this.handleModelChange}
            />
             <button onClick={this.onFormSubmit} type="submit">Save</button>
          </div>
      )
    }
  }

  export default EditorComponent


  
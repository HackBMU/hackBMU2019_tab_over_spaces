import React, {
    useReducer,
    useRef,
    forwardRef,
    useImperativeHandle
  } from "react";
  import ReactDOM from "react-dom";
  
  // Require Editor JS files.
  import "froala-editor/js/froala_editor.pkgd.min.js";
  
  // Require Editor CSS files.
  import "froala-editor/css/froala_style.min.css";
  import "froala-editor/css/froala_editor.pkgd.min.css";
  
  // Require Font Awesome.
  import "font-awesome/css/font-awesome.css";
  
  import FroalaEditor from "react-froala-wysiwyg";
  
  class EditorComponent extends React.Component {
    constructor (props) {
      super(props);
  
      this.handleModelChange = this.handleModelChange.bind(this);
  
      this.state = {
        model: this.props.html
      };
    }
  
    handleModelChange = function(model) {
      this.setState({
        model: model
      });
    }

  
    render () {
       
      return <FroalaEditor
                tag='textarea'
                model={this.state.model}
                onModelChange={this.handleModelChange}
            />
    }
  }

  export default EditorComponent


  
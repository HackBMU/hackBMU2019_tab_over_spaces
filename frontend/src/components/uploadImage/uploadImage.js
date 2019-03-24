import React from 'react'
import Editor from '../FroalaEditor/froala'
import Select from 'react-select';
import JSON from './dump.json'

const axios = require("axios");

const options = [
    { value: 'facebook', label: 'Facebook' },
    { value: 'airbnb', label: 'AirBnb' },
    { value: 'webase', label: 'Webase' },
    { value: 'dark', label: 'Dark' },
    { value: 'default', label: 'Default' }
];

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            html : null,
            title : '',
            selectedOption: '',
            clickDeploy : '',
            userId : ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleStyleChange = this.handleStyleChange.bind(this);
        this.handleProjectName = this.handleProjectName.bind(this);
    }

    onFormSubmit(e){
        console.log("Reached here")
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('project_name', this.state.title);
        formData.append('style', this.state.selectedOption.value);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
    
        // axios.post("http://localhost:5000/project", formData)
        //     .then((response) => {
        //         console.log(response.data.html_code)
        //         const temp = response.data.html_code
        //         this.setState({html : temp, clickDeploy: response.data.deploy_url, userId: response.data.id })
        //     }).catch((error) => {
        //         console.log(error)
        // });
        this.setState({html : "this is my html file", clickDeploy: "deploymentlink", userId: "8" })
   }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    handleStyleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    handleProjectName = (event) => {
        console.log(event.target.value)
    }

    render() {

        const { selectedOption } = this.state;

        return (
             this.state.html ? <Editor html = {this.state.html} userId = {this.state.userId} link = {this.state.clickDeploy} /> : <form onSubmit={this.onFormSubmit}>
                <h1>Title</h1>
                <input type="text" name="myTitle" onChange= {this.handleProjectName} />
                <h1>Theme</h1>
                <Select
                    value={selectedOption}
                    onChange={this.handleStyleChange}
                    options={options}
                />
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage
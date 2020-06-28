import React from "react"
import IssueList from "./IssueList";
import Header from "./Header"
import axios from "axios";
import './issues.css';
import logo from './avatar.png'; 
class IssueContainer extends React.Component {
	
state = { 
  issues: []
}
componentDidMount() {
	
	//create a collection of page calls to execute 
	const ops = [];
    const numPages = 5;
	const url ='https://api.github.com/repos/angular/angular/issues'
    for (let page = 1; page < numPages; page += 1) {
      let op = axios.get(url,{
			params: {
				limit: 200,
				perPage:200,
				page:page
				}
		});
      ops.push(op);
    }
	//excecute all page calls
	axios.all(ops).then(axios.spread((...response) => {	
	this.setState({ issues: response[0].data })
	
	//join results
	for (let page = 1; page < numPages; page += 1) {
		
		var joined = null
		joined = this.state.issues.concat(response[page].data);
	    this.setState({ issues: joined })
		
	}
	
})).catch(error => {
  if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
})
}
	
	render() {
	  return (
	  
		<div>
		  <Header />
		  <h2 class = "subheader">Issues created in the last 7 days</h2>
		  <IssueList issues={this.state.issues} />
		</div>
	  );
	}
}

export default IssueContainer

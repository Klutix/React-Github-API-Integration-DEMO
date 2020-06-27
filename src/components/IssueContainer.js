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
    const numPages = 3;
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
	
})).catch(errors => {
  //currently errors siliently
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
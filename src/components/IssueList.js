import React from "react"


class Title extends React.Component { 
	render(){
		return 	(<h3>
				<a href ={this.props.html_url} >
					{this.props.title}
				</a>
			 </h3>)
	}  
		
}

class Details extends React.Component{
	render(){
		return(
		<ul>
						<li>
						<img src= {this.props.avatar_url} />
						<b>User Login: </b>{this.props.login} <br/>
						<b>Assignee: </b>{this.props.Assignee|| "None"}<br/>
						<b>Creation Date: </b>{this.props.created_at}<br/>
						<pre>
							{this.props.body}
						</pre>
						</li>
		</ul>)
		
	}
}


class IssuesList extends React.Component { 

  render() { 
  
	{/*create a date we can compare against to show 7 days back*/}
	var d = new Date();
	d.setDate(d.getDate()-7);
	
	//convert date into comparable form and removed time so results are more accurate
	d = d.toISOString().substr(0,10)
	
	{/*filter out all not within the range we want*/}
	const filteredData = this.props.issues.filter(issue => issue.created_at.substr(0,10) >= d)  
    
	return (
    <div>
		{/*for each issue make a list to hold data for each issue*/}
        {filteredData.map(issue => (	
          <ol>
		    <Title title = {issue.title} html_url = {issue.html_url} />
			<Details avatar_url ={issue.user.avatar_url} login = {issue.user.login} Assignee = {issue.Assignee|| "None"} created_at = {issue.created_at} body = {issue.body} />
		  </ol>
		  
        ))}
      </div>
    )
  }
}

export default IssuesList

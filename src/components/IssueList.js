import React from "react"

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
			  <h3>
				<a href ={issue.html_url} class = "title">
					{issue.title}
				</a>
			 </h3>
			  <ul>
			    <li>
				<img src= {issue.user.avatar_url} />
				<b>User Login: </b>{issue.user.login} <br/>
				<b>Assignee: </b>{issue.Assignee|| "None"}<br/>
				<b>Creation Date: </b>#{issue.created_at}<br/>
				<pre>
					{issue.body}
				</pre>
				</li>
			  </ul>
		  </ol>
		  
        ))}
      </div>
    )
  }
}

export default IssuesList
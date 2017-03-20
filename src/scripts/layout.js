import React from 'react'



const Layout = React.createClass({


render: function() {
		return(
			<div className="container1">
					<DateandTime />
					<Icons />
					<Infotext />
			</div>
		)
	}
})

var DateandTime = React.createClass({
	render: function() {
		return( 

			<div className="firstdiv">
			<div className="datedate">4/11/13</div>
			<div className="time">10:30</div>
			</div>

			)
	}
})

var Icons = React.createClass({
	render: function() {
		return(
			<div>
				<div className="iconicon">Icon</div>
			</div>
			)
	}
})

var Infotext = React.createClass({
	render: function() {
		return(
			<div className="thirddiv">
				<div className="title"><h3>Here some title</h3></div>
				<div className="text"><p>Here some text Here some text Here some text Here some text Here some text Here some text Here some text Here some text Here some text Here some text Here some text Here some text</p></div>
			</div>

			)
	}
})


export default Layout
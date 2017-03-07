import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'



var Resptimeline = React.createClass({
	render: function() {
		return <div className="layoutpage">
		<Timelin />
		<Picicon />
		<Textlan />
		</div>
	}
})

var Timelin = React.createClass({
	render: function() {
		return 
			<div className="time">
				<p>4/10/13</p>
				<h4>18:30</h4>
			</div>
	}
})

var Picicon = React.createClass({
	render: function() {
		return
			<div className="icon">
				<i class="fafamobile" aria-hidden="true"></i>
			</div>

	}
})


var Textlan = React.createClass({
	render: function() {
		return
			<div className="textlan">
				<h5>Ricebean black-eyed pea</h5>
				<p>Heroku makes it easy to deploy and scale Java apps in the cloud
				Heroku makes it easy to deploy and scale Java apps in the cloud
				Heroku makes it easy to deploy and scale Java apps in the cloud
				</p>
			</div>
	}
})


var app = function() {
	var libraryName = 'react'

	React.render(<Resptimeline />, document.querySelector('.container'))
	
}



// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
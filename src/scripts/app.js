import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


var Layoutreact = React.createClass({
	render: function() {
		return ( 
			<div className="layout-page"> 
				<Rowone /> 
			</div>
			)
	}
})

var Rowone = React.createClass({
	render: function() {
		return (
			<div className="rowone">
				<h1>LAY OUT app_name</h1>
			</div>
			)
	}
})



var app = function() {
  var libraryName = 'react'
  // ReactDOM.render() takes two inputs: 
  	// 1. A React component
  	// 2. A node on the actual DOM — the place we want to mount our React node tree.
  ReactDOM.render(<Layoutreact />, document.querySelector('.container'))
  // this is where i MOUNT my components. to mount is to sync up your virtual DOM 
  // tree with the actual DOM. a React component is mounted if it's curently part 
  // of the web document. it is unmounted if it's just floating around in javscriptland.


}	







// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
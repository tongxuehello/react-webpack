var React = require('react');
var Hello = React.createClass({
	render() {
		return (
			<h1>
				<span style={{color:"red",fontWeight:"bold"}}>Hello </span> 
				{this.props.name}!
			</h1>
		)
	}
});
module.exports = Hello;
var React = require('react');
var Hello = React.createClass({
	render() {
		return (
			<h1>Hello {this.props.name}!</h1>
		)
	}
});
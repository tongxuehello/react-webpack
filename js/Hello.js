var React = require('react');
var Hello2 = require('./Hello2');
var Hello = React.createClass({
	render() {
		return (
			<Hello2 name="smile11" />
		)
	}
});
module.exports = Hello;
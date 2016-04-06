var React = require('react');
var Hello2 = React.createClass({
	render() {
		return (
			<h1>
				<span style={{color:"red",fontWeight:"bold"}}>Hello test shao hello ==1 </span> 
				{this.props.name}!
			</h1>
		)
	}
});
module.exports = Hello2;
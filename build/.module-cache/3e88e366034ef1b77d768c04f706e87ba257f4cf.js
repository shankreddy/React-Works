var React = require('React');
var message =
	React.createElement("div", {class: "hello", onClick: someFunc}, 
		React.createElement("span", null, "Hello World")
	);
React.renderComponent(message,document.body);
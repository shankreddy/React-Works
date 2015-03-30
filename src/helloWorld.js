var React = require('React');
var message =
	<div class="hello" onClick={someFunc}>
		<span>Hello World</span>
	</div>;
React.renderComponent(message,document.body);
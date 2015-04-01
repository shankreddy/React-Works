var RadioOption = React.createClass({displayName: "RadioOption",
		propTypes:{
			value: React.PropTypes.string.isRequired,
			children: React.PropTypes.node
		},
		render:function(){
		var name = this.props.name; 
			return(
				React.createElement("p", {className: "radio"}, 
						React.createElement("label", null, 
							React.createElement("input", {type: "radio", name: name, value: this.props.value}), 
							this.props.children
						)
					)
			);
		}
})
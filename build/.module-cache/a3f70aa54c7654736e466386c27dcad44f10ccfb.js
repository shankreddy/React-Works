var RadioOption = React.createClass({displayName: "RadioOption",
		propTypes:{
			value: React.PropTypes.string.isRequired,
			children: React.PropTypes.node
		},
		render:function(){
			return(
				React.createElement("p", {className: "radio"}, 
						React.createElement("label", null, 
							React.createElement("input", {type: "radio", name: "referrer", value: this.props.value}), 
							this.props.children
						)
					)
			);
		}
})
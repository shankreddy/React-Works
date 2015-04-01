var RadioOption = React.createClass({
		propTypes:{
			value: React.PropTypes.string.isRequired,
			children: React.PropTypes.node
		},
		render:function(){
		var name = this.props.name; 
			return(
				<p className="radio">
						<label>
							<input type="radio" name={name} value={this.props.value}/>
							{this.props.children}
						</label>
					</p>
			);
		}
})
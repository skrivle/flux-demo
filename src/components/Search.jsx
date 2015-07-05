import React from 'react';

export default class SearchField extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			query: ''
		};

		this._onSubmit = this._onSubmit.bind(this);
		this._onKeyDown = this._onKeyDown.bind(this);

	}

	_onSubmit (e) {
		e.preventDefault();
		this.props.onSubmit(this.state.query);
	}

	_onKeyDown (e) {
		this.setState({query: e.target.value});
	}

	render () {
		return (
			<div>
				<form onSubmit={this._onSubmit}>
					<input onKeyDown={this._onKeyDown} type="search"/>
				</form>
			</div>
		);
	}
}

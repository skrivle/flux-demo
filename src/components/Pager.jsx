import React from 'react';

export default class Pager extends React.Component {

	constructor () {
		super();

		this._onPagerClick = this._onPagerClick.bind(this);
	}

	_onPagerClick (page) {
		this.props.onPagerClick();
	}

	render () {

		let pages = [];

		for(var i = 0; i < this.props.totalPages; i ++) {
			pages.push(<li key={i}><a href="#" onClick={this.props.onPagerClick.bind(null, (i + 1))}>{i + 1}</a></li>);
		}

		return (
			<div>
				<ul>{pages}</ul>
			</div>
		)
	}
}

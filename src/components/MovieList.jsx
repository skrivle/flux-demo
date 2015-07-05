import React from 'react';

export default class MovieList extends React.Component {
	render () {

		let view;
		let movies = [];

		if(this.props.isLoading) {
			view = (<div>Loading ...</div>);
		}else {

			if(!this.props.movies.length) {
				view = (<div>No results :-)</div>);
			}else {
				this.props.movies.forEach(function (movie) {
					movies.push(<div key={movie.id}>{movie.title}</div>);
				});

				view = (<div>{movies}</div>);
			}

		}

		return view;
	}
}

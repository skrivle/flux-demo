import React from 'react';;
import * as movieActions from '../actions/movieActions';
import MovieSearchStore from '../stores/MovieSearchStore';


function getAppState () {
	return {
		movies: MovieSearchStore.getMovies()
	}
}

class App extends React.Component {

	constructor () {
		super();
		this.state = getAppState();

		this._onChange = this._onChange.bind(this);
	}

	componentDidMount () {
		MovieSearchStore.on('change', this._onChange)
		movieActions.search('lol');
	}

	_onChange () {
		this.setState(getAppState());
	}

	render () {

		let view;
		let movies = [];

		if(!this.state.movies.length) {
			view = (<div>No movies ...</div>);
		}else {

			for(let i = 0, iLen = this.state.movies.length; i < iLen; i ++) {
				let movie = this.state.movies[i];
				movies.push(<div key={i}>{movie.title}</div>);
			}

			view = (<div>{movies}</div>);
		}

		console.log(view)

		return view;
	}
}


export default App;

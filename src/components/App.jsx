import React from 'react';;
import MovieSearchStore from '../stores/MovieSearchStore';
import SearchField from './Search';
import MovieList from './MovieList';
import * as movieActions from '../actions/movieActions';


function getAppState () {
	return {
		movies: MovieSearchStore.getMovies(),
		isLoading: MovieSearchStore.getIsLoading(),
		searchQuery: MovieSearchStore.getSearchQuery()
	}

	console.log(this.state);
}

class App extends React.Component {

	constructor () {
		super();
		this.state = getAppState();

		this._onChange = this._onChange.bind(this);
		this._onSearch = this._onSearch.bind(this);
	}

	componentDidMount () {
		MovieSearchStore.on('change', this._onChange);
	}

	_onChange () {
		this.setState(getAppState());
	}

	_onSearch (query) {
		movieActions.search(query);
	}

	render () {
		return (
			<div>
			<SearchField onSubmit={this._onSearch} query={this.state.searchQuery}/>
			<MovieList movies={this.state.movies} isLoading={this.state.isLoading}/>
			</div>
		);
	}
}


export default App;

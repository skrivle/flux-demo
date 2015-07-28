import React from 'react';;
import MovieSearchStore from '../stores/MovieSearchStore';
import SearchField from './Search';
import Pager from './Pager';
import MovieList from './MovieList';
import * as movieActions from '../actions/movieActions';


function getAppState () {
	return {
		movies: MovieSearchStore.getMovies(),
		isLoading: MovieSearchStore.getIsLoading(),
		searchQuery: MovieSearchStore.getSearchQuery(),
		totalPages: MovieSearchStore.getTotalPages(),
		currentPage: MovieSearchStore.getCurrentPage()
	}

	console.log(this.state);
}

class App extends React.Component {

	constructor () {
		super();
		this.state = getAppState();

		this._onChange = this._onChange.bind(this);
		this._onSearch = this._onSearch.bind(this);
		this._onPagerClick = this._onPagerClick.bind(this);
	}

	componentDidMount () {
		MovieSearchStore.on('change', this._onChange);
	}

	_onChange () {
		this.setState(getAppState());
	}

	_onSearch (query) {
		movieActions.search(query, 1);
	}

	_onPagerClick (page) {
		movieActions.search(this.state.searchQuery, page);
	}

	render () {

		let view;

		if(this.state.isLoading) {
			view = (
				<div>
					<span>Search for 'e' if you want lots of results ...</span>
					<SearchField onSubmit={this._onSearch} query={this.state.searchQuery}/>
					<MovieList movies={this.state.movies} isLoading={this.state.isLoading}/>
				</div>
			);
		}else {
			view = (
				<div>
					<span>Search for 'e' if you want lots of results ...</span>
					<SearchField onSubmit={this._onSearch} query={this.state.searchQuery}/>
					<MovieList movies={this.state.movies} isLoading={this.state.isLoading}/>
					<Pager onPagerClick={this._onPagerClick} totalPages={this.state.totalPages} currentPage={this.state.currentPage}/>
				</div>
			)
		}

		return view;
	}
}


export default App;

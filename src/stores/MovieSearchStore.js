import appDispatcher from '../dispatchers/appDispatcher';
import EventEmitter from 'wolfy87-eventemitter';
import assign from 'object-assign';


let _movies = [];
let _isLoading = false;
let _searchQuery = '';
let _currentPage;
let _totalPages;
let _resultsPerPage = 2;

function _setMovies (movies) {
	_movies = movies;
}

function _setIsLoading (value) {
	_isLoading = value;
}

function _setSearchQuery (value) {
	_searchQuery = value;
}

function _emitChange () {
	MovieSearchStore.emit('change');
}

function _setCurrentPage (page) {
	_currentPage = page;
}

function _setTotalPages (totalResults) {
	_totalPages = Math.ceil(totalResults / _resultsPerPage);
}


let MovieSearchStore = assign({}, EventEmitter.prototype, {
	getMovies: function () {
		return _movies;
	},
	getIsLoading: function () {
		return _isLoading;
	},
	getSearchQuery: function () {
		return _searchQuery;
	},
	getCurrentPage: function () {
		return _currentPage;
	},
	getTotalPages: function () {
		return _totalPages;
	},
	getResultsPerPage: function () {
		return _resultsPerPage;
	},
	getOffsetFromPage: function (page) {
		return (page - 1) * _resultsPerPage;
	}
});

appDispatcher.register(function (payload) {

	switch(payload.actionType) {

		case 'LOAD_MOVIE_SEARCH_DATA':
			_setIsLoading(true);
			_setSearchQuery(payload.data);
			_emitChange();
			break;

		case 'RECIEVED_MOVIE_SEARCH_DATA':
			_setMovies(payload.data.movies);
			_setCurrentPage(payload.data.offset, payload.data.count, payload.data.totalResults);
			_setTotalPages(payload.data.totalResults);
			_setIsLoading(false);
			_emitChange();
			break;
	}

});

export default MovieSearchStore;

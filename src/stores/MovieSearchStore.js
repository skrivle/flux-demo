import appDispatcher from '../dispatchers/appDispatcher';
import EventEmitter from 'wolfy87-eventemitter';
import assign from 'object-assign';


let _movies = [];
let _isLoading = false;
let _searchQuery = '';

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
	TodoStore.emit('change');
}


let TodoStore = assign({}, EventEmitter.prototype, {
	getMovies: function () {
		return _movies;
	},
	getIsLoading: function () {
		return _isLoading;
	},
	getSearchQuery: function () {
		return _searchQuery;
	}
});

appDispatcher.register(function (payload) {

	switch(payload.actionType) {

		case 'LOADING_MOVIE_SEARCH_DATA':
			_setIsLoading(true);
			_setSearchQuery(payload.data);
			_emitChange();
			break;

		case 'RECIEVED_MOVIE_SEARCH_DATA':
			_setMovies(payload.data);
			_setIsLoading(false);
			_emitChange();
			break;
	}

});

export default TodoStore;

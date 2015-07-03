import appDispatcher from '../dispatchers/appDispatcher';
import EventEmitter from 'wolfy87-eventemitter';
import assign from 'object-assign';


let _movies = [];

function _setMovies (movies) {
	_movies = movies;
}

function emitChange () {
	TodoStore.emit('change');
}


let TodoStore = assign({}, EventEmitter.prototype, {
	getMovies: function () {
		return _movies;
	}
});

appDispatcher.register(function (payload) {

	switch(payload.actionType) {
		case 'RECIEVED_MOVIE_SEARCH_DATA':
			_setMovies(payload.data);
			emitChange();
			break;
	}

});

export default TodoStore;

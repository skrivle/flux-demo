import appDispatcher from '../dispatchers/appDispatcher';
import EventEmitter from 'wolfy87-eventemitter';
import assign from 'object-assign';

let _cache = {};

function _setCacheItem (key, item) {
	_cache[key] = item;
}

function _getKey (query, offset, count) {
	return query + '-' + offset + '-' + count;
}


let MovieSearchCacheStore = assign({}, EventEmitter.prototype, {
	getCacheItem: function (query, offset, count) {
		return _cache[_getKey(query, offset, count)];
	}
});

appDispatcher.register(function (payload) {

	switch(payload.actionType) {

		case 'RECIEVED_MOVIE_SEARCH_DATA':

			let key = _getKey(payload.data.query, payload.data.offset, payload.data.count);
			_setCacheItem(key, payload.data);

			console.log(_cache);
			break;
	}

});

export default MovieSearchCacheStore;

import appDispatcher from '../dispatchers/appDispatcher';
import * as movieService from '../services/movieService';
import MovieSearchStore from '../stores/MovieSearchStore';
import MovieSearchCacheStore from '../stores/MovieSearchCacheStore';

export function search (query, page, bypassCache = false) {

	let count = MovieSearchStore.getResultsPerPage();
	let offset = MovieSearchStore.getOffsetFromPage(page);
	let cachedData = MovieSearchCacheStore.getCacheItem(query, offset, count);

	if(cachedData && !bypassCache) {

		dispatchData(cachedData);

	}else {

		appDispatcher.dispatch({
			actionType: 'LOAD_MOVIE_SEARCH_DATA',
			data: query
		});

		movieService
			.search(query, offset, count)
			.then(function (data) {
				dispatchData(data);
			});
	}

	function dispatchData (data) {

		appDispatcher.dispatch({
			actionType: 'RECIEVED_MOVIE_SEARCH_DATA',
			data: {
				query: query,
				movies: data.movies,
				offset: offset,
				count: count,
				totalResults: data.totalResults
			}
		});
	}


};

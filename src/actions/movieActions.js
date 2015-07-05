import appDispatcher from '../dispatchers/appDispatcher';
import * as movieService from '../services/movieService';

export function search (query) {

	appDispatcher.dispatch({
		actionType: 'LOADING_MOVIE_SEARCH_DATA',
		data: query
	});

	movieService.search(query).then(function (data) {
		appDispatcher.dispatch({
			actionType: 'RECIEVED_MOVIE_SEARCH_DATA',
			data: data
		});
	});
};

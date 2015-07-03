import appDispatcher from '../dispatchers/appDispatcher';
import * as movieService from '../services/movieService';

export function search (query) {
	movieService.search().then(function (data) {
		appDispatcher.dispatch({
			actionType: 'RECIEVED_MOVIE_SEARCH_DATA',
			data: data
		});
	});
};

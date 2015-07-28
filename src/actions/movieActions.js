import appDispatcher from '../dispatchers/appDispatcher';
import * as movieService from '../services/movieService';
import MovieSearchStore from '../stores/MovieSearchStore';

export function search (query, page) {

	appDispatcher.dispatch({
		actionType: 'LOADING_MOVIE_SEARCH_DATA',
		data: query
	});

	let count = MovieSearchStore.getResultsPerPage();
	let offset = MovieSearchStore.getOffsetFromPage(page);

	console.log('count', count)
	console.log('offset', offset)

	movieService.search(query, offset, count).then(function (data) {
		appDispatcher.dispatch({
			actionType: 'RECIEVED_MOVIE_SEARCH_DATA',
			movies: data.movies,
			offset: offset,
			count: count,
			totalResults: data.totalResults
		});
	});
};

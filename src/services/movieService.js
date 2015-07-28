
const MOVIE_DATA = [
	{
		id: 1,
		title: 'Jos',
		img: 'http://placehold.it/150x150'
	},
	{
		id: 2,
		title: 'Batman',
		img: 'http://placehold.it/150x150'
	},
	{
		id: 3,
		title: 'Superman',
		img: 'http://placehold.it/150x150'
	},
	{
		id: 4,
		title: 'Inception',
		img: 'http://placehold.it/150x150'
	},
	{
		id: 5,
		title: 'Flux movie',
		img: 'http://placehold.it/150x150'
	},
	{
		id: 6,
		title: 'Scary movie',
		img: 'http://placehold.it/150x150'
	},
	{
		id: 7,
		title: 'Test movie',
		img: 'http://placehold.it/150x150'
	}
]


export function search (query, offset, count) {

	let results = {
		movies: [],
		offset: offset,
		count: count
	};

	let allMovies = [];

	MOVIE_DATA.forEach(function (item) {
		if(item.title.toLowerCase().indexOf(query) > -1) {
			allMovies.push(item);
		}
	});

	results.totalResults = allMovies.length;
	results.movies = allMovies.slice(offset, offset + count);

	return new Promise ((resolve, reject) => {
		setTimeout(() => { resolve(results) }, 3000);
	});

};

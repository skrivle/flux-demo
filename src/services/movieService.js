
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


export function search (query) {

	var results = [];

	MOVIE_DATA.forEach(function (item) {

		if(item.title.toLowerCase().indexOf(query) > -1) {
			results.push(item);
		}
	});

	return new Promise ((resolve, reject) => {
		setTimeout(() => { resolve(results) }, 3000);
	});


};

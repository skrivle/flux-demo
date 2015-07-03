
const MOVIE_DATA = [
	{
		title: 'test 1',
		img: 'http://placehold.it/150x150'
	},
	{
		title: 'test 2',
		img: 'http://placehold.it/150x150'
	},
	{
		title: 'test 3',
		img: 'http://placehold.it/150x150'
	}
]


export function search (query) {

	return new Promise ((resolve, reject) => {
		setTimeout(() => { resolve(MOVIE_DATA) }, 3000);
	});


};

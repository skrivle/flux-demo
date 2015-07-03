import React from 'react';
import * as movieService from '../services/movieService';


class App extends React.Component {

	constructor () {
		super();

		this.state = {
			loaded: false
		};
	}

	componentDidMount () {
		movieService.search().then(() => {
			this.setState({loaded: true});
		});
	}

	render () {

		let text = 'loading ....';

		if(this.state.loaded) {
			text = 'finished loading!'
		}

		return (<div>My App {text}</div>);
	}
}


export default App;

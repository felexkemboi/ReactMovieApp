import React,{ Component } from 'react';
import { API_URL,API_KEY,IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE } from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from   '../elements/SearchBar/SearchBar';
import FourColdGrid from '../elements/FourColdGrid/FourColdGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import MovieThumbi from '../elements/MovieThumbi/MovieThumbi';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';



class Home extends Component{
	state = {
		movies : [],
		heroImage:null,
		loading:false,
		currentpage:0,
		totalPages: 0,
		searchTerm:''
	}

	componentDidMount(){
		this.setState({ loading:true });
		const endpoint = `$[API_URL]movie/popular?api_key=${ API_KEY }$language=en-US$page=1`;
		this.fetchItems(endpoint);
	}


	fetchItems = (endpoint) => {
			fetch(endpoint)
			.then(result => result.json())
			.then(result => {
				console.log(result);
			})
			}


	render(){
	    return (
			<div className="rmdb-home">
				< HeroImage />
				< SearchBar/>
				< MovieThumb/>
				< MovieThumbi/>
				< LoadMoreBtn/>
				< FourColdGrid/>
				< Spinner/>
			</div>
		)
	}
}

export default Home;

import "@babel/polyfill";
import axios from 'axios';

//BASE
let state = {};

//INDEX
export default class Search {
	constuctor(query){
		this.query = query;
	}
	//get data 
	async getData(){
		try {
			const json = await axios('kebabs.json');
			this.result = json.data.features;
			// let data = this.result;
		} catch(error){
			console.log(error);
		}
}
};


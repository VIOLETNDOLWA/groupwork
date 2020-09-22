import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import FruitsScreen from './Screen/FruitsScreen';
import VegetablesScreen from './Screen/VegetablesScreen';
// import loginform from './Screen/loginform';
  

export default class Product extends React.Component { 
	constructor(props) {    
	  super(props); 
 
	  this.state={
		 type:["Vegetables","Fruits"],
	 	 name:["spinach","kales","onions","tomatoes","carrots","capsiums","cabbage","broccoli","apples","avacadoS","bananaS","grapes","water melon","orange","pawpaw","strawberries"],
		 price:["KES:50 /Bunch","KES:30 /Bunch","KES:100 /Kg","KES:150 /Kg","KES:50 /2kg","KES:90 /3kg","KES:50 /2Kg","KES:100 /4kg","KES:100 /Kg","KES:50 Kg","KES:75 /Kg","KES:120 /3Kg","KES:300 /5Kg","KES:150 /2Kg","KES:80 /Kg","KES:140 /5Kg"],
		 Quantity:["5","3","1","7","2","1","2"]
		 
		 
	   };
	};

render() {
  return (
	  <BrowserRouter>
	  

    <div className="grid-container">
  	    <header className="header">
		<Route path="/Fruits/:id" component={FruitsScreen}/> 
		<Route path="/Vegetables/:id"component={VegetablesScreen}/> 
  
		     <div className="type">
			 <a href="index.html">Home</a>	 
			 <a href="vegetable.html">Vegetables</a>  
			 <a href="fruit.html">Fruits</a>
	</div> 
		 
	</header>
	
	   
		   <h3><b>WELCOME TO GREEN KIOSK</b></h3>
		<div className="products">
		 
        <div className="image1">
			
            <img  className="veges1"src="images/image1.jpg"alt="veges"></img>
	      
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[0]}</p>
			<p>{this.state.price[0]}</p>
           <input type="button" class="button" value="Add To Cart"></input>
        </div>

		<div className="image2">
		   <img  className="veges2"src="images/sukumawiki.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[1]}</p>
		    <p>{this.state.price[1]}</p>
			<input type="button" class="button" value="Add To Cart"></input>

			
		</div>
		<div className="image3">
		   <img  className="veges3"src="images/onion.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[2]}</p>
		    <p>{this.state.price[2]}</p>
			<input type="button" class="button" value="Add To Cart"></input>

			
			
		</div>
		<div className="image4">
		   <img  className="veges4"src="images/tomatoes.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[3]}</p>
		    <p>{this.state.price[3]}</p>
			<input type="button" class="button" value="Add To Cart"></input>

			
		</div>
		<div className="image5">
		   <img  className="veges5"src="images/carrots.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[4]}</p>
		    <p>{this.state.price[4]}</p>
			<input type="button" class="button" value="Add To Cart"></input>

			

			
			
		</div>
		<div className="image6">
		   <img  className="veges6"src="images/capsicum.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[5]}</p>
		    <p>{this.state.price[5]}</p>
		   <input type="button" class="button" value="Add To Cart"></input>
		</div>
        <div className="image7">
		   <img  className="veges7"src="images/cabbage.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[6]}</p>
		    <p>{this.state.price[6]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
		</div>
		<div className="image8">
		   <img  className="veges8"src="images/broccoli.jpg"alt="veges"></img>
		    <p>{this.state.type[0]}</p> 
			<p>{this.state.name[7]}</p>
		    <p>{this.state.price[7]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
			</div>
			
		<div className="image9">
		   <img  className="fruit9"src="images/apple.jpg"alt="fruit"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[8]}</p>
		    <p>{this.state.price[8]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
			</div>

			
		<div className="image10">
		   <img  className="fruit10"src="images/avocado.jpg"alt="fruit"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[9]}</p>
		    <p>{this.state.price[9]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
		</div>

        <div className="image11">
		   <img  className="fruit11"src="images/banana.jpg"alt="fruit"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[10]}</p>
		    <p>{this.state.price[10]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
		</div>

        <div className="image12">
		   <img  className="fruit12"src="images/grape.jpg"alt="fruit"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[11]}</p>
		    <p>{this.state.price[11]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
		</div>

		<div className="image13">
		   <img  className="fruit13"src="images/melon.jpg"alt="fruit"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[12]}</p>
		    <p>{this.state.price[12]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
			
		</div>

 
        <div className="image14">
		   <img  className="fruit14"src="images/oranges.jpg"alt="fruit"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[13]}</p>
		    <p>{this.state.price[13]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
		</div>

		<div className="image15">
		   <img  className="fruit15"src="images/pawpaw.jpg"alt="veges"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[14]}</p>
		    <p>{this.state.price[14]}</p>
			<input type="button" class="button" value="Add To Cart"></input>

			
		</div>

		<div className="image16">
		   <img  className="fruit16 "src="images/strawberries.jpg"alt="veges"></img>
		    <p>{this.state.type[1]}</p> 
			<p>{this.state.name[15]}</p>
		    <p>{this.state.price[15]}</p>
			<input type="button" class="button" value="Add To Cart"></input>
		</div>

</div>



</div>
 </BrowserRouter>


	 
  );}
}






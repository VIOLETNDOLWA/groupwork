import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class funitures extends React.Component { 
	constructor(props) {    
	  super(props); 
 
	  this.state={
		//  type:["Furnitures"],
	 	 name:["sofa sets","dining chairs","beds"],
			 
		  price:["122,000","90,000","175,000","90,0000","100,0000"],
		  image:["image1","image2","image3,image4"]
	
		 
	   };
	};

render() {
  return (
	  

    <div className="grid-container">
  	    <header className="header">
  	    
		    <div className="type">
			    <button onclick="openMenu()">
			           &#9776;
			</button>
		     <a href="index.html">funitures</a>
    </div>
		<div className="header-link">
			<a href="cart.html">cart</a>
			<a href="signin.html">sign in</a>
	</div>
		
	</header>
	   
		   <h3> funitures categories</h3>
		     <button className="sidebar-close-button" onclick="closeMenu()">x</button>
		       <ul>
		     	<li>  <a href="index.html">sofa </a></li>
			    <li>  <a href="index.html">dinning chairs</a></li>
			    <li>  <a href="index.html">clasic beds </a></li>
			
		   </ul>

	
	<div className="product">
		 
         
			<div className="image1">
			
            <img  className="product1"src="images/image17.jpg"alt="product"></img>
	      
		   {/* <p>type:{this.state.type[0]}</p> */} 
				<a href="product.html">Sofa set</a> 
			<p>price:{this.state.price[0]}</p>
			<p>image:{this.state.image[0]}</p>

			<img  className="product2"src="images/image12.jpg"alt="product"></img>
		   {/* <p>type:{this.state.type[0]}</p> */}
				 <a href="product.html">Sofa set</a> 
			<p>price:{this.state.price[1]}</p>
			<p>image:{this.state.image[1]}</p>
        
			<img  className="product2"src="images/image16.jpg"alt="product"></img>
			
		   {/* <p>type:{this.state.type[0]}</p> */}
				 <a href="product.html">Sofa set</a> 
			<p>price:{this.state.price[1]}</p>
			<p>image:{this.state.image[2]}</p>

			<img  className="product2"src="images/image17.jpg"alt="product"></img>
		   {/* <p>type:{this.state.type[0]}</p> */}
				 <a href="product.html">Sofa set</a> 
			<p>price:{this.state.price[1]}</p>
			<p>image:{this.state.image[3]}</p>



			</div>

			
			
		

</div>
</div>
	 
  );}
}






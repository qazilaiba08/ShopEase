 import React from 'react'
 import './Home.css'
 
 const Home = () => {
let [count,setCount] = React.useState(0)
function increment (){
  setCount(count+1)
}
   return (
     <>
       <div className="container my-4 py-4"
        style={{textAlign: 'center', lightingColor:"black", padding:"50px", borderRadius:"10px", 
        boxShadow:"0 0 10px 0 rgba(0,0,0,0.1)",height:"100%", backgroundColor:"white",marginTop:"50%"}}>
        <div className="row align-items-center bg"
       
        >
       
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
        <h1>ShopEase</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse facere aperiam harum repellendus similique tempore, velit iure,
             ad excepturi minima quisquam repudiandae tenetur ipsa possimus maiores incidunt odit. Ipsa.</p>
            <button onClick={increment}
             className="shop-now-btn align-items-center border">Shop Now</button>
             </div>
             <br />
             <div className="col-lg-6 col-md-12 text-center">
        <img 
       style={{ maxWidth: "250px" ,borderRadius:"10px", boxShadow:"0 0 10px 0 rgba(0,0,0,0.1)",
         padding:"10px" ,margin:"10px" ,width:"100%", height:"auto"
       }}
      src="https://img.freepik.com/free-photo/stacks-books-certificates-celebration-generated-by-ai_188544-39082.jpg?ga=GA1.1.1088972848.1725985385&semt=ais_hybrid" 
      alt="Books" 
    />
        </div>
        </div>
        </div>
        <br />
<hr />
     </>
   )
 }
 
 export default Home
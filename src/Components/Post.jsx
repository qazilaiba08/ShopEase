// import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import  React from 'react' 

export default function Post () {
        let [data, setData] = React.useState([]);
    
        React.useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => setData(json));
    },[data]);

  return (
    <> 
    <div>
    {data.map((product) => {
               <Card style={{ width: '18rem' }} key={product.id}>
                    <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                         <Card.Title>{product.title}</Card.Title>
                           <Card.Text>
                                {product.description}
                             </Card.Text>
                             <Card.Text>
                                 {product.price}
                            </Card.Text>
                   </Card.Body>
                 </Card>
       })}
    </div>
    
    </>
  )
}
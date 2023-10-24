import React from 'react'
import Pro from './Pro.jsx'


export default function Product(){

  const products=[
 {id:1, title:'this product1'},
 {id:2, title:'this product2'},
 {id:3, title:'this product3'}
  ]; 
   return (
   <>
  

     {products.map((ele)=>{
      return <Pro {...ele} key={ele.id}/>;
     })}
   

   </>
  );
}
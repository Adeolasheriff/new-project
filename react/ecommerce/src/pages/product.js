import React from 'react'
import useFetch from './useFetch'


export default function Product() {
  const {data:jumy} = useFetch('https://fakestoreapi.com/products?sort=desc')
  let Tea = () => {
    return(
      <div>
        {jumy.map((hi)=>(
          <div key={hi.id}>
           <img src={hi.image} alt=""  width={'4%'}/>
           <h5>{hi.price}</h5>
           <h6>{hi.description}</h6>
           <h6>{hi.detail}</h6>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
      {jumy && <Tea hi={jumy}/>}
    </div>
  )
}



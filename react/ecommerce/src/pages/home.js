import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

export default function Home() {
  const {data:teema} = useFetch('https://fakestoreapi.com/products')

  let Pro = () => {
    return (
      <div>
        {teema.map((blow)=>(
          <div>
            <img src={blow.image} alt={blow.title} width={'6%'} />
            <h3>{blow.title}</h3>
            <h3>{blow.price}</h3>
            <h3>{blow.description}</h3>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
         {teema && <Pro blow={teema}/>}
    </div>
  )
}








//   import React from 'react'


// import useFetch from './useFetch'

// export default function Home() {
//   const {data:sheriff} = useFetch('https://fakestoreapi.com/products?limit=5')

//     let Product = ({j}) => {
//       return (
//         <div>
//           {sheriff.map((boom)=>(
//             <div>
//             <h4>{boom.title}</h4>
//            <img src={boom.image} alt="" />
//             </div>
//           ))}
//         </div>
//       )
//     }
//   return (
//     <div>
//         {sheriff && <Product boom={sheriff}/>}
//     </div>
//   )
// }



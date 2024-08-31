import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
const About = () => {
  const {hi} = useParams()
  const {data:mariam} = useFetch('https://fakestoreapi.com/products?limit=5' + hi)

  let Pro = () => {
    return (
      <div>
        {mariam.map((bb)=> (
          <div key={bb.id}>
            <img src={bb.image} alt="" width={'4%'} />
            <h6>{bb.title}</h6>
            <h5>{bb.price}</h5>
          </div>
        ))}
      </div>
    )
  }
  return ( 
      <div>
        {mariam && <Pro bb={mariam}/>}
      </div>
   );
}
 
export default About;


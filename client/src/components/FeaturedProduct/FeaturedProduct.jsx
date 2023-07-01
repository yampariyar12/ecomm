import React from 'react';
import "./FeaturedProduct.scss";
import Card from '../Card/Card.jsx';
import useFetch from '../../hooks/useFetch';

const FeaturedProduct = ({type}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );


  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     try {
  //       const res = await axios.get(process.env.REACT_APP_API_URL+ `/products?populate=*&[filters][type][$eq]=${type}`,{
  //         headers: {
  //           Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  //         },
  //       })
  //       setData(res.data.data)
  //       console.log(res)
        
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // },[]);


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProduct;


// {data.map(item=>(
//   <Card item={item} key={item.id}/>
// ))}
import List from "../../components/List/List";
import React, { useState } from "react";
import "./Products.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  //http://localhost:1337/api/products?populate=*&[filters][categories][id]=1
  //http://localhost:1337/api/products?populate=*&[filters][categories][id]=3


  const handleChange= (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(data);

  // console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(
            <div className="inputItem" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}

        </div>
        {/* <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div> */}
        {/* <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (lowest first)</label>
          </div>
        </div> */}
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/12301369/pexels-photo-12301369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;


// <div className="inputItem">
// <input type="checkbox" id="2" value={1} />
// <label htmlFor="1">Skirts</label>
// </div>
// <div className="inputItem">
// <input type="checkbox" id="3" value={1} />
// <label htmlFor="1">Coats</label>
// </div>


{/* <div className="inputItem">
<input type="checkbox" id="1" value={1} />
<label htmlFor="1">Shoes</label>
</div> */}
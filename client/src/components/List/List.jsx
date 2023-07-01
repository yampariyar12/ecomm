import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({subCats, maxPrice,sort,catId}) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/17133423/pexels-photo-17133423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "saree",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Coat",
  //     isNew: true,
  //     oldPrice: 13,
  //     price: 11,
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     title: "Shoes",
  //     isNew: true,
  //     oldPrice: 20,
  //     price: 18,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Skirt",
  //     isNew: false,
  //     oldPrice: 17,
  //     price: 15,
  //   },
  // ];

  //some error in the code below as it is only retruning one item instead of two

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //   item => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );


  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}`
  // );

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}`
  // );

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );


  return (
    <div>
      <div className="list">
        {loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default List;



// {data?.map(item=>(<Card item={item} key={item.id}/> ))}

// const { data, loading, error } = useFetch(
//   `/products?populate=*&[filters][categories][id]=${catId}`
// );
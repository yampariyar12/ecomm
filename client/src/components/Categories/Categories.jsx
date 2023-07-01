import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/12707148/pexels-photo-12707148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <button>
              <Link className="Link" to="/products/1">
                Sale
              </Link>
            </button>
          </div>
          <div className="row">
            {" "}
            <img
              src="https://images.pexels.com/photos/3954166/pexels-photo-3954166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <button>
              <Link className="Link" to="/products/1">
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
              src="https://images.pexels.com/photos/7176445/pexels-photo-7176445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <button>
              <Link className="Link" to="/products/1">
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src="https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <button>
                  <Link className="Link" to="/products/1">
                    Men
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <button>
                  <Link className="Link" to="/products/1">
                    Accessories
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {" "}
            <img
              src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <button>
              <Link className="Link" to="/products/1">
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

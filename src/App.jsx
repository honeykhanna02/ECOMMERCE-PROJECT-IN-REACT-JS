import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Products from "./components/Products";
import "./App.css";

const App = () => {
  const getUsers = () => {
    fetch("https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e")
      .then((response) => response.json())
      .then((data) => data.products)
      .then((data) => {
        setProducts(data);
      });
  };
  const [products, setProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("");

  var genderArr = [];
  products.forEach((elem) => {
    genderArr.push(elem.gender);
  });
  genderArr = new Set(genderArr);
  var genFinal = [];
  for (let item of genderArr) {
    genFinal.push(item);
    genFinal.sort();
  }

  var brandArr = [];
  products.forEach((elem) => {
    brandArr.push(elem.brand);
  });
  brandArr = new Set(brandArr);
  var brandFinal = [];
  for (let item of brandArr) {
    brandFinal.push(item);
    brandFinal.sort();
  }

  var catArr = [];
  products.forEach((elem) => {
    catArr.push(elem.category);
  });
  catArr = new Set(catArr);
  var catFinal = [];
  for (let item of catArr) {
    catFinal.push(item);
    catFinal.sort();
  }

  useEffect(() => {
    getUsers();
  }, []);

  const genderFilter = (event) => {
    setSelectedGender(event.target.value);
  };

  const brandFilter = (event) => {
    if (event.target.checked) {
      setSelectedBrand([...selectedBrand, event.target.value]);
    } else {
      setSelectedBrand(
        selectedBrand.filter((elem) => elem !== event.target.value)
      );
    }
  };

  const catFilter = (event) => {
    if (event.target.checked) {
      setSelectedCategory([...selectedCategory, event.target.value]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((elem) => elem !== event.target.value)
      );
    }
  };

  const searchFilter = (event) => {
    setSelectedSearch(event.target.value);
  };

  const filteredData = () => {
    if (
      selectedGender.length === 0 &&
      selectedBrand.length === 0 &&
      selectedCategory.length === 0 &&
      selectedSearch === ""
    ) {
      return products;
    } else if (selectedGender.length !== 0) {
      if (
        selectedGender.length !== 0 &&
        selectedBrand.length !== 0 &&
        selectedCategory.length !== 0
      ) {
        return products
          .filter((product) => selectedGender.includes(product.gender))
          .filter((product) => selectedBrand.includes(product.brand))
          .filter((product) => selectedCategory.includes(product.category));
      } else if (selectedGender.length !== 0 && selectedBrand.length !== 0) {
        return products
          .filter((product) => selectedGender.includes(product.gender))
          .filter((product) => selectedBrand.includes(product.brand));
      } else if (selectedCategory.length !== 0 && selectedGender.length !== 0) {
        return products
          .filter((product) => selectedGender.includes(product.gender))
          .filter((product) => selectedCategory.includes(product.category));
      }
      return products.filter((product) =>
        selectedGender.includes(product.gender)
      );
    } else if (selectedBrand.length !== 0) {
      if (selectedBrand.length !== 0 && selectedCategory.length !== 0) {
        return products
          .filter((product) => selectedBrand.includes(product.brand))
          .filter((product) => selectedCategory.includes(product.category));
      }
      return products.filter((product) =>
        selectedBrand.includes(product.brand)
      );
    } else if (selectedCategory.length !== 0) {
      return products.filter((product) =>
        selectedCategory.includes(product.category)
      );
    } else if (selectedSearch !== "") {
      return products.filter((product) => product.product.toLowerCase().includes(selectedSearch.toLowerCase()))
    }
  };

  return (
    <>
      <Navbar onChange={searchFilter} />
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-md-3 border px-4">
            <div className="col-md-12 border-bottom">
              <h6 className="p-2 text-uppercase font-weight-bold">Gender</h6>
              {genFinal.map((val) => {
                return <Radio value={val} label={val} onClick={genderFilter} />;
              })}
            </div>
            <div className="col-md-12 border-bottom">
              <h6 className="p-2 text-uppercase font-weight-bold">Brand</h6>
              {brandFinal.map((val) => {
                return (
                  <Checkbox value={val} label={val} onClick={brandFilter} />
                );
              })}
            </div>
            <div className="col-md-12 border-bottom">
              <h6 className="p-2 text-uppercase font-weight-bold">Category</h6>
              {catFinal.map((val) => {
                return <Checkbox value={val} label={val} onClick={catFilter} />;
              })}
            </div>
          </div>

          <div className="col-md-9 border">
            {filteredData().map((val) => {
              return (
                <Products
                  img={val.searchImage}
                  product={val.product}
                  brand={val.brand}
                  sizes={val.sizes}
                  price={val.price}
                  mrp={val.mrp}
                  dis={val.discountDisplayLabel}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";

const EditProduct = () => {
  const { productDetails, getProductsDetails, editProduct } =
    useContext(productContext);

  let { id } = useParams();

  // const navigate = useNavigate();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const [inpValues, setInpValues] = useState(productDetails);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editProduct(id, inpValues);
    // navigate("/list");
  };

  return (
    <form onSubmit={(e) => handleSave(e)}>
      <TextField
        id="outlined-basic"
        label="Название"
        variant="outlined"
        value={inpValues.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Тип"
        variant="outlined"
        value={inpValues.type}
        name="type"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        value={inpValues.description}
        name="description"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        value={inpValues.price}
        name="price"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 1"
        variant="outlined"
        value={inpValues.img1}
        name="img1"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 2"
        variant="outlined"
        value={inpValues.img2}
        name="img2"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 3"
        variant="outlined"
        value={inpValues.img3}
        name="img3"
        onChange={(e) => handleChange(e)}
      />

      <Button type="submit" variant="contained">
        Edit
      </Button>
    </form>
  );
};

export default EditProduct;

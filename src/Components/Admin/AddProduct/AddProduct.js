import { Button, TextField } from "@mui/material";
import "./AddProduct.css";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initObj = {
  title: "",
  type: "",
  description: "",
  price: 0,
  img1: "",
  img2: "",
  img3: "",
};

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [inpValues, setInpValues] = useState(initObj);

  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    console.log(obj);
  };

  const clearInput = () => {
    setInpValues(initObj);
  };

  const handleSave = (e) => {
    if (
      inpValues.title.trim() === "" ||
      inpValues.type.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.price.toString().trim() === "" ||
      inpValues.img1.trim() === "" ||
      inpValues.img2.trim() === "" ||
      inpValues.img3.trim() === ""
    ) {
      alertToastify();
      return;
    }
    e.preventDefault();
    addProduct(inpValues);
    clearInput();
  };

  return (
    <form className="inp" onSubmit={(e) => handleSave(e)}>
      <div className="inputs">
        <div>
          <TextField
            id="outlined-basic"
            label="Название"
            variant="outlined"
            value={inpValues.title}
            name="title"
            onChange={(e) => handleChange(e)}
            className="inp1"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Тип"
            variant="outlined"
            value={inpValues.type}
            name="type"
            onChange={(e) => handleChange(e)}
            className="inp2"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            value={inpValues.description}
            name="description"
            onChange={(e) => handleChange(e)}
            className="inp3"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            type="number"
            label="Цена"
            variant="outlined"
            value={inpValues.price}
            name="price"
            onChange={(e) => handleChange(e)}
            className="inp4"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Изображение 1"
            variant="outlined"
            value={inpValues.img1}
            name="img1"
            onChange={(e) => handleChange(e)}
            className="inp5"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Изображение 2"
            variant="outlined"
            value={inpValues.img2}
            name="img2"
            onChange={(e) => handleChange(e)}
            className="inp6"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Изображение 3"
            variant="outlined"
            value={inpValues.img3}
            name="img3"
            onChange={(e) => handleChange(e)}
            className="inp7"
          />
        </div>
        <div>
          <Button
            onClick={handleSave}
            type="button"
            variant="contained"
            className="btnSave"
          >
            Save
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </form>
  );
};

export default AddProduct;

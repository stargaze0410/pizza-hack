import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../context/CartContext";
import "./ProductsList.css";
import ReactPaginate from "react-paginate";

const ProductsList = () => {
  const { getProducts, products, deleteProduct } = useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения.
  //   https://tokmakov.msk.ru/blog/item/678#:~:text=useSearchParams,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%8D%D1%82%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.

  // console.log(...searchParams);

  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    // console.log("params With Type");
    return {
      type: type,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    // console.log("params No Type");
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  // paginate

  const [pageNumber, setPageNumber] = useState(0);
  const productsLimit = 6;
  const productVisited = pageNumber * productsLimit;
  const pageCount = Math.ceil(products.length / productsLimit);
  let sliceTwoIndex = productVisited + productsLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="main_container">
      <div className="filter">
        <Filter type={type} setType={setType} />
      </div>
      <div className="container">
        {products
          ? products.slice(productVisited, sliceTwoIndex).map((item) => (
              <Card
                key={item.id}
                className="card"
                sx={{
                  borderRadius: "10px",
                  width: "470px",
                  height: "400px ",
                  marginBottom: "50px",
                }}
              >
                <CardMedia
                  sx={{
                    height: "150",
                    alignItems: "center",
                    marginBottom: "auto",
                  }}
                  component="img"
                  alt={item.title}
                  height="200"
                  image={item.img1}
                />
                <CardContent sx={{ marginLeft: "20px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    height="25px"
                  >
                    {item.description}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "20px",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <NavLink to={`/edit/${item.id}`}>
                    <Button
                      className="btn1"
                      justifyContent="end"
                      size="small"
                      variant="outlined"
                    >
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    sx={{
                      marginRight: "20px",
                    }}
                    onClick={() => deleteProduct(item.id)}
                    className="btn"
                    size="small"
                    variant="outlined"
                  >
                    Delete <RestoreFromTrashIcon />
                  </Button>
                  <NavLink to={`/details/${item.id}`}>
                    <Button className="btn" size="small" variant="outlined">
                      Details
                    </Button>
                  </NavLink>

                  <Button onClick={(e) => addProductToCart(item)}>
                    <AddShoppingCartIcon />
                  </Button>
                </CardActions>
              </Card>
            ))
          : null}
        <ReactPaginate
          previousLabel={"Назад"}
          nextLabel={"Вперед"}
          pageCount={pageCount}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};

export default ProductsList;

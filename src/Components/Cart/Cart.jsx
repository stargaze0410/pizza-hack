import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <table
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <thead>
          <tr style={{ display: "flex" }}>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма продукта</th>
          </tr>
        </thead>
        <tbody>
          {cart.products
            ? cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img width={50} src={elem.item.img1} alt="phone" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button onClick={() => deleteCartProduct(elem.item.id)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <h4
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Общая сумма: {cart.totalPrice}
        <button>Заказать</button>
      </h4>
    </div>
  );
};

export default Cart;

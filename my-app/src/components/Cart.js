import React, { useEffect, useState } from "react";
import styles from '../CSS/Cart.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [menu, setMenu] = useState({});
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState({ 
    summary: 0,
    items : "",
    price : 0,
    quantity : 0
  });

  useEffect(() => {
    axios.get('http://localhost:5000/user', {
      withCredentials: "include"
    })
      .then(res => {
        const getEmail = res.data.email;
        if (getEmail === "") return Navigate('/login');
        setEmail(getEmail);
        axios.get('http://localhost:5000/cart', {
          withCredentials: "include"
        })
          .then(res => {
            setMenu(res.data);
            initialize(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [Navigate]);

  function initialize(menu) {
    let tempCart = {};
    let tempOpen = {};
    Object.keys(menu).forEach((type) => {
      tempCart[type] = {};
      tempOpen[type] = 0;
    });
    setCart(tempCart);
    setOpen(tempOpen);
  }

  const toggleDropdown = (category) => {
    setOpen(prevOpen => ({
      ...prevOpen,
      [category]: !prevOpen[category]
    }));
  };

  const incrementItem = (category, item) => {
    setCart(prevCart => ({
      ...prevCart,
      [category]: {
        ...prevCart[category],
        [item]: (prevCart[category][item] || 0) + 1
      }
    }));
  };

  const decrementItem = (category, item) => {
    setCart(prevCart => {
      const currentQuantity = prevCart[category][item] || 0;
      const newQuantity = Math.max(currentQuantity - 1, 0);
      return {
        ...prevCart,
        [category]: {
          ...prevCart[category],
          [item]: newQuantity
        }
      };
    });
  };

  const calculateTotalItems = () => {
    let sum = 0;
    let items = "";
    let price = 0;
    let temp = " ";
    Object.keys(cart).forEach(category => {
      Object.entries(cart[category]).forEach(([item,quantity]) => {
        sum += quantity;
        items += temp + item + ` x ${quantity}`;
        const itemDetails = menu[category]?.find(i => i.item_name === item);
        const itemPrice = itemDetails ? itemDetails.item_price : 0;
        price += quantity * itemPrice;
        temp = ", ";
      });
    });
    open["quantity"] = sum;
    open["price"] = price;
    open["items"] = items;
    return sum;
  };

  const reset = () => {
    initialize(menu);
  }

  const placeorder = () => {
    const price = open.price;
    const quantity = open.quantity;
    const items = open.items;
    let date = new Date();
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    const indianDate = date.toISOString().slice(0, 19).replace('T', ' ');

console.log(indianDate); 
    axios.post('http://localhost:5000/order',{email,
      items,
      price,
      date : indianDate
    })
    .then(res => {
      return Navigate('/order',{state:{
        id : res.data.id
      }});
    })
    .catch(err => console.log(err));
  }

  // Render loading state if menu is not loaded yet
  if (!menu || Object.keys(menu).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.menuContainer}>
      {Object.keys(menu).map((category) => (
        <div key={category} className={styles.dropdown}>
          <button
            onClick={() => toggleDropdown(category)}
            className={styles.dropdownBtn}
          >
            {category}
          </button>
          <div
            className={`${styles.dropdownMenu} ${open[category] ? styles.showDropdown : styles.hideDropdown}`}
          >
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {menu[category]?.map((item, index) => (
                  <tr key={item.item_name}>
                    <td>{index + 1}</td>
                    <td>{item.item_name}</td>
                    <td>${item.item_price}</td>
                    <td>{item.item_status ? "Available" : "Not Available"}</td>
                    <td>
                      <div className={styles.actionGroup}>
                        <button
                          className={styles.removeBtn}
                          onClick={() => decrementItem(category, item.item_name)}
                        >
                          -
                        </button>
                        <span className={styles.quantity}>
                          {cart[category]?.[item.item_name] || 0}
                        </span>
                        <button
                          className={styles.addBtn}
                          onClick={() => incrementItem(category, item.item_name)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {<div className={styles.summaryCard}>
        <button
          onClick={() => toggleDropdown("summary")}
          className={styles.summaryToggleBtn}
        >
          {open.summary
            ? `Cart Summary - ${calculateTotalItems()} items`
            : `Total: ${calculateTotalItems()} items, $${open["price"]}`}
        </button>
        <div
          className={`${styles.summaryDropdown} ${open.summary ? styles.showDropdown : styles.hideDropdown}`}
        >
          <table className={styles.summaryTable}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cart).map((category) => (
                Object.keys(cart[category]).map((item) => {
                  const menuItem = menu[category].find(i => i.item_name === item);
                  return (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{cart[category][item]}</td>
                      <td>
                        ${cart[category][item] * (menuItem ? menuItem.item_price : 0)}
                      </td>
                    </tr>
                  );
                })
              ))}
            </tbody>
          </table>
          <div className={styles.summaryTotal}>
            <strong>Total: ${open["price"]}</strong>
          </div>
        </div>
      </div>
      }
      <div className={styles.buttonContainer}>
        <button className={styles.resetBtn} onClick={reset}>
          Reset
        </button>
        <button  className={styles.placeOrderBtn} onClick={placeorder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import styles from '../CSS/Cart.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [menu, setMenu] = useState({});
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState({ summary: 0 });

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
    let tempOpen = { summary: 0 };
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
    Object.values(cart).forEach(categoryItems => {
      Object.values(categoryItems).forEach(quantity => {
        sum += quantity;
      });
    });
    return sum;
  };

  const calculateTotalPrice = () => {
    let price = 0;
    Object.keys(cart).forEach((category) => {
      Object.keys(cart[category]).forEach((item) => {
        const itemDetails = menu[category]?.find(i => i.item_name === item);
        const itemPrice = itemDetails ? itemDetails.item_price : 0;
        price += cart[category][item] * itemPrice;
      });
    });
    return price;
  };

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
                    <td>${(item.item_price || 0).toFixed(2)}</td>
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
            : `Total: ${calculateTotalItems()} items, $${calculateTotalPrice()}`}
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
            <strong>Total: ${calculateTotalPrice()}</strong>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;

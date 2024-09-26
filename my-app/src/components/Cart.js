import React, { useEffect, useState } from "react";
import styles from '../CSS/Cart.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  let Navigate = useNavigate();
  var email;
  useEffect(() => {
    axios.get('http://localhost:5000/user',{
      withCredentials: true
    })
    .then(res => {
      email = res.data.email;
      if(email === "")  return Navigate('/login');
    })
    .catch(err => console.log(err));
  },[Navigate]);
  const [cart, setCart] = useState({
    fastFood: { burger: 0, pizza: 0, fries: 0 },
    beverage: { coke: 0, juice: 0, water: 0 },
    dishes: { pasta: 0, rice: 0, curry: 0 },
    southIndian: { dosa: 0, idli: 0, vada: 0 }
  });

  const [isOpen, setIsOpen] = useState({
    fastFood: false,
    beverage: false,
    dishes: false,
    southIndian: false,
    summary: false // New for the summary dropdown
  });

  const menuItems = {
    fastFood: [
      { id: 1, name: "Burger", price: 5.99, description: "Juicy beef patty with fresh vegetables" },
      { id: 2, name: "Pizza", price: 8.99, description: "Classic Margherita with mozzarella and basil" },
      { id: 3, name: "Fries", price: 2.99, description: "Crispy golden fries with seasoning" }
    ],
    beverage: [
      { id: 1, name: "Coke", price: 1.99, description: "Refreshing cola drink" },
      { id: 2, name: "Juice", price: 2.49, description: "Freshly squeezed orange juice" },
      { id: 3, name: "Water", price: 0.99, description: "Pure mineral water" }
    ],
    dishes: [
      { id: 1, name: "Pasta", price: 7.99, description: "Spaghetti with homemade tomato sauce" },
      { id: 2, name: "Rice", price: 3.99, description: "Steamed Basmati rice" },
      { id: 3, name: "Curry", price: 6.99, description: "Spicy vegetable curry" }
    ],
    southIndian: [
      { id: 1, name: "Dosa", price: 4.99, description: "Crispy rice crepe with potato filling" },
      { id: 2, name: "Idli", price: 3.99, description: "Steamed rice cakes with chutney" },
      { id: 3, name: "Vada", price: 2.99, description: "Savory lentil donuts" }
    ]
  };

  const toggleDropdown = (menu) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const incrementItem = (category, item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [category]: {
        ...prevCart[category],
        [item]: prevCart[category][item] + 1,
      },
    }));
  };

  const decrementItem = (category, item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [category]: {
        ...prevCart[category],
        [item]: Math.max(prevCart[category][item] - 1, 0),
      },
    }));
  };

  const calculateTotalItems = () => {
    return Object.values(cart).reduce((total, category) => {
      return total + Object.values(category).reduce((sum, count) => sum + count, 0);
    }, 0);
  };

  const calculateTotalPrice = () => {
    return Object.entries(cart).reduce((total, [category, items]) => {
      const menuCategory = menuItems[category];
      return total + Object.entries(items).reduce((sum, [item, count]) => {
        const menuItem = menuCategory.find((i) => i.name.toLowerCase() === item);
        return sum + menuItem.price * count;
      }, 0);
    }, 0).toFixed(2);
  };

  const renderSummaryItems = () => {
    return Object.entries(cart).map(([category, items]) => {
      return menuItems[category]
        .filter((menuItem) => items[menuItem.name.toLowerCase()] > 0)
        .map((menuItem) => (
          <tr key={menuItem.id}>
            <td>{menuItem.name}</td>
            <td>{items[menuItem.name.toLowerCase()]}</td>
            <td>${(menuItem.price * items[menuItem.name.toLowerCase()]).toFixed(2)}</td>
          </tr>
        ));
    });
  };

  return (
    <div className={styles.menuContainer}>
      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} className={styles.dropdown}>
          <button
            onClick={() => toggleDropdown(category)}
            className={styles.dropdownBtn}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              isOpen[category] ? styles.showDropdown : styles.hideDropdown
            }`}
          >
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.description}</td>
                    <td>
                      <div className={styles.actionGroup}>
                        <button
                          className={styles.removeBtn}
                          onClick={() => decrementItem(category, item.name.toLowerCase())}
                        >
                          -
                        </button>
                        <span className={styles.quantity}>
                          {cart[category][item.name.toLowerCase()]}
                        </span>
                        <button
                          className={styles.addBtn}
                          onClick={() => incrementItem(category, item.name.toLowerCase())}
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

      {/* Summary Card */}
      <div className={styles.summaryCard}>
        <button
          onClick={() => toggleDropdown("summary")}
          className={styles.summaryToggleBtn}
        >
          {isOpen.summary
            ? `Cart Summary - ${calculateTotalItems()} items`
            : `Total: ${calculateTotalItems()} items, $${calculateTotalPrice()}`}
        </button>
        <div
          className={`${styles.summaryDropdown} ${
            isOpen.summary ? styles.showDropdown : styles.hideDropdown
          }`}
        >
          <table className={styles.summaryTable}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>{renderSummaryItems()}</tbody>
          </table>
          <div className={styles.summaryTotal}>
            <strong>Total: ${calculateTotalPrice()}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

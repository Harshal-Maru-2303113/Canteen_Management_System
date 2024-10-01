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
    items: "",
    price: 0,
    quantity: 0,
    admin : 0,
    add_category : 0,
    add_item : 0
  });
  
  useEffect(() => {
    axios.get('http://localhost:5000/user', {
      withCredentials: "include"
    })
      .then(res => {
        const getEmail = res.data.email;
        if (getEmail === "") return Navigate('/login');
        setEmail(getEmail);
        axios.get('http://localhost:5000/cart')
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
      Object.entries(cart[category]).forEach(([item, quantity]) => {
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

  const handleStatusChange = (category, name, status) => {
    axios.post('http://localhost:5000/available', {
      category,
      name,
      status
    })
      .then(res => {
        axios.get('http://localhost:5000/cart')
          .then(res => {
            setMenu(res.data);
            initialize(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  const reset = () => {
    initialize(menu);
  };

  const placeorder = () => {
    const price = open.price;
    const quantity = open.quantity;
    const items = open.items;
    let date = new Date();
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    const indianDate = date.toISOString().slice(0, 19).replace('T', ' ');
    return Navigate('/payment', {
      state: {
        email,
        items,
        price,
        date: indianDate
      }
    });
  };

  

  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);
  const [categoryError, setCategoryError] = useState("");
  const [itemError, setItemError] = useState("");

  const handleAddCategory = () => {
    if(newCategory !== ""){
      axios.post('http://localhost:5000/category',{
        category : newCategory
      })
      .then(res => {
        axios.get('http://localhost:5000/cart')
          .then(res => {
            setMenu(res.data);
            initialize(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    }
    else{
      setCategoryError("Enter a valid category");
    }
  };

  // Function to handle adding a new item
  const handleAddItem = () => {
      if(selectedCategory !== ""){
        if(newItemName !== ""){
          if(newItemPrice !== 0){
            axios.post('http://localhost:5000/item',{
              category : selectedCategory,
              name : newItemName,
              price : newItemPrice
            })
            .then(res => {
              axios.get('http://localhost:5000/cart')
                .then(res => {
                  setMenu(res.data);
                  initialize(res.data);
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
          }
          else{
            setItemError("Enter a valid price");
          }
        }
        else{
          setItemError("Enter a valid name");
        }
      }
      else{
        setItemError("Select a valid category");
      }
  };

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
                  (email === "admin@iitgoa.ac.in" || item.item_status === 1) && (
                    <tr key={item.item_name}>
                      <td>{index + 1}</td>
                      <td>{item.item_name}</td>
                      <td>₹{item.item_price}</td>
                      <td>{item.item_status ? "Available" : "Not Available"}</td>
                      {email !== "admin@iitgoa.ac.in" && (
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
                      )}
                      {email === "admin@iitgoa.ac.in" && (
                        <td>
                          <button
                            className={!item.item_status ? styles.placeOrderBtn : styles.resetBtn}
                            onClick={() => handleStatusChange(category, item.item_name, !item.item_status)}
                          >
                            {!item.item_status ? "Make Available" : "Make Not Available"}
                          </button>
                        </td>
                      )}
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {email !== "admin@iitgoa.ac.in" && (
        <>
          <div className={styles.summaryCard}>
            <button
              onClick={() => toggleDropdown("summary")}
              className={styles.summaryToggleBtn}
            >
              {open.summary
                ? `Cart Summary - ${calculateTotalItems()} items`
                : `Total: ${calculateTotalItems()} items, ₹${open["price"]}`}
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
                <strong>Total: ₹{open["price"]}</strong>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.resetBtn} onClick={reset}>
              Reset
            </button>
            <button className={styles.placeOrderBtn} onClick={placeorder}>
              Place Order
            </button>
          </div>
        </>
      )}
      {email === "admin@iitgoa.ac.in" && (
        <div className={styles.adminDropdown}>
          <button className={styles.adminToggleBtn} onClick={() => {toggleDropdown("admin")}}>
            {open.admin ? "Hide Admin Panel" : "Show Admin Panel"}
          </button>

          <div className={`${styles.adminPanel} ${open.admin ? styles.showDropdown : styles.hideDropdown}`}>
            <h3>Admin Panel</h3>

            <div className={styles.adminDropdownSection}>
              <button className={styles.adminToggleBtn} onClick={() => {toggleDropdown("add_category")}}>
                {open.add_category ? "Hide Add Category" : "Add New Category"}
              </button>
              <div className={`${styles.addCategoryPanel} ${open.add_category ? styles.showDropdown : styles.hideDropdown}`}>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory((e.target.value).trim())}
                  placeholder="New Category Name"
                />
                {categoryError && (
                  <div className={`${styles.errorMessage} ${categoryError ? styles.showError : ""}`}>
                    {categoryError}
                  </div>
                )}
                <button onClick={() => {handleAddCategory()}}>Add Category</button>
              </div>
            </div>

            <div className={styles.adminDropdownSection}>
              <button className={styles.adminToggleBtn} onClick={() => {toggleDropdown("add_item")}}>
                {open.add_item ? "Hide Add Item" : "Add New Item"}
              </button>
              <div className={`${styles.addItemPanel} ${open.add_item ? styles.showDropdown : styles.hideDropdown}`}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {Object.keys(menu).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName((e.target.value).trim())}
                  placeholder="New Item Name"
                />
                <input
                  type="number"
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(Math.abs(e.target.value))}
                  placeholder="New Item Price"
                />
                {itemError && (
                  <div className={`${styles.errorMessage} ${itemError ? styles.showError : ""}`}>
                    {itemError}
                  </div>
                )}
                <button onClick={() => {handleAddItem()}}>Add Item</button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div >
  );
};

export default Cart;

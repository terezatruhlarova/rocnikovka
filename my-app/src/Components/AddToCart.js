import React, { useState } from 'react';
import "../Styles/AddToCart.css"

function AddToCartButton() {
    const [showMessage, setShowMessage] = useState(false);

    function handleButtonClick() {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  
    return (
      <div>
        <button onClick={handleButtonClick} className='AddToCart-btn'>Add to Cart</button>
        {showMessage && (
          <div>Successfully added to cart!</div>
        )}
      </div>
    );
  }

export default AddToCartButton;
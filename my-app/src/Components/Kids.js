import React from 'react'
import "../Styles/Kids.css";
import KidsTop1 from "../img/kid-top_6.PNG";
import KidsTop2 from "../img/kid-top_7.PNG";
import KidsTop3 from "../img/kid-top_8.PNG";
import KidsTop4 from "../img/kid-top_9.PNG";
import KidsSet1 from "../img/kids-set_1.PNG";
import KidsSet2 from "../img/kids-set_2.PNG";
import KidsSet3 from "../img/kids-set_3.PNG";
import KidsSet4 from "../img/kids-set_4.PNG";

import AddToCartButton from "./AddToCart";

function Kids(){
  return(
      <div>
          <div className="kids-page"> 
           <div className="kids-title">
              <h2>Boys</h2>
            <h4>Tops</h4>
           </div> 
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop1} width="310" height="390" itemID='1' alt="Dream maker red t-shirt"/>
              </div>
             <div className="women-tops-info">
              <p>California T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop2} width="310" height="390" itemID='2'alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop3} width="310" height="390" itemID='3' alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop4} width="310" height="390" itemID='4' alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kids-title">
              <h4>Sets</h4>
           </div> 
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsSet1} width="310" height="390" itemID='5' alt=""/>
              </div>
             <div className="kid-sets-info">
              <p>California T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsSet2} width="310" height="390" itemID='6' alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsSet3} width="310" height="390" itemID='7' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsSet4} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
         </div>
      </div>
  );
}

export default Kids;
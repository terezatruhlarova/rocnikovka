import React from 'react'
import "../Styles/Kids.css";
import KidsTop1 from "../img/kids-tops_1.PNG";
import KidsTop2 from "../img/kids-tops_2.PNG";
import KidsTop3 from "../img/kids-tops_3.PNG";
import KidsTop4 from "../img/kids-tops_4.PNG";
import KidsTop5 from "../img/kids-tops_5.PNG";
import KidsTop6 from "../img/kids-tops_6.PNG";
import KidsTop7 from "../img/kids-tops_7.PNG";
import KidsTop8 from "../img/kids-tops_8.PNG";
import KidsSet1 from "../img/kids-set_1.PNG";
import KidsSet2 from "../img/kids-set_2.PNG";
import KidsSet3 from "../img/kids-set_3.PNG";
import KidsSet4 from "../img/kids-set_4.PNG";
import KidsBottoms1 from "../img/kids-bottoms_1.PNG";
import KidsBottoms2 from "../img/kids-bottoms_2.PNG";
import KidsBottoms3 from "../img/kids-bottoms_3.PNG";
import KidsBottoms4 from "../img/kids-bottoms_4.PNG";
import KidsBottoms5 from "../img/kids-bottoms_5.PNG";
import KidsBottoms6 from "../img/kids-bottoms_6.PNG";
import KidsBottoms7 from "../img/kids-bottoms_7.PNG";
import KidsBottoms8 from "../img/kids-bottoms_8.PNG";
import KidsDress1 from "../img/kids-set_1.PNG";
import KidsDress2 from "../img/kids-set_2.PNG";
import KidsDress3 from "../img/kids-set_3.PNG";
import KidsDress4 from "../img/kids-set_4.PNG";

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
           <div className="kids-title">
              <h4>Bottoms</h4>
           </div> 
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms1} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms2} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms3} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms4} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kids-title">
              <h2>Girls</h2>
            <h4>Tops</h4>
           </div> 
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop5} width="310" height="390" itemID='1' alt="Dream maker red t-shirt"/>
              </div>
             <div className="women-tops-info">
              <p>California T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop6} width="310" height="390" itemID='2'alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop7} width="310" height="390" itemID='3' alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-tops-items">
           <div className="kid-tops-photos">
              <img src={KidsTop8} width="310" height="390" itemID='4' alt="" />
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
              <img src={KidsDress1} width="310" height="390" itemID='5' alt=""/>
              </div>
             <div className="kid-sets-info">
              <p>California T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsDress2} width="310" height="390" itemID='6' alt="" />
              </div>
             <div className="kid-tops-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsDress3} width="310" height="390" itemID='7' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsDress4} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kids-title">
              <h4>Bottoms</h4>
           </div> 
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms5} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms6} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms7} width="310" height="390" itemID='8' alt="" />
              </div>
             <div className="kid-sets-info">
              <p>Los Angeles T-shirt</p>
              <AddToCartButton/>
             </div>
           </div>
           <div className="kid-sets-items">
           <div className="kid-sets-photos">
              <img src={KidsBottoms8} width="310" height="390" itemID='8' alt="" />
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
import React from "react";
import "../Styles/Women.css"
import WomanTop1 from "../img/women-top_1.PNG";
import WomanTop2 from "../img/women-top_2.PNG";
import WomanTop3 from "../img/women-top_3.PNG";
import WomanTop4 from "../img/women-top_4.PNG";
import WomanBottom1 from "../img/women-bottoms_1.PNG";
import WomanBottom2 from "../img/women-bottoms_2.PNG";
import WomanBottom3 from "../img/women-bottoms_3.PNG";
import WomanBottom4 from "../img/women-bottoms_4.PNG";
import WomanShoes1 from "../img/women-shoes_1.PNG";
import WomanShoes2 from "../img/women-shoes_2.PNG";
import WomanShoes3 from "../img/women-shoes_3.PNG";
import WomanShoes4 from "../img/women-shoes_4.PNG";
import AddToCartButton from "./AddToCart";

 function Women(){
    return(
        <div>
            <div className="women-page"> 
             <div className="women-title">
                <h4>T-shirts/Tops</h4>
             </div> 
             <div className="women-tops-items">
             <div className="women-tops-photos">
                <img src={WomanTop1} width="310" height="390" alt=""/>
                </div>
               <div className="women-tops-info">
                <p>California T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-tops-items">
             <div className="women-tops-photos">
                <img src={WomanTop2} width="310" height="390" alt="" />
                </div>
               <div className="women-tops-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-tops-items">
             <div className="women-tops-photos">
                <img src={WomanTop3} width="310" height="390" alt="" />
                </div>
               <div className="women-tops-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-tops-items">
             <div className="women-tops-photos">
                <img src={WomanTop4} width="310" height="390" alt="" />
                </div>
               <div className="women-tops-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-title">
                <h4>Bottoms</h4>
             </div> 
             <div className="women-bottoms-items">
             <div className="women-bottoms-photos">
                <img src={WomanBottom1} width="310" height="390" alt=""/>
                </div>
               <div className="women-bottoms-info">
                <p>California T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-bottoms-items">
             <div className="women-bottoms-photos">
                <img src={WomanBottom2} width="310" height="390" alt="" />
                </div>
               <div className="women-bottoms-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-bottoms-items">
             <div className="women-bottoms-photos">
                <img src={WomanBottom3} width="310" height="390" alt="" />
                </div>
               <div className="women-bottoms-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-bottoms-items">
             <div className="women-bottoms-photos">
                <img src={WomanBottom4} width="310" height="390" alt="" />
                </div>
               <div className="women-bottoms-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-title">
                <h4>Shoes</h4>
             </div> 
             <div className="women-shoes-items">
             <div className="women-shoes-photos">
                <img src={WomanShoes1} width="310" height="390" alt=""/>
                </div>
               <div className="women-shoes-info">
                <p>California T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="women-shoes-items">
             <div className="women-shoes-photos">
                <img src={WomanShoes2} width="310" height="390" alt="" />
                </div>
               <div className="women-shoes-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
               </div>
            <div className="women-shoes-items">
               <div className="women-shoes-photos">
                <img src={WomanShoes3} width="310" height="390" alt="" />
                </div>
               <div className="women-shoes-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
            </div>
            <div className="women-shoes-items">
             <div className="women-shoes-photos">
                <img src={WomanShoes4} width="310" height="390" alt="" />
                </div>
               <div className="women-shoes-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div> 
              </div> 
           </div>
        </div>
    );
}

export default Women;
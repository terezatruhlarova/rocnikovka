import React from 'react'
import "../Styles/Men.css"
import MenTop1 from "../img/men-top_1.PNG";
import MenTop2 from "../img/men-top_2.PNG";
import MenTop3 from "../img/men-top_3.PNG";
import MenTop4 from "../img/men-top_4.PNG";
import MenBottom1 from "../img/men-bottoms_1.PNG";
import MenBottom2 from "../img/men-bottoms_2.PNG";
import MenBottom3 from "../img/men-bottoms_3.PNG";
import MenBottom4 from "../img/men-bottoms_4.PNG";
import MenShoes1 from "../img/men-shoes_1.PNG";
import MenShoes2 from "../img/men-shoes_2.PNG";
import MenShoes3 from "../img/men-shoes_3.PNG";
import MenShoes4 from "../img/men-shoes_4.PNG";
import AddToCartButton from "./AddToCart";

const Men = () => {
  return (
    <div>
            <div className="men-page"> 
             <div className="men-title">
                <h4>T-shirts</h4>
             </div> 
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop1} width="310" height="390" alt=""/>
                </div>
               <div className="men-tops-info">
                <p>California T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop2} width="310" height="390" alt="" />
                </div>
               <div className="men-tops-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop3} width="310" height="390" alt="" />
                </div>
               <div className="men-tops-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop4} width="310" height="390" alt="" />
                </div>
               <div className="men-tops-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-title">
                <h4>Bottoms</h4>
             </div> 
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom1} width="310" height="390" alt=""/>
                </div>
               <div className="men-bottoms-info">
                <p>California T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom2} width="310" height="390" alt="" />
                </div>
               <div className="men-bottoms-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom3} width="310" height="390" alt="" />
                </div>
               <div className="men-bottoms-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom4} width="310" height="390" alt="" />
                </div>
               <div className="men-bottoms-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-title">
                <h4>Shoes</h4>
             </div> 
             <div className="men-shoes-items">
             <div className="men-shoes-photos">
                <img src={MenShoes1} width="310" height="390" alt=""/>
                </div>
               <div className="men-shoes-info">
                <p>California T-shirt</p>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-shoes-items">
             <div className="men-shoes-photos">
                <img src={MenShoes2} width="310" height="390" alt="" />
                </div>
               <div className="men-shoes-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
               </div>
            <div className="men-shoes-items">
               <div className="men-shoes-photos">
                <img src={MenShoes3} width="310" height="390" alt="" />
                </div>
               <div className="men-shoes-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div>
            </div>
            <div className="men-shoes-items">
             <div className="men-shoes-photos">
                <img src={MenShoes4} width="310" height="390" alt="" />
                </div>
               <div className="men-shoes-info">
                <p>Los Angeles T-shirt</p>
                <AddToCartButton/>
               </div> 
              </div> 
           </div>
        </div>
  )
}

export default Men
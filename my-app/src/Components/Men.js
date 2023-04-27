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
             <div className='men-tops-items-content'>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop1} width="310" height="390" alt=""/>
                </div>
               <div className="men-tops-info">
               <h4>Striped and letter graphic T-shirt</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 22$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop2} width="310" height="390" alt="" />
                </div>
               <div className="men-tops-info">
               <h4>Solid Button Up Shirt</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 20$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop3} width="310" height="390" alt="" />
                </div>
               <div className="men-tops-info">
               <h4>Cartoon t-shirt with graphic logo</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 23$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-tops-items">
             <div className="men-tops-photos">
                <img src={MenTop4} width="310" height="390" alt="" />
                </div>
               <div className="men-tops-info">
               <h4>Plaid Button Up Shirt</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 21$</h4>
                <AddToCartButton/>
               </div>
             </div>
            </div>
             <div className="men-title">
                <h4>Bottoms</h4>
             </div> 
            <div className='men-bottoms-items-content'>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom1} width="310" height="390" alt=""/>
                </div>
               <div className="men-bottoms-info">
               <h4>Multi-pocket Pants Outdoor Cargo</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 25$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom2} width="310" height="390" alt="" />
                </div>
               <div className="men-bottoms-info">
               <h4>Men Letter Patched Cargo Trousers</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 23$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom3} width="310" height="390" alt="" />
                </div>
               <div className="men-bottoms-info">
               <h4>Solid Zipper Fly Trousers</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 24$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-bottoms-items">
             <div className="men-bottoms-photos">
                <img src={MenBottom4} width="310" height="390" alt="" />
                </div>
               <div className="men-bottoms-info">
               <h4>Men's shorts with drawstring waist</h4>
                <p>Avaliable size: XS, S, M, L</p>
                <h4>prize: 26$</h4>
                <AddToCartButton/>
               </div>
             </div>
            </div>
             <div className="men-title">
                <h4>Shoes</h4>
             </div> 
            <div className='men-shoes-items-content'>
             <div className="men-shoes-items">
             <div className="men-shoes-photos">
                <img src={MenShoes1} width="310" height="390" alt=""/>
                </div>
               <div className="men-shoes-info">
               <h4>Grey Men's Sneakers</h4>
               <p>Avaliable size: 42, 43, 44, 45, 46</p>
               <h4>prize: 21$</h4>
                <AddToCartButton/>
               </div>
             </div>
             <div className="men-shoes-items">
             <div className="men-shoes-photos">
                <img src={MenShoes2} width="310" height="390" alt="" />
                </div>
               <div className="men-shoes-info">
               <h4>Black Men's Slippers</h4>
               <p>Avaliable size: 42, 43, 44, 45, 46</p>
               <h4>prize: 19$</h4>
                <AddToCartButton/>
               </div>
               </div>
            <div className="men-shoes-items">
               <div className="men-shoes-photos">
                <img src={MenShoes3} width="310" height="390" alt="" />
                </div>
               <div className="men-shoes-info">
               <h4>Formal Black Shoes</h4>
               <p>Avaliable size: 42, 43, 44, 45, 46</p>
               <h4>prize: 23$</h4>
                <AddToCartButton/>
               </div>
            </div>
            <div className="men-shoes-items">
             <div className="men-shoes-photos">
                <img src={MenShoes4} width="310" height="390" alt="" />
                </div>
               <div className="men-shoes-info">
               <h4>Orange Men's Sneakers</h4>
               <p>Avaliable size: 42, 43, 44, 45, 46</p>
               <h4>prize: 20$</h4>
                <AddToCartButton/>
                </div> 
              </div> 
            </div>
         </div>
      </div>
  )
}

export default Men
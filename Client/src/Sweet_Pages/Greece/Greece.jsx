import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./greece.css";
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapLocationDot } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
function Greece() {
    const [products, setproducts] = useState([])
    const {productid} = useParams();
    const getProductsHandler=async()=>{    
  let response= await axios.get(`http://localhost:4000/`);
  setproducts(response.data.products);
    }
  
    useEffect(() => {
      getProductsHandler();                       
    }, []);
   
    return (
  
      <>

<div >
        {
    products.length>=1 && products.map((item)=>{
     return(
        
  <div>
          <div id='welcome_to_indonesia'>
          <h3>{item.heading}</h3>
        </div>
        <div id='thailand'>
          <img src={item.image2}></img>
        </div>
  
        <div id='description_of_thailand'>
          <h2>{item.text}</h2>
          <p>{item.textparagraph}
          </p>
          
          <div id='best-selling'>
            <h3>{item.heading2}</h3>
          </div>
          <div id='spacethailand_pack'>
            <div id='packageflex'>
              <div id='imageThailand_Tour_Packages'>
                <img src={item.image2}></img>
              </div>
              <div id='TextimageThailand_Tour_Packages'>
                <p>{item.daystour}</p><br />
                <p><AiFillClockCircle /> {item.daynight}
                </p><br />
                <p><FaMapLocationDot /> {item.place}        
                    </p><br />
                <div id='view_enquire_button'>
                  <button id='viewdetails'>VIEW DETAILS</button>
                  <br />
                  <button id='enquirenow'>Enquire Now</button></div>
              </div>
            </div>
          </div>
  
  </div>
  
         
  
        </div>
        
       
     )  
    
     })
  }
  
  </div> 




{/*     
        <div id='welcome_to_indonesia'>
          <h3>{products.heading}</h3>
        </div>
        <div id='thailand'>
          <img src={products.image2}></img>
        </div>
  
        <div id='description_of_thailand'>
          <h2>{products.text}</h2>
          <p>{products.textparagraph}
          </p>
  
          <div id='best-selling'>
            <h3>{products.heading2}</h3>
          </div>
          <div id='spacethailand_pack'>
            <div id='packageflex'>
              <div id='imageThailand_Tour_Packages'>
                <img src={products.image2}></img>
              </div>
              <div id='TextimageThailand_Tour_Packages'>
                <p>{products.daystour}</p><br />
                <p><AiFillClockCircle /> {products.daynight}
                </p><br />
                <p><FaMapLocationDot /> {products.place}        
                    </p><br />
                <div id='view_enquire_button'>
                  <button id='viewdetails'>VIEW DETAILS</button>
                  <br />
                  <button id='enquirenow'>Enquire Now</button></div>
              </div>
            </div>
          </div>
  
  
         
  
        </div> */}
  
  
  
  
  
        </>
    
    
    
      )
  }

export default Greece

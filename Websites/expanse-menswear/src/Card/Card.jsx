import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import shirt1 from '../Assets/CAMICISSIMA_White_Linen_Shirt_Collar_Final__32771.jpg'

const Card = () => {

// Store the products in State
const [products] = useState([{
    name: "CAMICISSIMA Men's White Linen Shirt",
    description: ["Button front & cuffs. ",
        
        "Regular fit. ",
        "Colour: White. ",
        "Composition: 100% Italian Linen."],
    price: 200,
    size: 39,
    imgUrl: shirt1,
    }]);

    const createOrder =(product) => (data,actions)=>{

        return actions.order.create({       
            purchase_units:[
                {
                    amount:{
                        //do we need to introduce currency?
                        value: product.price,
                    },
                },
            ],
        });
    } ;

    const onApprove = (data, actions) => {
        return actions.order.capture();      
        alert(`Transaction completed by ${details.payer.name.given_name}`);

        //Send order to the backend

const order ={
  product:products.name,
  price: products.price,
  payer:details.payer,
  paymentID: details.id,
};
        try{
          const response = await axios.post('http://localhost:5000/api/orders', order);
          console.log('Order saved:', response.data);
        } catch(error){
          console.error('Error saving order:',error);
        }
      };
    
    

      return (
        <div className="card" style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <strong>Price:</strong> {product.price} {product.currency}
            </p>
            <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      );
    };
    
export default Card    
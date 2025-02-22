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
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
          // You can add backend logic here to handle the order
        });
      };
    
    

  return (
    <div>
      <PayPalScriptProvider options={{"clientId": "Your client ID"}}>
        <div style={styles.store}>
{products.map((product)=>  (
<div key={product.id} style={styles.card}>
    <img style={styles.image} src={product.imgUrl} alt={product.description} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Size: {product.size}</p>
    <p>${product.price}</p>
    <PayPalButtons 
    createOrder={createOrder(product)}
    onApprove={onApprove}
    />
</div>
))}
        </div>
      </PayPalScriptProvider>
    </div>
  )
};

const styles = {
    store: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      padding: '16px',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      textAlign: 'center',
    },
    image: {
      width: '50%',
      borderRadius: '8px',
      marginBottom: '16px',
    },
  };
  

export default Card

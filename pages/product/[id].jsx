import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'

const Product = ({pizza}) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1)
  const [extras, setExtras] = useState([]);

  const changedPrice = (number) => {
    setPrice((+number) + (+price))
  }
 
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changedPrice(difference)
  }

  const handleChange = (e, option) =>{
    const checked = e.target.checked

    if(checked) {
      changedPrice(option.price)
      setExtras((prev) => [...prev, option] )
    } else {
      changedPrice(-option.price)
      setExtras(extras.filter((extras) => extras._id !== option._id))
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit='contain' layout="fill" /> 
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <div className={styles.desc}>{pizza.desc}</div>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            {pizza.extraOptions.map((option, index) =>(
            <div className={styles.option} key={index}>
              <input
                type="checkbox"
                name={option.text}
                id={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
            ))}
          </div>

        <div className={styles.add}>
          <input type="number" onChange={(e) => setQuantity(e.target.value)} defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;


export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return{
    props: {
     pizza: res.data
    }
  }
} 
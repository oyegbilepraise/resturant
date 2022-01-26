import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = ({pizza}) => {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <div className={styles.desc}>{pizza.desc}</div>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input
                type="checkbox"
                name="double"
                id="double"
                className={styles.checkbox}
              />
              <label htmlFor="double">Double Ingredients</label>
            </div>

            <div className={styles.option}>
              <input
                type="checkbox"
                name="garlic"
                id="garlic"
                className={styles.checkbox}
              />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>

            <div className={styles.option}>
              <input
                type="checkbox"
                name="spicy"
                id="spicy"
                className={styles.checkbox}
              />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>

            <div className={styles.option}>
              <input
                type="checkbox"
                name="cheese"
                id="cheese"
                className={styles.checkbox}
              />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
          </div>
        </h3>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;


export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params}`)
  return{
    props: {
     pizza: res.data
    }
  }
}  
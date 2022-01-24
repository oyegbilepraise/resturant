import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image'

const PizzaCard = () => {
  return (
  <div className={styles.container}>
      <Image src='/img/pizza.png' width='500' height='500' />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum delectus, ex ut tempora molestias provident dolor, pariatur officia nisi esse fugiat excepturi magni molestiae accusamus optio sapiente perspiciatis porro.
      </p>
  </div>
  )
};

export default PizzaCard;

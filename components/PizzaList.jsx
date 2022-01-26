import styles from "../styles/PizzaList.module.css";
import Image from "next/image";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati
        dolorem assumenda dolorum maiores, est culpa architecto numquam possimus
        tenetur placeat optio non. Doloribus quam modi, tenetur provident
        laborum labore?
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;

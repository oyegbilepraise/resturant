import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0
  return <div className={styles.container}>
      <div className={styles.left}>
        <div  className={styles.row}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <span className={styles.id}>123456789</span>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.address}>
                Double ingredients, spicy sause
              </span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
        </div>
        <div  className={styles.row}>
          <div className={statusClass(0)}>
            <Image src='/img/paid.png' width={30} height={30} alt='' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src='/img/bake.png' width={30} height={30} alt='' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src='/img/bike.png' width={30} height={30} alt='' />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image src='/img/delivered.png' width={30} height={30} alt='' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
      <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.09
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discout:</b>$0.09
          </div>
          <div className={styles.totalTsext}>
            <b className={styles.totalTextTitle}>Discout:</b>$0.09
          </div>
          <button disabled className={styles.button}>PAID!</button>
        </div>
      </div>
  </div>;
};

export default Order;

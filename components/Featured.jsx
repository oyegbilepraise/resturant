import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
    const images = [
        '/img/pizza.png', '/img/pizza.png', '/img/pizza.png'
    ]
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }}>

            <Image src='/img/arrow.png' alt='' layout='fill' />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((image, i) => (
                        <Image src={image} key={i} alt='' layout='fill' />
                    ))}
                </div>
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }}>
                <Image src='/img/arrow,png' alt='' layout='fill' />
            </div>
        </div>
    )
}

export default Featured;
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
    const images = [
        '/img/arrow.png','/img/pizza.png','/img/'
    ]
    return (
        <div className={styles.container}>
            <Image src='/img/' alt='' layout='fill' />
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}
                    {images.map((image, i) => (
                        <Image src={image} key={i} alt='' layout='fill' />
                    ))}
                ></div>
            </div>
        </div>
    )
}

export default Featured; 

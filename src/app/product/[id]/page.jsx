import Image from "next/image";
import styles from "../../../app/page.module.scss";

const itemDetail = async ({params}) => {

  const getPosts = async () => {
    const item = await fetch(`https://dummyjson.com/product/${params.id}`)
    return item.json();
  }

  const itemData = await getPosts();

  return (
    <main className={styles.main}>
      <div className={styles.itemDetail}>
        <figure className={styles.itemDetail__img}>
          <Image src={itemData.images[0]} alt={itemData.name} width={400} height={400}/>
        </figure>
        <div className={styles.itemDetail__information}>
          <h2 className={styles.title}>{itemData.title}</h2>
          <div className={`${styles.modFlex} ${styles['modFlex--left']}`}>
            <p className={styles.category}>{itemData.category}</p>
            <p className={`${styles.status} ${itemData.availabilityStatus === 'Low Stock' ? styles['status--low'] : ''}`}>{itemData.availabilityStatus}</p>
          </div>
          <p className={styles.price}>{itemData.price} $</p>
          <p className={styles.brand}>{itemData.brand}</p>
          <p className={styles.description}>{itemData.description}</p>
          <div className={styles.tag__container}>
            {
              itemData.tags.map((tag,index)=>(
                <span key={index} className={styles.tag}>{tag}</span>
              ))
            }
          </div>
          <p className={styles.note}>
            {itemData.returnPolicy}
          </p>
        </div>
      </div>

    </main>
  )
}

export default  itemDetail
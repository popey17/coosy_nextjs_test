import styles from "../page.module.scss"
import PostItem from "./parts/PostItem";
import Image from "next/image";
import Link from "next/link";

export default async function PostList ({num}) {

    const limit = 16;
    const skip = (num - 1) * limit;
    
    
    const getPosts = async () => {
      const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
      return res.json();
    }

    const data = await getPosts();

    const total = data.total;
    const totalPage = Math.ceil(total / limit);
    

  
  return (
    <>
      <div className={styles.main__title}>
            <h2>Products</h2>
            <div className={styles.modFlex}>
              <Link 
                href={`/products/${Number(num) - 1}`} 
                className={`${styles.btn} ${num == 1 ? styles.disabled : ''}`}
              >Previous</Link>
              <Link 
                href={`/products/${Number(num) + 1}`} 
                className={`${styles.btn} ${num == totalPage ? styles.disabled : ''}`}
              >
              Next</Link>
            </div>
          </div>
      <div className={styles.postList}>
        <div className={styles.postList__inner}>
          {
            data.products.map((item,index)=>(
              <PostItem key={index}>
                <figure className={styles.postList__item__img}>
                  <Image src={item.thumbnail} alt={item.name} width={200} height={200}/>
                </figure>
                <div className={styles.postList__item__text}>
                  <p className={styles.title}>
                    {item.title}
                  </p>
                  <div className={styles.modFlex}>
                    <p className={styles.price}>
                      {item.price}$
                    </p>
                    <Link href={`/product/${item.id}`} className={styles.learnMoreBtn}>Learn More</Link>

                  </div>
                  <div className={styles.tag__container}> 
                    {
                      item.tags.map((tag,index)=>(
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))
                    }
                  </div>
                </div>
              </PostItem>
            ))
          }
        </div>
      </div>
    </>
  )
}
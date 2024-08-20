import style from "@/app/page.module.scss"
import PostItem from "./parts/PostItem";
import Image from "next/image";
import Link from "next/link";

export default async function PostList () {

    const getPosts = async () => {
      const res = await fetch(`https://dummyjson.com/products?skip=0&limit=12`)
      return res.json();
    }

    const data = await getPosts();

  
  return (
    <div className={style.postList}>
      <div className={style.postList__inner}>
        {
          data.products.map((item,index)=>(
            <PostItem key={index}>
              <figure className={style.postList__item__img}>
                <Image src={item.thumbnail} alt={item.name} width={200} height={200}/>
              </figure>
              <div className={style.postList__item__text}>
                <p className={style.title}>
                  {item.title}
                </p>
                <div className={style.modFlex}>
                  <p className={style.price}>
                    {item.price}$
                  </p>
                  <Link href={`/product/${item.id}`} className={style.learnMoreBtn}>Learn More</Link>

                </div>
                <div className={style.tag__container}> 
                  {
                    item.tags.map((tag,index)=>(
                      <span key={index} className={style.tag}>{tag}</span>
                    ))
                  }
                </div>
              </div>
            </PostItem>
          ))
        }
      </div>
    </div>
  )
}
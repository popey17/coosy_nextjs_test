import PostList from "../../components/PostList"
import styles from "../../page.module.scss"
import Link from "next/link"

const page = ({params}) => {  
  
  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <PostList num={params.num}/>
      </div>
    </main>
  )
}

export default page
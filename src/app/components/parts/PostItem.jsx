import styles from "../../page.module.scss"

const PostItem = ({children}) => {
  return (
    <div className={styles.postList__item}>
      { children }
    </div>
  )
}

export default PostItem
import style from "@/app/page.module.scss"

const PostItem = ({children}) => {
  return (
    <div className={style.postList__item}>
      { children }
    </div>
  )
}

export default PostItem
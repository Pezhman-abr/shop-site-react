import  {FaListUl} from "react-icons/fa"
import { createQueryObject } from "../helper/helper"
import styles from "./SideBar.module.css"
import { category } from "../constants/list"



function SideBar({query, setQuery}) {
        const categoryHandler = (event) => {
        const { tagName } = event.target
        const category = event.target.innerText.toLocaleLowerCase()
        setQuery((query) => createQueryObject(query , { category }))
        if(tagName !== "LI") return;
  }
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {category.map(item => <li key={item.id} className={item.type.toLocaleLowerCase() === query.category ? styles.selected : null} >{item.type}</li>)}
      </ul>
    </div>
  )
}

export default SideBar
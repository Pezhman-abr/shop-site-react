import { RotatingLines } from 'react-loader-spinner'

import styles from "./Loader.module.css"

function Loader() {
  return (
      <div className={styles.loader}>
        <RotatingLines
            height="100"
            width="100"
            strokeWidth='3'
            strokeColor='#eb4444'
            visible={true}
        />
      </div>
  )
}

export default Loader
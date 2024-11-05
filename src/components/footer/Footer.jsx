import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.maxWidth}>

      <div>
        <h6>Annette Steward</h6>
        <p>Jennie Cooper</p>
        <p>Julie Henry</p>
        <p>Johnny Murphy</p>
        <p>Gregory Mccoy</p>
        <p>Marvin Mckinney</p>
      </div>
      <div>
        <h6>Annette Steward</h6>
        <p>Jennie Cooper</p>
        <p>Julie Henry</p>
        <p>Johnny Murphy</p>
        <p>Gregory Mccoy</p>
        <p>Marvin Mckinney</p>
      </div>
      <div>
        <h6>Annette Steward</h6>
        <p>Jennie Cooper</p>
        <p>Julie Henry</p>
        <p>Johnny Murphy</p>
        <p>Gregory Mccoy</p>
        <p>Marvin Mckinney</p>
      </div>
      <div className={styles.flex}>
        <div className={styles.row}><img src="/icons/location2.svg" alt="location" /> <p>7480 Mockingbird Hill</p></div>
        <div className={styles.row}><img src="/icons/phone2.svg" alt="phone" /> (239) 555-0108</div>
        <div className={styles.imgCont}>
        <img src="/icons/twitter2.svg" alt="twitter" />
        <img src="/icons/facebook2.svg" alt="facebook" />
        <img src="/icons/linkedin2.svg" alt="linkedin" />
        </div>
      </div>
      </div>
    </footer>
  )
}
  
export default Footer 
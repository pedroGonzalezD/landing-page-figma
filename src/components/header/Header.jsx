import styles from './Header.module.scss'
import {useState, useRef, useEffect} from 'react'
import {CSSTransition} from 'react-transition-group'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const nodeRef = useRef(null)

  const toggleOpen = () =>{
    setIsOpen(prev => !prev)
  }

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 100){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <header className={`${styles.header} ${scrolled ? styles.active : ''}`}>
      <div className={styles.cont}>
        <CSSTransition
          in={isOpen}
          timeout={300}
          nodeRef={nodeRef}
          unmountOnExit
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive
          }}
        >
          <nav ref={nodeRef} className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}><a href="#home" onClick={toggleOpen}>Home</a></li>
              <li className={styles.li}><a href="#products" onClick={toggleOpen}>Product</a></li>
              <li className={styles.li}><a href="#about" onClick={toggleOpen}>About</a></li>
              <li className={styles.li}><a href="#pricing" onClick={toggleOpen}>Pricing</a></li>
              <li className={styles.li}><a href="#contact" onClick={toggleOpen}>Contact</a></li>
            </ul>
          </nav>
        </CSSTransition>
        <div className={styles.imgCont}>
          <img src="/logos/Logo2.svg" alt="Logo" />
        </div>
        <nav ref={nodeRef} className={styles.navDesktop}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li ><a href="#products" >Product</a></li>
              <li ><a href="#about" >About</a></li>
              <li ><a href="#pricing" >Pricing</a></li>
              <li ><a href="#contact" >Contact</a></li>
            </ul>
          </nav>
        <div>
            <label className={styles.hamburger}>
            <input type="checkbox"
              onChange={toggleOpen}
              checked={isOpen}
              />
            <svg viewBox="0 0 32 32">
            <path
            className={`${styles.line} ${styles.lineTopBottom}`}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className={styles.line} d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>

        <div className={styles.svgCont}>
        <img src="/icons/twitter2.svg" alt="twitter" />
        <img src="/icons/facebook2.svg" alt="facebook" />
        <img src="/icons/linkedin2.svg" alt="linkedin" />
        </div>
        
      </div>
    </header>
      <div onClick={toggleOpen} className={`${styles.overlay} ${isOpen ? styles.open : ''}`}></div>
    </>
  )
}

export default Header
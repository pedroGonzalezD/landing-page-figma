import styles from './Main.module.scss'
import {useState, useEffect} from 'react'

const Main = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.hero} id='home'></div>
      <section className={styles.home}>
        <h2>The best Products start with Figma</h2>
        <p>Most calendars are designed for teams.
          {isWideScreen ? ' Slate is designed for freelancers' : ""}
        </p>
        <button className={styles.button}>Try For Free</button>
        </section>

      <section className={styles.products} id='products'>
        <h3>Features</h3>
        <p className={styles.subTitle}>Most calendars are designed for teams. Slate is designed 
        for freelancers</p>
        {!isWideScreen && <div>
          <img src="/img/screen.svg" alt="screen" />
        </div>}
        
        <ul className={styles.ul}>
          <li>
            <img src="/icons/Vector.svg" alt="vector" />
            <h4>OpenType features variable fonts</h4>
            <p>
              Slate helps you see how 
              many more days you need 
              to work to reach your 
              financial goal.
            </p>

          </li>
          <li>
            <img src="/icons/mdi_draw.svg" alt="draw" />
            <h4>Design with real data</h4>
            <p>
              Slate helps you see how 
              many more days you need 
              to work to reach your 
              financial goal.
            </p>
          </li>
          <li>
            <img src="/icons/mdi_brush.svg" alt="brush" />
            <h4>Fastest way to 
            take action</h4>
            <p>
              Slate helps you see how 
              many more days you need 
              to work to reach your 
              financial goal.
            </p>
          </li>
        </ul>
        {isWideScreen && <div>
          <img src="/img/screen (1).svg" alt="screen" />
        </div>}
      </section>
      <section className={styles.fastest}>
        <div className={styles.fastestCont}>
        <h3>Fastest way to organize</h3>
        <p className={styles.subTitle}>Most calendars are designed for teams</p>
        <button className={styles.button}>Try For Free</button>
        </div>
        <div className={styles.fastestImg}>
          <img src="/img/screen2.svg" alt="screen" />
        </div>
      </section>


      {!isWideScreen ? <section id='about' className={styles.about}>
        <h4>At your fingertips</h4>
        <h3>Newsletter</h3>
        <p>
        Most calendars are designed for teams. 
        Slate is designed for freelancers   
        </p>
        <div>
          <img src="/img/screen3.svg" alt="screen" />
        </div>
        <h4>subscribe to our Newsletter</h4>
        <p>Available exclusively on Figmaland</p>
        <form >
          <input type="text" placeholder="Your Email"/>
          <button type='submit'>Subscribe</button>
        </form>
      </section> : <section id='about' className={styles.aboutDesktop}>
        <div >
          <img src="/img/screen3.svg" alt="screen" />
        </div>
        <div className={styles.aboutCont}>
        <h4>At your fingertips</h4>
        <h3>Lightning fast 
        prototyping </h3>
        <h4>subscribe to our Newsletter</h4>
        <p>Available exclusively on Figmaland</p>
        <form >
          <input type="text" placeholder="Your Email"/>
          <button type='submit'>Subscribe</button>
        </form>
        </div>
      </section>}


      <section className={styles.partners}>
        <h3>Partners</h3>
        <p>Most calendars are designed for teams. 
        Slate is designed for freelancers</p>
        <div className={styles.div}>
          <div><img src="/img/partner.svg" alt="Google" /></div>
          <div><img src="/img/partner3.svg" alt="Amazon" /></div>
          <div><img src="/img/partner2.svg" alt="Microsoft" /></div>
        </div>
        <button className={styles.button}>Try For Free</button>  
      </section>


      <section className={styles.testimonials}>
        <h3>Testimonials</h3>
        <div><img src="/img/Brands.svg" alt="IBM" /></div>
        <p>Most calendars are designed for teams. 
            Slate is designed for freelancers who want a 
            simple way to plan their schedule.</p>

          <div className={styles.profile}>
            <div>
            <img src="/img/avatar.svg" alt="avatar" />
            </div>
            <div className={styles.pCont}>
            <p>Organize across</p>
            <p>Ui designer</p>
            </div>
          </div>
          <button className={styles.button}>More Testimonials</button>
      </section>

      <section id='pricing' className={styles.pricing}>
        <div className={styles.cont}>

        <h3>Pricing</h3>
        <p>Most calendars are designed for teams.</p>
        <div className={styles.pricingCont}>
        <div className={styles.pricingCard}>
            <h3>Free</h3>
            <p className={styles.description}>Organize across all apps by hand</p>
            <div className={styles.price}>
              <span className={styles.amount}>0</span>
              <div className={styles.flex}>
                <span className={styles.currency}>$</span>
                <span className={styles.per}>Per Month</span>
              </div>
            </div>
            <ul className={styles.features}>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
            </ul>
            <button className={styles.button}>Order Now</button>
          </div>
          <div className={styles.pricingCard}>
            <h3>Standard</h3>
            <p className={styles.description}>Organize across all apps by hand</p>
            <div className={styles.price}>
              <span className={styles.amount}>10</span>
              <div className={styles.flex}>
                <span className={styles.currency}>$</span>
                <span className={styles.per}>Per Month</span>
              </div>
            </div>
            <ul className={styles.features}>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
            </ul>
            <button className={styles.button}>Order Now</button>
          </div>
          <div className={styles.pricingCard}>
            <h3>BUSINESS</h3>
            <p className={styles.description}>Organize across all apps by hand</p>
            <div className={styles.price}>
              <span className={styles.amount}>99</span>
              <div className={styles.flex}>
                <span className={styles.currency}>$</span>
                <span className={styles.per}>Per Month</span>
              </div>
            </div>
            <ul className={styles.features}>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
            </ul>
            <button className={styles.button}>Order Now</button>
          </div>
        </div>
        </div>
      </section>

      <section id='contact' className={styles.contact}>
        <h3>Contact Us</h3>
        <p>Most calendars are designed for teams</p>

        <div className={styles.iconCont}>
          <img src="/icons/twitter.svg" alt="twitter" />
          <img src="/icons/facebook.svg" alt="facebook" />
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </div>

        <ul className={styles.ulFlex}>
          <li>
            <div className={styles.img}>
              <img src="/icons/location.svg" alt="location" />
              </div>
              <p>
                6386 Spring St undefined Anchorage, 
                Georgia 12473 United States
              </p>
          </li>
          <li><div><img src="/icons/phone.svg" alt="phone" /></div> <p>(843) 555-0130</p></li>
          <li>
            <div><img src="/icons/mail.svg" alt="mail" /></div><p>willie.jennings@example.com</p>
          </li>
        </ul>
        <form className={styles.form}>
          <h4>Contact Us</h4>
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Your Email'/>
          <textarea name="" id="" placeholder='Your Message'></textarea>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </section>
    </main>
  )
}

export default Main
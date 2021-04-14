import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../Components/Nav'
import Image from 'next/image'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> WebDev Newz </title>
        <meta name='keywords' content='web development 
        , programming'
        />
      </Head>
     
        <div className={styles.navbar}>
            <Image src="/porschelogo.png" alt="" width="100" height="64" />
            <nav>
              <ul className={styles.ul}>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model A</a></li>
                <li><a href="#">Model XS</a></li>
              </ul>
            </nav>
            <button className={styles.contact}><span className={styles.buttonText}>CONTACT</span></button>
        </div>
        <h1 className={styles.porscheBrand}>PORSCHE</h1>
        <h5 className={styles.porscheDetails}>THE PORSCHE IN THE DETAILS</h5>
       
        <div className={styles.imageContainer}> 
             <Image src="/porscheCar.png"  width={950} height={550} layout='fixed'/>
        </div>
        
        <div className={styles.bottomData}>
          <div className={styles.leftData}>
              <h6 className={styles.bookAtest}>Book a <span className={styles.aBook}>test drive</span></h6>
              <i className="fa fa-map-marker" aria-hidden="true" style={{
                opacity : 0.5,color:'#aeb5cf'
              }} ><span className={styles.northPort}>  North Port, Florida - Miami Trail</span></i>
          </div>
          <div className={styles.rightData}>
              <h6 className={styles.details}>Details</h6>
              <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" style={{opacity : 0.5,color:'#aeb5cf'}}></i>
          </div>
        </div>
    </div>
  )
}

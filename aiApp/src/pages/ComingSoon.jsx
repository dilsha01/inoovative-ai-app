import styles from "../style";
import {  Footer, Navbar ,Coming } from "../components";
const ComingSoon = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Coming />
          <Footer />
        </div>
      </div>
    </div>
  );

  
  export default ComingSoon;
  
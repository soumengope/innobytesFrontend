import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function myUser() {
    return(
        <body>


        <div className={styles.container}>
            <div className={styles.col1}>
                <div className={styles.mob}><Image src="/Frame1.png" width={666} height={1024}></Image></div>
            </div>
            <div className={styles.col1}>
                <div className={styles.signIn_desc}>Already have an account? <a href="">Sign In</a></div>
                <div className={styles.joinUs}>Join Us!</div>
                <div className={styles.joinUs_desc}>To begin this journey, tell us what type of account you'd be opening.</div>
                <Link href="/personalInfo"><div className={styles.main_individual}>
                    <div className={styles.individual_leftDiv}>
                        <div className={styles.leftIndvidual_logoMain}><Image src="/Polygon1.svg" width={52} height={52}></Image></div>
                        <div className={styles.leftIndvidual_logoChild}><Image src="/user.svg" width={20} height={20}></Image></div>
                    </div>
                    <div className={styles.individual_centerDiv}>
                        <div className={styles.individual_header}>Individual</div>
                        <div className={styles.individual_desc}>Personal account to manage all you <br/> activities.</div>
                    </div>
                    <div className={styles.individual_rightDiv}>
                        <Image src="/arrow-right.svg" width={20} height={20}></Image>
                    </div>
                </div></Link>
                <div className={styles.main_business}>
                    <div className={styles.business_leftDiv}>
                        <div className={styles.leftBusiness_logoMain}><Image src="/Polygon2.svg" width={52} height={52}></Image></div>
                        <div className={styles.leftBusiness_logoChild}><Image src="/briefcase.svg" width={20} height={20}></Image></div>
                    </div>
                    <div className={styles.business_centerDiv}>
                        <div className={styles.business_header}>Business</div>
                        <div className={styles.business_desc}>Own or belong to a company, this is<br/> for you.</div>
                    </div>
                </div>


            </div>
        </div>  
                
              



        </body>
    )
}
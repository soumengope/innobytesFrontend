"use client"
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BankInfo(){
    const [errors,setErrors] = useState({})
    const [formData,setFormData]=useState({
        bank:'',
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
          ...formData,
          [name]:value,
        })
    }
    const formSubmit = (e)=>{
        e.preventDefault();
        let newErrors = {};
        if(formData.bank.length<=0){
            newErrors.bank="empty bank details";
        }else if(formData.bank.match(/\b\d{11}\b/)){
            newErrors.bank="ok";
        }else{
            newErrors.bank="bank must be 11 digit";
        }
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors)
            return
        }
    }
    return(

        <div className={styles.container}>
            <div className={styles.bInfo_left}>
                <div className={styles.mob}><Image src="/Frame1.png" width={666} height={1024} alt=""></Image></div>
            </div>
            <div className={styles.main_bInfo_right}>
                <div className={styles.bInfo_right}>
                    <Link href="/residencyInfo">
                    <div className={styles.bankInfo_topLeft}>
                        <div className={styles.bInfo_topLeft_img}><Image src="/arrow_back.svg" width={20} height={20} alt=""></Image></div>
                        <div className={styles.bInfo_topLeft_text}>Back</div>
                    </div>
                    </Link>
                    <div className={styles.bankInfo_topRight}>
                        <div className={styles.bInfo_topRight_text}>STEP 03/03</div>
                        <div className={styles.bInfo_topRight_text1}>Bank Varification</div>
                    </div>
                </div>
                <div className={styles.bInfo_header}>Complete Your Profile!</div>
                <div className={styles.bInfo_description}>
                For the purpose of industry regulation, your <br/> details are required.
                </div>
                <div className={styles.sepLine}></div>

                <div className={styles.mainForm}>
                    <form onSubmit={formSubmit}>
                    <div className={styles.bankMain}>
                        <div className={styles.bank}>Bank verification number (BVN)</div>
                        <div className={styles.bankInp}>
                            <input type="text" name="bank" placeholder="Enter bank varification number"
                            onChange={handleChange} 
                            value={formData.bank}></input>
                            {errors.bank=="ok" && <div className={styles.okLogo}>
                                <Image src="/Group.png" width={18.333} height={18.333} alt=""></Image>
                            </div>}
                            {errors.bank !=="ok" && <p className={styles.error}>{errors.bank}</p>}
                        </div>
                    </div>
                    
                    <div className={styles.mainSubmit}>
                        <input type="submit" name="submit" value="Save & Continue"></input>
                    </div>

                    </form>
                </div>
                <div className={styles.bottomSecureContent}>
                    <div className={styles.secureContentLogo}>
                        <Image src="/lock.svg" width={14} height={14} alt=""></Image>
                    </div>
                    <div className={styles.secureContentLogo}>Your Info is safely secured</div>
                </div>
            </div>
        </div>
    )
}

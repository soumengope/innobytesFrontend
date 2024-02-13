"use client"
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; 

export default function ResidencyInfo(){
    const phoneCountries = [
        {
            "image":"/INDIA.png",
            "cName":"INDIA",
            "code" :"+91"
        },
        {
            "image":"/USA.png",
            "cName":"USA",
            "code":"+1"
        },
        {
            "image":"/UK.png",
            "cName":"UK",
            "code":"+44"
        },
        {
            "image":"/FRANCE.png",
            "cName":"FRANCE",
            "code":"+33"
        },
        {
            "image":"/CHINA.png",
            "cName":"CHINA",
            "code":"+86"
        }
    ];
    const country = ["","India","Germany","USA","UK","France","China"];
    const [errors, setErrors] = useState({});
    const [formData,setFormData]=useState({
        phone:'',
        address:'',
        country:'',
        phoneC:'',
      });
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
          ...formData,
          [name]:value,
        })
    }
    
    let countryImage = phoneCountries.filter(obj => obj.cName === formData.phoneC).map(obj => obj.image)[0];
    let countryCode = phoneCountries.filter(obj => obj.cName === formData.phoneC).map(obj => obj.code)[0];
    
    const formSubmit = (e)=>{
        e.preventDefault();
        let newErrors = {};
        if(formData.phone.length<=0){
            newErrors.phone = "empty phone number";
        }else if(formData.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im)){
            newErrors.phone="ok";
        }else{
            newErrors.phone="Invalid, phone number must be greater than 9 digit";
        }
        if(formData.address.length<=0){
            newErrors.address="empty address field";
        }else if(formData.address.length >= 30){
            newErrors.address="address length is too high";
        }else{
            newErrors.address="ok";
        }
        if(formData.country.length<=0){
            newErrors.country="empty country field";
        }else{
            newErrors.country="ok";
        }
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors)
            return
        }
    }
    if(errors.phone=="ok" && errors.address=="ok" && errors.country=="ok"){
        window.location.href="https://innobytes-frontend-woad.vercel.app//bankInfo";
    }
    return(

        <div className={styles.container}>
            <div className={styles.rInfo_left}>
                <div className={styles.mob}><Image src="/Frame1.png" width={666} height={1024} alt=""></Image></div>
            </div>
            <div className={styles.main_rInfo_right}>
                <div className={styles.rInfo_right}>
                    <Link href="/personalInfo">
                    <div className={styles.residencyInfo_topLeft}>
                        <div className={styles.rInfo_topLeft_img}><Image src="/arrow_back.svg" width={20} height={20} alt=""></Image></div>
                        <div className={styles.rInfo_topLeft_text}>Back</div>
                    </div>
                    </Link>
                    <div className={styles.residencyInfo_topRight}>
                        <div className={styles.rInfo_topRight_text}>STEP 02/03</div>
                        <div className={styles.rInfo_topRight_text1}>Recidency Info.</div>
                    </div>
                </div>
                <div className={styles.rInfo_header}>Complete Your Profile!</div>
                <div className={styles.rInfo_description}>
                For the purpose of industry regulation, your <br/> details are required.
                </div>
                <div className={styles.sepLine}></div>

                <div className={styles.mainForm}>
                    <form onSubmit={formSubmit}>
                    <div className={styles.phoneMain}>
                        <div className={styles.phone}>Phone number*</div>
                        <div className={styles.phoneInp}>
                            <input type="text" name="phone" placeholder="Enter phone"
                            onChange={handleChange} 
                            value={formData.phone}></input>
                            <div className={styles.phoneCountryMain}>
                                <div className={styles.Cname}>
                                <select type="text" name="phoneC"
                                onChange={handleChange}
                                value={formData.phoneC}>{
                                    phoneCountries.map((elem)=>{
                                        return <option key={elem}>{elem.cName}</option>
                                    })
                                }
                                </select>
                                </div>  
                                <div className={styles.Cimage}>
                                    {
                                    (countryImage === undefined ? 
                                        <Image src="/INDIA.png" width={50} height={50} alt=""></Image> :
                                        <Image src={countryImage} width={50} height={50} alt=""></Image>)
                                    }
                                </div>
                                <div className={styles.Ccode}>
                                    {
                                        countryCode === undefined ?
                                        <p>+ 91</p> :<p>{countryCode}</p>
                                    }
                                </div>

                            </div>
                            {errors.phone !=="ok" && <p className={styles.error}>{errors.phone}</p>}
                        </div>
                    </div>
                    <div className={styles.addressMain}>
                        <div className={styles.address}>Your address*</div>
                        <div className={styles.addressInp}>
                            <input type="text" name="address" placeholder="Please enter address"
                            onChange={handleChange} 
                            value={formData.address}></input>
                            {errors.address !=="ok" && <p className={styles.error}>{errors.address}</p>}
                        </div>
                    </div>
                    <div className={styles.countryMain}>
                        <div className={styles.country}>Country of residence*</div>
                        <div className={styles.countryInp}>
                            
                            <select
                            type="text" name="country" placeholder="Please select"
                            onChange={handleChange}
                            value={formData.country}>
                                {
                                    country.map(elem=>{
                                        return <option key={elem}>{elem}</option>
                                    })
                                }
                            </select>
                            {errors.country !=="ok" && <p className={styles.error}>{errors.country}</p>}
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

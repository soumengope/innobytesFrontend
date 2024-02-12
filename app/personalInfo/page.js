"use client"
import styles from './page.module.css';
import Image from 'next/image';
import { useState } from 'react'; 
import Link from 'next/link';
import React,{useRef} from 'react';

export default function PersonalInfo(){

    const [name,setName] = useState(false)
    const changeVal = ()=>{
        setName(!name);
    }

    const [errors, setErrors] = useState({});
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        pass:'',
        chkbox:false
      });
    
    const handleChange = (e)=>{
        const {name,value,type,checked} = e.target;
        setFormData({
          ...formData,
          [name]:type==='checkbox'?checked:value,
        })
    }
    const formSubmit = (e)=>{
        
        e.preventDefault();
        let newErrors = {}
        if(formData.name.length<=0){
            newErrors.name="Name is empty";
        }else if(formData.name.length>=20){
            newErrors.name="Name is too long";
        }else{
            newErrors.name="ok";
        }
        if(formData.email.length<=0){
            newErrors.email="Email is empty";
        }else if(formData.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
            newErrors.email="ok";
        }else{
            newErrors.email="Invalid email address";
        }
        if(formData.pass.length<=0){
            newErrors.pass="Password is empty";
        }else if(formData.pass.length<8){
           newErrors.pass="Password must be 8 character or more" ;
        }else{
            newErrors.pass="ok";
        }
        if(formData.chkbox==false){
            newErrors.chkbox="Empty"
        }else{
            newErrors.chkbox="ok";
        }
        console.log(errors)
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors)
            return
        }
        
    }
    if(errors.name=="ok" && errors.email=="ok" && errors.pass=="ok" && errors.chkbox=="ok"){
        window.location.href="http://localhost:3000/residencyInfo";
    }
    return(

        <div className={styles.container}>
            <div className={styles.pInfo_left}>
                <div className={styles.mob}><Image src="/Frame1.png" width={666} height={1024} alt=""></Image>
            </div>
            </div>
            <div className={styles.main_pInfo_right}>
                <div className={styles.pInfo_right}>
                    <Link href="/myUser">
                    <div className={styles.personalInfo_topLeft}>
                        <div className={styles.pInfo_topLeft_img}>
                            <Image src="/arrow_back.svg" width={20} height={20} alt=""></Image>
                        </div>
                        <div className={styles.pInfo_topLeft_text}>Back</div>
                    </div>
                    </Link>
                    <div className={styles.personalInfo_topRight}>
                        <div className={styles.pInfo_topRight_text}>STEP 01/03</div>
                        <div className={styles.pInfo_topRight_text1}>Personal Info.</div>
                    </div>
                </div>
                <div className={styles.pInfo_header}>Register Individual Account!</div>
                <div className={styles.pInfo_description}>For the purpose of industry regulation, your <br/>details are required.</div>
                <div className={styles.sepLine}></div>

                <div className={styles.mainForm}>
                    <form onSubmit={formSubmit}>
                    <div className={styles.fullNameMain}>
                        <div className={styles.fullName}>Your fullname*</div>
                        <div className={styles.fullNameInp}>
                            <input type="text" name="name" id="name" placeholder="Enter fullname"
                                onChange={handleChange} 
                                value={formData.name}
                                ></input>
                           {errors.name !=="ok" && <p className={styles.error}>{errors.name}</p>}
                        </div>
                        
                    </div>
                    <div className={styles.emailMain}>
                        <div className={styles.email}>Email address*</div>
                        <div className={styles.emailInp}>
                            <input type="text" name="email" id="email" placeholder="Enter email address"
                                onChange={handleChange} value={formData.email}></input>
                            {errors.email !=="ok" && <p className={styles.error}>{errors.email}</p>}
                        </div>
                    </div>
                    <div className={styles.passwordMain}>
                        <div className={styles.password}>Create password*</div>
                        <div className={styles.passwordInp}>
                            <input type={`${(name===false)? 'password' : 'text'}`} name="pass" 
                            placeholder="Enter create password" id="pass"
                            onChange={handleChange} value={formData.pass}></input>
                            <span onClick={changeVal}>{`${(name===false)? 'Show' : 'Hide'}`}</span>
                        {errors.pass !=="ok" && <p className={styles.error}>{errors.pass}</p>}
                        </div>
                    </div>
                    <div className={styles.sqareAgreeBox}>
                        <div className={styles.chkBoxInp}><input type="checkbox" name="chkbox" id="chkbox"
                            onChange={handleChange} value={formData.chkbox}></input></div>
                        <div className={styles.squareAgreeBox_content}>I agree to terms & conditions</div>
                    </div>

                    <div className={styles.mainSubmit}>
                        <input type="submit" name="submit" value="Register Account"></input>
                    </div>
                    </form>
                </div>
                <div className={styles.orLines}>
                    <div className={styles.lineOneOr}></div>
                    <div className={styles.or}>Or</div>
                    <div className={styles.lineTwoOr}></div>
                </div>

                <div className={styles.mainGoogleReg}>
                    <div className={styles.googleRegImg}>
                        <Image src="/google_icon.svg" width={24} height={24} alt=""></Image>
                    </div>
                    <input type="button" name="googleReg" value="Register with google"></input> 
                </div>
            </div>
        </div>

    )
} 

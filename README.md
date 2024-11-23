# ION SMILE

### AI Exam Proctor: Revolutionizing Online Exam Integrity
#### *Empower Fair and Secure Assessments with Cutting-Edge AI Technology*

### Harnessing the Power of AI for Exam Integrity
Our AI Exam Proctor is meticulously crafted to leverage the power of artificial intelligence, meticulously monitoring exam activities and safeguarding the sanctity of your assessments. With its sophisticated algorithms and real-time detection capabilities, our AI proctor acts as a vigilant guardian, deterring and identifying potential cheating attempts.

[![npm version](https://img.shields.io/npm/v/ion-smile.svg?style=flat-square)](https://www.npmjs.org/package/ion-smile)
![npm bundle size](https://img.shields.io/bundlephobia/min/ion-smile?style=flat-square)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/ion-smile?style=flat-square)](https://www.jsdelivr.com/package/npm/ion-smile)
![NPM License](https://img.shields.io/npm/l/ion-smile?style=flat-square)
[![Static Badge](https://img.shields.io/badge/Docs-ION_Smile-blue?style=flat-square)](https://ion-smile.vercel.app)



### Features

1. **Suspicious Movement Detection**

    Leverage AI to identify irregular head and eye movements that indicate potential cheating behavior.

2. **Multi-Face Detection**

    Employ advanced facial recognition technology to detect multiple faces within the webcam's field of view, flagging potential assistance during exams.

3. **Object Detection**

    Automatically identify prohibited objects like mobile phones, often used for illicit exam activities.

4. **Comprehensive Reports**

    Generates detailed reports on exam activities, including potential cheating incidents for post-exam review.

### Compatibility

- **Browser**:  
  Compatible with both desktop and mobile platforms  
  Compatible with *WebView* 

### Installation
`npm install --save ion-smile`

**Example usage:**

```js
import 'ion-smile/style.css';
import ionSmile from 'ion-smile';

const config = {
                credential:{
                    host    : "https://example.com/", 
                    token   : "example-token", 
                    userkey : "example-user", 
                    session : "example-session"
                },
                dom:{
                    embed: document.querySelector("#div-element"), // default embed to body
                    fit: true, // fit width & height to div embeded, default false
                    moveable:true // default false
                }
            }

const smile = new ionSmile(config);
    
    smile.init();

    smile.on("ready",(e)=>{
        if(e.module="ai" && e.status){
            smile.start()
        }
    });
    smile.on("alert",(e)=>{
        if(e.status){ // status = true, if fraud detected
            alert(e.description)
        }
    });
```
<br/>
<div align="center" style="text-align:center; align:center; margin:0 auto">
    Presented By:
<br/>
<img src="https://ion-smile.vercel.app/profile.png" width=100/>
<br/>
<strong>Limitless Developer</strong>
</div>
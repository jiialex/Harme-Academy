import React from 'react'
import '../style/about.css'
import bag from '../images/bag.png'
import comb from '../images/comb.png'
import child from '../images/child.png'

function AboutUs() {
  return (
    <div className='back'>
      <div className="about">
      <img className="bags" src={bag} alt=""/>
        <h1>About Us</h1>
        </div>
        <div className='below'>
            <img src={comb} alt=""/>
           </div>
           <div className="chill">
  <img src={child} alt="Child" />
  <div className="par">
    <h2>Harme Hope Academy</h2>
    <p>Harme Hope Academy is a nurturing and inspiring <br /> pre-primary school 
      dedicated to shaping the future of young learners. 
      With <br/> a strong commitment to Early Childhood Care and Education (ECCE), <br/>Harme Hope Academy provides a safe, loving,
      <br/> and engaging environment where every child can learn, grow, and thrive. Our mission is to guide children in their early years <br/>
      with care, creativity, and hope for a brighter tomorrow.</p>
    <h2>The Harme Hope Advantage</h2>
    <p>Harme Hope Academy stands as a trusted name in 
      early education, combining warmth and professional 
      teaching to create a joyful learning journey.
       Our dedication, passion, and love for children are the 
       pillars of our success. At Harme Hope Academy, we don't 
       just offer a name — we provide our proven teaching approach,
        the HopeLearn methodology, complete with structured learning guidelines,
         carefully designed activities, and age-appropriate resources to help children explore,
       imagine, and achieve their full potential.</p>
  </div>
</div>

        </div>
      

  )
}

export default AboutUs

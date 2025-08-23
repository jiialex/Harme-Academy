import React from 'react';
import '../style/program.css';
import program1 from '../images/program1.jpg';
import program2 from '../images/program2.jpg';
import program3 from '../images/program3.jpg';
import program4 from '../images/program4.jpg';
import user from '../images/user.png';
import family from '../images/family.png';
import play from '../images/playground.png';
import meeting from '../images/meeting-room.png';

function Programmes() {
  return (
    <div className='programmes'>
      <p className='title'>Programmes</p>
      <div className='leaf-divider-wrapper'>
        <div className='line'></div>
        <svg
          className='leaf-icon'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="#4b0082"
        >
          <path d="M12 2C6 8 6 16 12 22C18 16 18 8 12 2Z" />
        </svg>
        <div className='line'></div>
      </div>

      <div className='program-boxes'>
        <div className='program-card'>
          <img src={program1} alt="Play Group" />
          <img  id="user" src={user} alt=""/>
          <h3>Play Group</h3>
          <p>Children in this age group as identified as Toddlers.
            children are born curious.They begin to explore the programmes</p>
           <a className='readmore'>Read More</a>
            <p>Admission Age Group<br/>2-3 Years</p>
            <p>Duration<br/>3 Hours/Day</p>
            <p className='based'>(Based on respective State regulations)</p>
        </div>
        <div className='program-card'>
          <img src={program2} alt="Nursery" />
          <img id="user" src={family} alt=""/>
          <h3>Nursery</h3>
          <p>The child is now identified (Mandatory level 1 of foundational Stage as per NEP)</p>
           <a className='readmore'>Read More</a>
          <p>Admission Age Group<br/>3-4 Years</p>
            <p>Duration<br/>3 Hours/Day</p>
            <p className='based'>(Based on respective State regulations)</p>
        </div>
        <div className='program-card'>
          <img src={program3} alt="Junior KG/Senior" />
          <img id="user" src={play} alt=""/>
          <h3>Junior KG / Senior</h3>
          <p>This is level 2 and 3 of foundational Stage 1 - Mandatory as per NEP...</p>
           <a className='readmore'>Read More</a>
          <p>Admission Age Group<br/>4-5 Years</p>
            <p>Duration<br/>4 Hours/Day</p>
          <p>Admission Age Group<br/>5-6 Years</p>
            <p>Duration<br/>3 Hours/Day</p>
            <p className='based'>(Based on respective State regulations)</p>
        </div>
        <div className='program-card'>
          <img src={program4} alt="Teacher Training" />
         <img id="user" src={meeting} alt=""/>
          <h3>Teacher Training</h3>
          <p>Harme Hope Academy Learn preschool Teacher Training programmes has set unrivalled standards in the CDE (child development & Education ) space as a leader in ECCE (Early childhood care & Education)</p>
             <a className='readmore'>Read More</a>

        </div>
      </div>
    </div>
  );
}

export default Programmes;

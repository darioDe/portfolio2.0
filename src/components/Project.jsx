const Project = ({ work }) => {

   return (
     <div className='proj-box'>
       <h3 className='proj-title'> {work.title} </h3>
       <div>
         <img className='proj-img' 
            src={work.image} alt="" 
         />
         <div className="proj-text-content">
           <p className='proj-p'> {work.despcription} </p>
           <button className='proj-button proj-button-blue'><a href={work.repository} target="_blank"> REPOSITORY </a></button>
           <button className='proj-button proj-button-red'><a href={work.deploy} target="_blank"> DEPLOY </a></button>
         </div>
       </div>     
     </div>
   )
 }
 
 export default Project
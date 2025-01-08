// import React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";


// class ProjectCard extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Vikas</h1>
//       </div>
//     );
//   }
// }

// createRoot(document.getElementById("vikas")).render(
 //   <StrictMode>
 //     <ProjectCard />
 //   </StrictMode>
// );


// **************************** 6. Define Html ClASS in JSX **************************************
import "./ProjectCard.css";
const ProjectCard= ()=>{
    return(
        <>
           <div className="mydiv">
              <h1>  Project Title  </h1>
              <p>The ProjectCard.jsx component has been created. It includes className styling for a project title, description, and a "View More" button. Let me know if you'd like to add CSS for this or need further customization!</p>
              <button >view More</button>
           </div>
        </>
    );
}

export default ProjectCard;

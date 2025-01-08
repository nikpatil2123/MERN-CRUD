import React from "react";


const ChildComponent = ()=>{
    return (
        <>
         <div>
        <h1>Hello Harsh From Child Component</h1>
        <p>I am the child</p>
      </div>
        </>
     
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
         {/* Create a Component with Composition*/}
             <ChildComponent/>
  
        </div>
      );
    }
  };
  export default ParentComponent;
 import React from 'react';
  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const HtmltoDOM = () => {
  return (
    <div >
      <h1>Hello World</h1>
      <p>Let's render this to the DOM</p>
    </div>
  );
};
 createRoot(document.getElementById('harsh')).render(
   <StrictMode>
     <HtmltoDOM />
   </StrictMode>,
 )
export default HtmltoDOM;

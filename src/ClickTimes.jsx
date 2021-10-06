import React, { useState } from "react";
import App from "./App"
import TimestampsDisplay from "./TimestampsDisplay";

function ClickTimes () {
  
  const timestamps = Date.now();
  
  const [results, setResults] = useState([]);
  const handleClick = (value) => {
    setResults([...results, value]); 
  };
  
  return ( 
    <section> 
      <div> 
        <button onClick={() =>handleClick(timestamps)}>Showtime</button> 
      </div> 
      <TimestampsDisplay timestamps={results} /> 
    </section> );
}
//   const {handleClick, timestamps} = props;
//   const list = timestamps.map((time, index) => {
//     <li key={index}>time</li>
//   })
  
//   return (
//     <button onClick={handleClick}>
//       <ul>
//         {list}
//       </ul>
//     </button>
//   )
// }

export default ClickTimes
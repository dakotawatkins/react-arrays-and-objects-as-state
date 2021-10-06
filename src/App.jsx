import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
//   const [timestamps, setTimestamps] = useState([]);
//   const getTime = () => {
//     setTimestamps([...timestamps, Date.now()])
//   }
  
  return (
    <ClickTimes />
//     <div>
//       <ClickTimes handleClick={getTime} />
//       <TimestampsDisplay timestamps={timestamps} />
//     </div>
  )
}

export default App;
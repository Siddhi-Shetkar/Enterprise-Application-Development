// import React, { useState, useEffect } from "react";

// function Counterapp() {
//   const [count, setCount] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [running]);

//   return (
//     <div style={styles.container}>
//       <div style={styles.box}>
//         <h2>Count: {count}</h2>

//         <button onClick={() => setRunning(true)}>Start</button>
//         <button onClick={() => setRunning(false)}>Pause</button>
//         <button onClick={() => {
//           setRunning(false);
//           setCount(0);
//         }}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   },
//   box: {
//     textAlign: "center",
//   },
// };

// export default Counterapp;


// import React, { useState } from "react";


// // Car component (receives props)
// function Car(props) {
//   return <h3>I am a {props.brand} car</h3>;
// }


// // Garage component (uses state + passes props)
// function Garage() {
//   const [carName, setCarName] = useState("Toyota");


//   return (
//     <div>
//       <h2>My Garage</h2>


//       {/* Passing state as props */}
//       <Car brand={carName} />


//       {/* Change state */}
//       <button onClick={() => setCarName("BMW")}>Change Car</button>
//     </div>
//   );
// }


// export default Garage;

import React, { useState } from "react";


function ReactForm() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name); // Save input to display
    setName(''); // Clear input
  };
 return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Submitted Name: {submittedName}</p>}
    </div>
  );
}
export default ReactForm;

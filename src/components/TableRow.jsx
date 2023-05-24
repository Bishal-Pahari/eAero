// import TableCell from "./TableCell";

// const TableRow = ({ flight }) => {
//   const words = Object.values(flight);

//   console.log(words);

//   return (
//     <tr>
//       <td>✈</td>
//       {words?.map((word, _index) => (
//         <TableCell key={_index} word={word} />
//       ))}
//     </tr>
//   );
// };

// export default TableRow;

import React, { useState, useEffect } from "react";
import TableCell from "./TableCell";

const TableRow = ({ flight }) => {
  const [previousFlight, setPreviousFlight] = useState(flight);
  const words = Object.values(flight);

  useEffect(() => {
    // Compare the new 'flight' data with the previous data
    // Update the 'previousFlight' state if there are changes
    if (JSON.stringify(flight) !== JSON.stringify(previousFlight)) {
      setPreviousFlight(flight);
    }
  }, [flight, previousFlight]);

  return (
    <tr>
      <td>✈</td>
      {words?.map((word, index) => {
        // Conditionally render the TableCell component based on changes in 'word'
        if (word !== previousFlight[index]) {
          return <TableCell key={index} word={word} />;
        }
        return null;
      })}
    </tr>
  );
};

export default TableRow;

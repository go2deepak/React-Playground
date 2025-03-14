// import React, { useState, useMemo } from "react";

// const products = Array.from({ length: 10000 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
// }));

// const UseMemoExample = () => {
//   const [search, setSearch] = useState("");

//   // Memoized Filtering
//   const filteredProducts = useMemo(() => {
//     console.log("Filtering products..."); // Logs when recalculating
//     return products.filter(product =>
//       product.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]); // Only recalculates when `search` changes

//   return (
//     <div>
//       <h2>Product List</h2>
//       <input
//         type="text"
//         placeholder="Search product..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <ul>
//         {filteredProducts.slice(0, 10).map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//       <p>Showing {filteredProducts.length} results</p>
//     </div>
//   );
// };

// export default UseMemoExample;



import React, { useMemo, useState } from 'react'

const UseMemo = () => {

  const[count, setCount] = useState(0)

  const expensive = useMemo(() => {
    return count+20
  }, [count])

  return (
    <div>

      <h1>{expensive}</h1>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count+1)}}>Click here</button>
    </div>
  )
}

export default UseMemo
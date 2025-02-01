// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useDebounce } from "./hooks";

// const Child = (props) => {
//   const [value, setValue] = useState("");
//   const debounceValue = useDebounce(value);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   useEffect(() => {
//     console.log(debounceValue);
//   }, [debounceValue]);
//   return (
//     <>
//       <input value={value} onChange={handleChange} />
//     </>
//   );
// };
// export default Child;

// import React from "react";

// function Child({ handleClick }) {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={(event) => handleClick(100)}>Click</button>
//     </div>
//   );
// }
// export default Child;



// import React, { useState } from "react";

// function ChildComponent(props) {
//   const [count, setCount] = useState(0);

//   const counter = () => {
//     setCount(count + 1);
//     return count;
//   };

//   return (
//     <div className="div-child">
//       <h1>This is Child Component </h1>
//       <button onClick={() => props.sendToParent(counter())}>
//         {props.message}
//       </button>
//     </div>
//   );
// }
// export default ChildComponent;

// **************************Counter*************************************

// import React from "react";
// export default class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     function handleCount() {
//       console.log("Hello");
//       this.setState({ count: this.state.count + 1 });
//     }
//     return (
//       <>
//         {this.state.count}
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           Click me
//         </button>
//       </>
//     );
//   }
// }

// *************************************Counter and UseMemo*****************************

// import React, { useEffect, useState, useMemo } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   let storeValue = [];
//   if (value in storeValue) {
//     value = storeValue;
//   } else {
//     expensiveCalc();
//   }

//   useMemo(() => {
//     function expensiveCalc() {
//       return 9 * 9;
//     }
//   });
//   useEffect(() => {
//     console.log("Hello");
//   }, [count]);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </>
//   );
// };
// export default Counter;

// ***************************Clock / Timer********************************************

const Clock = () => {
    let id = useRef();
    const [time, setTime] = useState(0);
    const start = () => {
      id.current = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    };

    return (
      <>
        <h1> StopWatch</h1>
        <h1>{time}</h1>
        <button onClick={start}>Start</button>
        <button
          onClick={() => {
            clearInterval(id.current);
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            clearInterval(id.current);
            setTime(0);
          }}
        >
          Stop
        </button>
      </>
    );
  };

  export default Clock;

// ********************** UseDebounce ****************************************

// import { useEffect, useState } from "react";

// export const useDebounce = (inputValue, delay = 300) => {
//   const [debounceValue, setDebounceValue] = useState(inputValue);

//   useEffect(() => {
//     const timer = setTimeout(() => setDebounceValue(inputValue), delay);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [inputValue, delay]);
//   return debounceValue;
// };

// ******************* Search ********************************************

// import React, { useState } from "react";

// const Search = () => {
//   const [data, setData] = useState([]);
//   const [text, setText] = useState();
//   function onChange(e) {
//     setText(e.target.value);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((result) => setData(result));
//   }
//   return (
//     <>
//       <input value={text} onChange={onChange}></input>
//       {data
//         .filter((item) => item.title.startsWith(text))
//         .map((item) => (
//           <h1>{item.title}</h1>
//         ))}
//     </>
//   );
// };
// export default Search;

// ***************HighierOrderComponenet*******************************

// import React, { useState } from "react";

// const HighierComp = (Counter) => {
//   const Inner = () => {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//       setCount(count + 1);
//     };
//     return <Counter count={count} handleEvent={handleClick} />;
//   };
//   return Inner;
// };
// export default HighierComp;
// **********************************888888



// import React from "react";
// import HighierComp from "./HOC";

// const Counter = (props) => {
//   return (
//     <>
//       <button onClick={props.handleEvent}>+</button>
//       <button>{props.count}</button>
//       <button>-</button>
//     </>
//   );
// };
// export default HighierComp(Counter);

// ************************************

// import React from "react";
// import HighierComp from "./HOC";


// const Counter2 = (props) => {
//   return (
//     <>
//       <button onClick={props.handleEvent}>+</button>
//       <button>{props.count}</button>
//       <button>-</button>
//     </>
//   );
// };
// export default HighierComp(Counter2);

// *************************Todo App*************************************************************

// import React, { useState } from "react";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const removeTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a new task"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => removeTask(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// ***********************Redux interview question*********************



 *   1. What is redux flow ?
    2. Can we have multiple reducers ?
    3. Can we have multiple stores ?
    4. What is reducer in redux ?
    5. Why reducer is a pure function?
    6. Why state is immutable in redux ?
    7. What is redux middleware ?
    8.Difference between redux thunk and redux saga.
    9. How to connect react with redux?
    10. How to access redux store outside react component ?
    11. How to connect multiple middleware ?
                        
       
      //  ************************ Redux ********************************
       
       const cakeReducer = (state = cakeInitialState, action) => {
         switch (action.type) {
           case BUY_CAKE:
             return {
               ...state,
               numOfCakes: state.numOfCakes - 1,
             };
           default:
             return state;
         }
       };
     
       const iceCreamReducer = (state = iceCreamInitialState, action) => {
         switch (action.type) {
           case BUY_ICECREAM:
             return {
               ...state,
               numOfIceCream: state.numOfIceCream - 1,
             };
           default:
             return state;
         }
       };
     
       const BUY_CAKE = "BUY_CAKE";
       const BUY_ICECREAM = "BUY_ICECREAM";
     
       function buyCake() {
         return {
           type: BUY_CAKE,
           info: "first redux action",
         };
       }
     
       function buyIceCream() {
         return {
           type: BUY_ICECREAM,
         };
       }
     
       const cakeInitialState = {
         numOfCakes: 10,
       };
     
       const iceCreamInitialState = {
         numOfIceCream: 20,
       };
     
       const rootReducer = combineReducers({
         cake: cakeReducer,
         iceCream: iceCreamReducer,
       });
     
       const store = createStore(rootReducer, applyMiddleware(logger)); //step 1
     
       const unsubscribe = store.subscribe(() => {}); //Step 4
     
       store.dispatch(buyCake());
       store.dispatch(buyIceCream());
       unsubscribe();


      //  **************************************************** fetch API****************************************
      
      // import React, { useState, useEffect } from "react";

      // const App = () => {
      //   const [data, setData] = useState([]);
      //   const [error, setError] = useState(null);
      //   const [loading, setLoading] = useState(true);
      
      //   useEffect(() => {
      //     const fetchData = async () => {
      //       try {
      //         setLoading(true);
      //         const response = await fetch(
      //           "https://jsonplaceholder.typicode.com/posts"
      //         );
      //         if (!response.ok) {
      //           throw new Error("Error");
      //         }
      //         const result = await response.json();
      //         setData(result);
      //       } catch (err) {
      //         setError(err.message);
      //       } finally {
      //         setLoading(false);
      //       }
      //     };
      //     fetchData();
      //   }, []);
      
      //   return (
      //     <>
      //     <ul>
      //       {data.map((item) => (
      //         <li key={item.id}>{item.title}</li>
      //       ))}
      //     </ul>
      //     </>zzzzzzzz
      // );
      // };
      
      // export default App;


      // *************************************Pagination******************************************

//       import React from 'react'
// import { useEffect, useState } from 'react'

// const App = () => {
//   const[data, setData] = useState([])
//   const [currentPage, setCurrentPage] = useState(3)
//   const [postPerPage, setPostPerPage] = useState(2)

//   let url = 'https://jsonplaceholder.typicode.com/posts'
// useEffect(() => {
//   fetch(url)
//   .then(res => res.json())
//   .then(item => setData(item))

// }, [])

// const lastPostIndex = currentPage * postPerPage
// const firstPostIndex = lastPostIndex - postPerPage
// const currentPosts = data.slice(firstPostIndex, lastPostIndex)



// const paginate = (pageNumber) => setCurrentPage(pageNumber)
// const renderPagination = () => {
//   const totalPages = Math.ceil(data.length/postPerPage)
//   const pageNumbers = Array.from({length: totalPages}, (_, i) => i+1)
//   return pageNumbers.map(item => (
//     <button onClick={() => paginate(item)}
//     className={item === currentPage ? "active" : ""}
//     >{item}</button>
//   ))

// }

//   return (
//     <div>
//       <ul>

//       {currentPosts.map(item => (
//         <li>
//           <img src={item.image}/>
//           <h1>{item.id}</h1>
//         </li>
//       ))}
//       </ul>
//       <div>{renderPagination()}</div>
//     </div>
//   )
// }

// export default App


// // *************Pagination with saearch term********************


// const App = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((item) => setData(item));
//   }, []);

//   const itemsPerPage = 10;

//   // Filter data based on the search term
//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;

//   // Get the current posts based on the filtered data
//   const currentPosts = filteredData.slice(firstIndex, lastIndex);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const renderPagination = () => {
//     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//     const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

//     return pageNumbers.map((number) => (
//       <button
//         key={number}
//         onClick={() => paginate(number)}
//         style={{
//           margin: "0 5px",
//           padding: "5px 10px",
//           background: number === currentPage ? "#007bff" : "#f0f0f0",
//           color: number === currentPage ? "white" : "black",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {number}
//       </button>
//     ));
//   };

//   return (
//     <div>
//       <h1>Posts with Search and Pagination</h1>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search posts..."
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           setCurrentPage(1); // Reset to the first page when searching
//         }}
//         style={{
//           marginBottom: "20px",
//           padding: "10px",
//           width: "100%",
//           maxWidth: "400px",
//           border: "1px solid #ddd",
//           borderRadius: "5px",
//         }}
//       />

//       {/* List of Posts */}
//       <ul>
//         {currentPosts.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div>{renderPagination()}</div>
//     </div>
//   );
// };

// export default App;
      

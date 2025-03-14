// ************************Counter**********************************************

// import "./App.css";
// import { useReducer } from "react";
// const Counter = () => {
//   const reducer = (state, action) => {
//     if (action.type === "inc") {
//       return state + 1;
//     }
//     if (action.type === "dec") {
//       return state - 1;
//     }
//     return state;
//   };
//   const [state, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <h1>{state}</h1>
//       <button
//         onClick={() => {
//           dispatch({ type: "inc" });
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "dec" });
//         }}
//       >
//         -
//       </button>
//     </>
//   );
// };

// export default Counter;

// ***************************************Timer***************************************************
// import "./App.css";
// import { useRef, useState } from "react";

// const Timer = () => {
//   const [time, setTime] = useState(0);
//   let id = useRef();
//   const start = () => {
//     id.current = setInterval(() => {
//       setTime((prevState) => prevState + 1);
//     }, 1000);
//   };
//   return (
//     <>
//       <h1>{time}</h1>
//       <button onClick={start}>start</button>
//       <button
//         onClick={() => {
//           clearInterval(id.current);
//           setTime(0);
//         }}
//       >
//         stop
//       </button>
//       <button
//         onClick={() => {
//           clearInterval(id.current);
//         }}
//       >
//         pause
//       </button>
//     </>
//   );
// };
// export default Timer;

// ***************************************HOC******************************************************
// ______________________________App.js______________________________
// import "./App.css";
// import React from "react";
// import Counter from "./Counter1";
// import Counter2 from "./Counter2";
// const App = () => {
//   return (
//     <>
//       <Counter1 />
//       <Counter2 />
//     </>
//   );
// };

// export default App;
// ____________________________HOC_______________________
// import React, { useState } from "react";

// const HOC = (Counter) => {
//   const Inner = () => {
//     const [count, setCount] = useState(0);
//     const increment = () => {
//       setCount(count + 1);
//     };
//     return <Counter count={count} value={increment} />;
//   };
//   return Inner;
// };
// export default HOC;

// _______________________Counter1.jsx__________________________

// import HOC from "./HOC";
// const Counter1 = (props) => {
//   return (
//     <>
//       <h1>{props.count}</h1>
//       <button onClick={props.value}>increment</button>
//     </>
//   );
// };
// export default HOC(Counter1);

// ____________________Counter2______________________

// import React from "react";
// import HOC from "./HOC";
// const Counter2 = (props) => {
//   return (
//     <>
//       <h1>{props.count}</h1>
//       <button onClick={props.value}>increment</button>
//     </>
//   );
// };
// export default HOC(Counter2)

// ********************Customer Hook***********************************
// import React from "react";
// import Doc1 from "./Doc1";
// import Doc2 from "./Doc1";

// const App = () => {
//   return (
//     <div>
//       <Doc1 />
//       <Doc2 />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useCustomHook } from "react";
// import { useEffect } from "react";
// const Doc2 = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   useCustomHook(count);
//   return (
//     <>
//       <button onClick={handleClick}>{count}</button>
//     </>
//   );
// };
// export default Doc2;

// import React, { useState } from "react";
// import { useEffect } from "react";
// import useCustomHook from "./CustomHook";
// const Doc1 = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   useCustomHook(count);
//   return (
//     <>
//       <button onClick={handleClick}>{count}</button>
//     </>
//   );
// };
// export default Doc1;

// import { useEffect } from "react";
// import React from "react";

// const useCustomHook = (count) => {
//   useEffect(() => {
//     document.title = `count is ${count}`;
//   }, [count]);
// };

// export default useCustomHook;

// *********************************ToDo App**********************************************************

// import React, { useState } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodo = () => {
//     if (newTodo.trim() !== "") {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//       setNewTodo("");
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>ToDo App</h1>

//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Add new todo"
//         />

//         <button onClick={addTodo}>Add</button>
//       </div>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             <span
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTasks = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
  };
  return (
    <>
      <div>Todo App</div>
      <input
        type="text"
        placeholder="enter a new task"
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={addTasks}>Add task</button>
      {tasks.map((item) => (
        <h1>{item}</h1>
      ))}
      <button>remove task</button>
    </>
  );
};

export default App;

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

// *************************Change color*******************
// import React, { useState } from "react";

// const App = () => {
//   const [color, setColor] = useState("");
//   const defaultColor = "white";

//   const handleColorChange = (e) => {
//     setColor(e.target.value);
//   };
//   const handleColorClick = () => {
//     document.querySelector(".box").style.backgroundColor = color;
//   };

//   const handleMouseOver = () => {
//     document.querySelector(".box").style.backgroundColor = color;
//   };

//   const handleMouseOut = () => {
//     document.querySelector(".box").style.backgroundColor = defaultColor;
//   };

//   return (
//     <>
//       <input
//         type="color"
//         value={color}
//         onChange={handleColorChange}
//         onClick={handleColorClick}
//       />
//       <div
//         className="box"
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//         style={{
//           width: "1000px",
//           height: "1000px",
//           backgroundColor: defaultColor,
//           border: "1px solid #ccc",
//           marginTop: "20px", // Added some margin for better visibility
//         }}
//       ></div>
//     </>
//   );
// };

// export default App;

// *******************************Search functionality************************

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [text, setText] = useState('');
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((Err) => console.log("Data is not there"));
},[])

//   const handleOnchange = (e) => {
//     setText(e.target.value)
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => setData(data))
//     .catch((Err) => document.write('Datra is not there', Err));
//   }
//   return (
//     <>
//       <input type="text" value={text} onChange={handleOnchange}/>
//       {data.filter((item) => item.title.startsWith(text)).map((item) => <li>{item.title}</li>)}
//     </>
//   );
// };

// export default App;

// ********************************Passing Data from Child from parent******************************

// App.js
// import React, { useState } from "react";
// import Child from "./Child";
// import "./App.css";

// const App = () => {
//   const [color, setColor] = useState(null);
//   const updateColor = (color) => {
//     setColor(color);
//   };
//   return (
//     <div>
//       <div className="color" style={{ backgroundColor: `${color}` }}></div>
//       <Child sendDataToParent={updateColor} />
//     </div>
//   );
// };

// export default App;

// // Child.js
// import React, { useState } from "react";

// const Child = ({ sendDataToParent }) => {
//   const [activeColors, setActiveColors] = useState();
//   const handleClick = (e) => {
//     const { value } = e.target;
//     setActiveColors(value);
//     sendDataToParent(value);
//   };
//   return (
//     <div>
//       <input type="text" value={activeColors} onChange={handleClick}></input>
//     </div>
//   );
// };

// export default Child;

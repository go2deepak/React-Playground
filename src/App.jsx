// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

function App({children}) {
  return (
    <div>
      <h1>{children}</h1>
      <p>This is some content inside the card.</p>
    </div>
  );
}

export default App
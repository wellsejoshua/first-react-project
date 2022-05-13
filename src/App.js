import ExpenseItem from "./components/ExpenseItem";

//special thing about this function is that ir returns jsx code...is a function and custom html element. This is a component and a component must return something that can be rendered in the browser
//"state" is built into react and lets us change the state of an application
function App() {
  return (
    <div>
      <h1>Lets get Started</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

var App = () => (
  <div>Some cliche salutation
    <h2>To Do List </h2>
    <toDoList />
  </div>
);
var GroceryList = () => (
  <div>
    <Ham />
    <Egg /> 
  </div>
);

var Ham = () => (
  <div>Ham</div>
)

var Egg = () => (
  <div>Egg</div>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));
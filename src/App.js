import Add from "./components/Add"
import Sub from "./components/Sub"
import Student from "./components/Student"
import UserListing from "./components/UserListing"
import User from "./components/User"

function App() {

  var student1 = {
    name: "Pallavi",
    Age: 20,
    City: "Mumbai"

  }

  function showData() {
    alert("Kaise hoa???....");
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(data => {
      console.table(data.data);
    })
  }

  return (
    //<h1>Hello Pallavi..</h1>

    //for multiple return
    <>
      <button onClick={showData}>Show Data</button>
      
      <UserListing />
      
      <h1>Hello How do you do?...</h1>
      <h1>Byee Byee</h1>
      {5*5}
      {/*for string <Add x="5" y="6"/> */}
      <Add x={5} y = {6}/>
      <Sub x={79} y = {50}/>
      <Student data={student1}/>
      <Student data={{name: "Aroma",Age: 20,City: "Mumbai"}}/>

    </>
  );
}

export default App;

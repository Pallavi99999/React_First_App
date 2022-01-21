import User from "./User"
import { useState } from "react";
import reportWebVitals from "../reportWebVitals";



function UserListing(props) {

    const [users, setUsers] = useState([]);

    function showData() {
    
        fetch("https://reqres.in/api/users?page=2")
        .then(response => response.json())
        .then(data => {
          console.table(data.data);
          var records = data.data;
          var rows = [];
          for(let i=0; i< records.length; i++){
            rows.push(<User key={i} data={{id: records[i].id, name: records[i].first_name + " " + records[i].last_name, email: records[i].email, avatar:records[i].avatar }}/>);
          }
          setUsers(rows);
        })
      }

    return (  
        <>
            <User data={{id:"1", name:"Pallavi", email:"Pallavi@gmail.com", avatar:"https://reqres.in/img/faces/7-image.jpg"}}/>
            <button onClick={showData}>Show Data</button>
            {/* <User /> */}
            {users}
        </>
    );
}

export default UserListing;
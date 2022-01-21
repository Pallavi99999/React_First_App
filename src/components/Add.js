function Add(props) {
    return (
      //<h1>Hello Pallavi..</h1>
  
      //for multiple return
      <>
        <h1>Add Componnent</h1>
        <h1>Hello How do you do?...</h1>
        <h1>Byee Byee</h1>
        {props.x}
        {props.y}
        <br></br>
        {props.x + props.y}
      </>
    );
  }
  
  export default Add;
function Student(props) {

    const {name,Age,City} = props.data

    return ( 
        <>
            <br></br>
            {props.data.name}
            <br></br>
            {name}
            <br></br>
            {Age}
            <br></br>
            {City}
        </>
     );
}

export default Student;

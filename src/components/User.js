function User(props) {
    const {id,name,email,avatar} = props.data
    return ( 
        <>
            <div>
                {id} | {name} | {email} | <img src={avatar}/>
            </div>
        </>
     );
}

export default User;
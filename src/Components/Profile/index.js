const Profile = (props) => {
    const {userDetails} = props
    const {name,imageUrl,role,contact} = userDetails

    return(
        <li>
            <img src={imageUrl} alt="p"/>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{contact}</p>

        </li>
    )
}

export default Profile
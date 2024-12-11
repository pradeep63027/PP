const Profile = (props) => {
    const {userDetails} = props
    const {name,imageUrl,role} = userDetails

    return(
        <li>
            <img src={imageUrl} alt="p"/>
            <h1>{name}</h1>
            <p>{role}</p>

        </li>
    )
}

export default Profile
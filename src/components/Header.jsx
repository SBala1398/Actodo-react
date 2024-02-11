function Header(props)
{   
    return(
        <div>
            <h1 className="text-3xl font-medium text-blue-800">Hello {props.username}!</h1>
            <p>I help you manage your activities :)</p>
        </div>
    )
}
export default Header 

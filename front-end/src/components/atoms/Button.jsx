const Button = ({bgColor='primaryColor', color="whit", name}) => {
    return(
        <button className="btn-primary hover:bg-blue-300">
        {name}
        </button>
    )
}

export default Button;
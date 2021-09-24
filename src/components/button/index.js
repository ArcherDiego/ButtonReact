const buttonStyle = {
    backgroundColor: 'white',
    color: '#add8e6',
    borderRadius: '5px',
    borderColor: 'white',
    width: '175px',
    height: '50px',
    fontSize: '1.25em',
    marginLeft: '1%',
    marginRight: '1%'
}

const Button = ({name, ...rest}) => {
    return (
        <button {...rest} style={buttonStyle}>{name}</button>
    )
}

export default Button
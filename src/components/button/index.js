const buttonStyle = {
    backgroundColor: 'white',
    color: '#add8e6',
    borderRadius: '5px',
    borderColor: 'white',
    width: '175px',
    height: '50px',
    fontSize: '1.25em'
}

const Button = ({nome}) => {
    return (
        <button style={buttonStyle}>+ {nome}</button>
    )
}

export default Button
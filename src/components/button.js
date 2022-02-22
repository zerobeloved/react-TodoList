import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {

    return (
        <button className="btn"
                onClick={onClick}
                style={{backgroundColor: color}}
                >{text}</button>
    )
}
Button.defaultProps = {
    color: 'green',
    text: 'nihaoya'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button;

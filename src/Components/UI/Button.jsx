import PropTypes from 'prop-types';

const Button = ({
    id,
    type,
    name,
    buttonClassName,
    icon,
    buttonOnClick,
    disabled,
}) => {
    return (

        <div className='relative'>
            <div className=' absolute bottom-8  left-[10vw] right-0 '>
                {icon}
            </div>
        <button
            id={id}
            type={type}
            name={name}
            className={buttonClassName}
            icon={icon}
            onClick={buttonOnClick}
            disabled={disabled}
        >
            {name}
        </button>
        </div>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    icon: PropTypes.element,
    buttonOnClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    id: '',
    type: 'button',
    buttonClassName: 'btn',
    icon: null,
    buttonOnClick: () => {},
    disabled: false,
};

export default Button;

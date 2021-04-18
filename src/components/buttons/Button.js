import { createUseStyles } from 'react-jss';

const Button = ({
  children,
  disabled,
  normal,
  primary,
  text,
  onClick,
  stateCounter,
  ...rest
}) => {
  const ButtonStyle = createUseStyles({
    btn: {
      color: (theme) => theme?.color,
      fontSize: '.9rem',
      fontWeight: 'bold',
      padding: [[10, 24]],
      borderRadius: 25,
      minWidth: 110,
      border: (theme) => theme?.border,
      background: (theme) => theme?.background,
      '&:hover': {
        background: (theme) => theme?.onHover.background,
        color: (theme) => theme?.onHover.color,
        border: (theme) => theme?.onHover.border,
      },
      '&:disabled': {
        background: '#ddd',
        color: 'gray',
        border: 'gray',
        opacity: 0.8,
        cursor: 'not-allowed',
      },
    },
  });

  const customStyle = {
    background: normal ? 'white' : primary ? 'hotpink' : 'gray',
    color: normal ? 'black' : primary ? 'white' : 'white',
    border: `1px solid ${normal ? 'black' : primary ? 'hotpink' : 'black'}`,
    onHover: !disabled
      ? {
          background: normal
            ? 'black'
            : primary
            ? 'rebeccapurple'
            : 'lightgray',
          color: normal ? 'white' : primary ? 'white' : 'white',
          border: `2px solid ${
            normal ? 'black' : primary ? 'rebeccapurple' : 'black'
          }`,
        }
      : {
          background: '#ddd',
          color: 'gray',
          border: 'gray',
          opacity: 0.8,
          cursor: 'not-allowed',
        },
  };

  const classes = ButtonStyle(customStyle);
  return (
    <button disabled={disabled} onClick={onClick} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;

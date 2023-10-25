import './Button.css'

export const Button = (props) => {
  // JSX
  return (
    <button className='button'>
      {props.children}
    </button>
  )
}

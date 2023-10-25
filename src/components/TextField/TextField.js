import './TextField.css'

export const TextField = (props) => {
  // JSX
  return (
    <div className='text-field'>
      <label>{props.label}</label>
      <input placeholder={props.placeholder}></input>
    </div>
  )
}

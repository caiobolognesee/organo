import './SelectBox.css'

export const SelectBox = (props) => {
  // JSX
  return (
    <div className='select-box'>
      <label> {props.label} </label>
      <select>
        {props.items.map(item => <option key={item}> {item} </option>)}
      </select>
    </div>
  )
}

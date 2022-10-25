import './Buttons.css'

const PrimaryButtons = (props) => {
  return (
    <div className='button primary-btn'>
        <a href="/#">{props.children}</a>
    </div>
  )
}

const SecondaryButtons = (props) => {
  return (
    <div className='button secondary-btn'>
        <a href="/#">{props.children}</a>
    </div>
  )
}

export default PrimaryButtons
export {SecondaryButtons}
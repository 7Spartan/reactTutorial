
function Inputcolor({newColor,setNewColor}) {

  return (
        <form className='addForm'>
        <label htmlFor = 'addItem'></label> 
        <input
            autoFocus
            type = 'text'
            placeholder='New color'
            required
            value = {newColor}
            onChange = {(e) => setNewColor(e.target.value)}
        />
    </form>
  )
}

export default Inputcolor

function Header({newColor}) {

  return (
    <div 
      className="rectangle"
      style={{backgroundColor: newColor,width: "120px",height: "150px","margin-left": "35%"}}
    >This is a rectangle!</div>
  )
}

export default Header
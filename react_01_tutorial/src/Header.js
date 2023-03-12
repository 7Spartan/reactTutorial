const Header = ({ title }) => {

  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}
// Having these defaults is helpful when speccing the components
Header.defaultProps = {
  title: "Default title"
}

export default Header;
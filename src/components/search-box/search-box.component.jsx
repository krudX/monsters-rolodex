import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <input type='search' className={`search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler}></input>
    </div>
  )
}

export default SearchBox
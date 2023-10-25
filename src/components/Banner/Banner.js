import './Banner.css'

export const Banner = () => {
  // JSX
  return (
    <header className="banner">
      <img src={require('../../images/banner.png')} alt="O banner da pagina"></img>
    </header>
  )
}

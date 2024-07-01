import Navbar from "./navbar"
import "./layout.scss";

const Layout = (props:any) => {
  return (
    <div className="app">
      <main>
        <Navbar/>
        <main className="content">
          {props.children}
        </main>
      </main>
    </div>
  )
}

export default Layout
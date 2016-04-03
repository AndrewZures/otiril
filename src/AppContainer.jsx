import Navbar from './components/navbar/Navbar'

class AppContainer extends React.Component {

  render() {
    return(
      <div className="main-container">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer

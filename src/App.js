import './assets/scss/style.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import index from 'pages';


function App() {
  return (
      <div className="App">
        <Router>
          <Route path='/' component={index}></Route>
        </Router>
      </div>
  )
}

export default App;

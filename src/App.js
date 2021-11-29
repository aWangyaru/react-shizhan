import React from 'react'
import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/CityList">CityList</Link></li>
        </ul>
        <Route path="/home" component={Home}/>
        <Route path="/cityList" component={CityList}/>
      </div>
    </Router>
  );
}

export default App;

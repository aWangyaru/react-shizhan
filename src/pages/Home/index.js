import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import News from '../News'
export default class Home extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'skyblue', padding: 10}}>Home
        <Route path="/home/news" component={News}></Route>
      </div>
    )
  }
}
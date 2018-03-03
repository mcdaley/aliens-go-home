//-----------------------------------------------------------------------------
// src/containers/Game.js
//-----------------------------------------------------------------------------
import { connect }  from 'react-redux'
import App          from '../App'

const mapStateToProps = state => ({
    message: state.message,
})

const Game = connect(
    mapStateToProps,
)(App)

export default Game

//-----------------------------------------------------------------------------
// src/containers/Game.js
//-----------------------------------------------------------------------------
import { connect }                    from 'react-redux'

import App                            from '../App'

import { 
  startGame, 
  moveObjects,
  shoot,
} from '../actions/index'

const mapStateToProps = state => ({
  angle:      state.angle,
  gameState:  state.gameState,
})

const mapDispatchToProps = dispatch => ({
  startGame: () => {
    dispatch(startGame())
  },
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition))
  },
  shoot: (mousePosition) => {
    dispatch(shoot(mousePosition))
  },
})

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

export default Game

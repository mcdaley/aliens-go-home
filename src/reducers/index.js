//-----------------------------------------------------------------------------
// src/reducers/index.js
//-----------------------------------------------------------------------------
import { START_GAME, MOVE_OBJECTS }   from '../actions'
import startGame                      from './startGame'
import moveObjects                    from './moveObjects'

const initialGameState = {
  started:  false,
  kills:    0,
  lives:    3,
}

const initialState = {
  angle:      45,
  gameState:  initialGameState,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return startGame(state, initialGameState)
    case MOVE_OBJECTS:
      return moveObjects(state, action)
    default:
      return state
  }
}

export default reducer
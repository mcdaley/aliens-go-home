//-----------------------------------------------------------------------------
// src/reducers/shoot.js
//-----------------------------------------------------------------------------
import { calculateAngle } from '../utils/formulas'

function shoot(state, action) {
  // Game is not started
  if(!state.gameState.started) return state

  // Max 2 cannon balls in the air
  const { cannonBalls } = state.gameState
  if(cannonBalls.length === 2) return state

  const { x, y }    = action.mousePosition
  const angle       = calculateAngle(0, 0, x, y)
  const id          = (new Date()).getTime()
  
  const cannonBall  = {
    position: { x: 0, y: 0 },
    angle,
    id,
  }

  return {
    ...state,
    gameState: {
      ...state.gameState,
      cannonBalls: [...cannonBalls, cannonBall],
    }
  }
}

export default shoot
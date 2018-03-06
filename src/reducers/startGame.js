//-----------------------------------------------------------------------------
// src/reducers/startGame.js
//-----------------------------------------------------------------------------

export default (state, initialGameState) => {
  return {
    ...state,
    gameState: {
      ...initialGameState,
      started: true,
    }
  }
}
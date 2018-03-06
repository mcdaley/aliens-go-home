//-----------------------------------------------------------------------------
// src/actions/index.js
//-----------------------------------------------------------------------------
export const START_GAME   = 'START_GAME'
export const MOVE_OBJECTS = 'MOVE_OBJECTS'

export const startGame = () => ({
  type: START_GAME,
})

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
})

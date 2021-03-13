import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext({})

interface StateProvider {
  reducer: (state: object, action: any) => object,
  initialState: object,
  children: React.ReactNode,
}

export const StateProvider = ({ reducer, initialState, children }: StateProvider) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)
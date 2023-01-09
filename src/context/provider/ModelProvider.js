import {useState, useReducer} from 'react';
import ModalContext from '../ModalContext';
import ModelReducer from '../reducers/ModelReducer';
const ModelProvider = (props) => {
  
  const [state, dispatch] = useReducer(
  ModelReducer, {modelStatus : false, current : '',}
    );
  


  return (
      <ModalContext.Provider 
      value = {{
          state,
          dispatch,
      }}>
        {props.children}
      </ModalContext.Provider>
  )
}


export default ModelProvider;
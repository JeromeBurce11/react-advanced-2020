import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {...state, isModelOpen:true, modalContent:'please enter value'}
  }
  throw new Error ('no matching action type')
}

const defaultState = {
  people: [],
  isModelOpen: false,
  modalContent:''
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer,defaultState);
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name) {
      const newItem ={ id:new Date().getTime.toString(),name}
      dispatch({type:'ADD_ITEM',payload:newItem})
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
      // setShowModal(true);
    }
  };
  return (
    <>
      {state.isModelOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person)=>{
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  );
    };

    export default Index;

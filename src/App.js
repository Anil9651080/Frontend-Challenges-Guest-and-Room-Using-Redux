import React from 'react'
import RoomComponent from './components/RoomComponent'
import { Provider } from 'react-redux'
import { store } from './redux/store'


const App = () => {
  return (
    <Provider store={store}>
      <RoomComponent />
    </Provider>
  )
}

export default App

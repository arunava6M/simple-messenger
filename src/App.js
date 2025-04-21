import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import ChatWindow from './components/ChatWindow'
import { select } from './store/features/User/slice'

const Layout = styled.div`
  display: flex;
`

const UserWindow = styled.div`
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #6495ED;
`

const Friend = styled.div`
  padding: 10px;
  background-color: #ADD8E6;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
`
function App() {
 const friends = useSelector(state => state.users.friendList)
 console.log(friends)
 const dispatch = useDispatch()
 const handleUserSelction = (id) => {
  dispatch(select(id))
 }
  
  return (
    <Layout>
      <UserWindow>
        {friends.map(({name, id},index) => <Friend key={index} onClick={() => handleUserSelction(id)}>
          {name}
        </Friend>)}
      </UserWindow>
      < ChatWindow />
    </Layout>
  );
}

export default App;

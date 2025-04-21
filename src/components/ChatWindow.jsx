import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {send} from '../store/features/Chat/slice'

const Layout = styled.div`
  overflow: hidden;
  width: 100%;
`

const Footer = styled.div`
  box-sizing: border-box;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #6495ED;
  padding: 10px 20px;
  height: 50px;
  display: flex;
`

const Header = styled.div`
box-sizing: border-box;
position: sticky;
top: 0;
width: 100%;
background-color: #6495ED;
padding: 10px;
height: 50px;
z-index: 1;
`
const Main = styled.div`
  top:   50px;
  bottom: 50px;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  height: calc(100vh - 100px);
  transform: rotate(180deg);
  `
const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-right: 10px;
`

const Message = styled.div`
display: flex;
flex-direction: column;
align-self: ${({currentUser}) => currentUser ?  'self-start' : 'self-end' };
padding: 10px;
width: fit-content;
max-width: 500px;
background-color: #89CFF0;
margin: 10px;
border-radius: 8px;
transform: rotate(180deg);
`

const Name = styled.div`
  align-self: flex-end;
  font-size: 8px;
`

const ChatWindow = () => {
  const {currentUser, selectedFriend} = useSelector(state => {
    const currentUser = state.users.self
    const id = state.users.selctedUser
    const selectedFriend = state.users.friendList.find(each => each.id == id)
    return ({
      currentUser,
      selectedFriend
    })
  })
  console.log(selectedFriend)
  const chats = useSelector(state => state.chat[selectedFriend.id])
  const dispatch = useDispatch()
  console.log('chats: ', chats)
  const [input, setInput] = useState('')
  const chatRef = useRef(null)
  useEffect(() => {
    if(chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats])
  const onInputEnter = () => {
    if(input == '') return;
    dispatch(send({
      chatId: selectedFriend.id,
      sender: currentUser.id,
      message: input
    }))
    setInput('')
  }
  const getName = (id) => {
    if(id === currentUser.id) return 'You'
    return selectedFriend.name
  }
  
  return (
    <Layout>
      <Header>
        {selectedFriend.name}
      </Header>
      <Main>
      <ChatWrapper>
        {chats && chats.map(({message, sender}, index) => 
        <Message key={index} currentUser={sender === currentUser.id}>
          <Name>{getName(sender)}</Name>
          {message}
          </Message>
      )}
      <div ref={chatRef} />
      </ChatWrapper>
      </Main>
      <Footer>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={onInputEnter}>Send</button>
      </Footer>
    </Layout>
  );
}

export default ChatWindow;

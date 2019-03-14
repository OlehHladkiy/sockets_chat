import React, {useState, useEffect} from 'react';
import LoginModal from '../LoginModal';
import Messanger from '../Messanger';
import  axios from 'axios';
import io from 'socket.io-client';

var socket = io('https://calm-citadel-92548.herokuapp.com');

const App = () => {
      const [userName, setUserName] = useState({value: '', valid: true, id: 0});
      const [users, setUsers] = useState(0);
      const [visible, setVisible] = useState(true);
      const [messages, setMessages] = useState([]);

      useEffect(() => {
            document.getElementById('msg-body').scrollTop = document.getElementById('msg-body').scrollHeight;
      }, [messages.length])

      const handleOk = (e) => {
            e.preventDefault();
            if(!userName.value){
                  setUserName({...userName, valid: false});
            } else {
                  socket.emit('user:request', userName.value.toLowerCase());
                  setVisible(false)
            }
      };

      const userAccept = (msg) => {
            setUserName({...userName, value: msg.user, id: msg.id});
            setUsers(msg.users);
            axios.get('https://calm-citadel-92548.herokuapp.com/api/messages')
            .then(res => setMessages((prevMsg) => [...prevMsg, ...res.data]))
            .catch(err => console.log(err))
      }
      
      const userJoin = (userCount, userName) => {
            setUsers((prevUsers) => userCount);
            let msg = {
                  type: 'status',
                  value: `${userName} joined`
            };
            setMessages((prevMsg) => [...prevMsg, msg] );
      }
      
      const userLeft = (userCount, userName) => {
            setUsers((prevUsers) => userCount);
            let msg = {
                  type: 'status',
                  value: `${userName} disconnected`
            }
            setMessages((prevMsg) => [...prevMsg, msg] );
      }

      const messageReceive = (msg) => {
            axios.post('https://calm-citadel-92548.herokuapp.com/api/messages', msg)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            setMessages((prevMsg) => [...prevMsg, msg] );
      }

      const messageSend = (msg) => {
            msg.user = userName.value;
            socket.emit('send:message', msg);
      }

      useEffect(() => {
            socket.on('user:accept', userAccept);
            socket.on('user:join', userJoin);
            socket.on('user:left', userLeft);
            socket.on('send:message', messageReceive);

            return () => {
                  socket.emit('user:left', userName.value);
            }
      }, [])

      return (
            <>
                  <Messanger
                        userName={userName.value}
                        messages={messages}
                        onSubmitMessage={messageSend}
                        users={users}
                  />
                  <LoginModal
                        userName={userName}
                        setUserName={setUserName}
                        visible={visible}
                        handleOk={handleOk}
                  />
            </>
      );
}

export default App;

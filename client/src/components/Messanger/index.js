import React, { useState } from 'react';
import { 
            MainContainer, 
            ChatContainer, 
            ControlContainer, 
            FormItem, 
            MessangerBody, 
            Header
      } from './style';
import { Form, Input, Button } from 'antd';
import Message from './Message';

const Messanger = ({messages, onSubmitMessage, userName, users}) => {
      const [message, setMessage] = useState('');
      
      const onSubmit = (e) => {
            e.preventDefault();
            
            let newMessage = {
                  type: 'message',
                  text: message,
                  time: 0,
                  user: '',
                  id: ''
            }

            if(newMessage.text !== ''){
                  onSubmitMessage(newMessage);
                  setMessage('');
            }
      }
      const renderMessages = () => {
           return messages.map((item, i) => {  return (
                  <Message
                        item={item}
                        i={i}
                        key={i}
                        userName={userName}
                  />
            )})
      }

      return (
            <MainContainer>
                  <ChatContainer>
                        <Header>    
                              <span>Chatroom</span>
                              <span>User Name : {userName}</span>
                              <span>{users} members</span>
                        </Header>
                        <MessangerBody id="msg-body" scroll={true}>
                              {
                                    renderMessages()
                              }
                        </MessangerBody>
                        <ControlContainer>
                              <Form onSubmit={onSubmit}>
                                    <FormItem>
                                          <Input size='large' value={message} onChange={(e) => setMessage(e.target.value)}/>
                                    </FormItem>
                                    <Form.Item>
                                          <Button
                                                size='large'
                                                type='primary'
                                                onClick={(e) => onSubmit(e)}
                                          >
                                                Submit
                                          </Button>
                                    </Form.Item>
                              </Form>
                        </ControlContainer>
                  </ChatContainer>
            </MainContainer>
      );
}

export default Messanger;

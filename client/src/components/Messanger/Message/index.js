import React from 'react';
import { MessageContainer, InfoMessage, TimeSection, MessageStyled, MessageStatus} from './style';

const Message = ({item, i, userName}) => {
      return (
            <MessageContainer key={i} user={userName.toLowerCase() === item.user}>
                        {item.type === 'status' ?
                              <MessageStyled>
                                    <MessageStatus>
                                          {item.value}
                                    </MessageStatus>
                              </MessageStyled>
                        :
                        <MessageStyled>
                              <InfoMessage>
                                    <span 
                                          style={{fontSize: '17px', 
                                          color: "blue"}}
                                    >
                                          {userName.toLowerCase() === item.user ? null : item.user}
                                    </span>
                                    <span 
                                          style={{fontSize: '13px', wordWrap: "break-word"}}
                                    >
                                          {item.value}
                                    </span>
                              </InfoMessage>
                              <TimeSection>{`${new Date(item.time.toString()).getHours()}:${new Date(item.time.toString()).getMinutes()}`}</TimeSection>
                        </MessageStyled>
                        }
            </MessageContainer>
      );
}

export default Message;

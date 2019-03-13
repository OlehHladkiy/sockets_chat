import React from 'react';
import { MessageContainer, InfoMessage, TimeSection, MessageStyled, MessageStatus} from './style';

const Message = ({item, i, userName}) => {
      return (
            <MessageContainer key={i} user={userName === item.user}>
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
                                          {userName === item.user ? null : item.user}
                                    </span>
                                    <span 
                                          style={{fontSize: '13px', wordWrap: "break-word"}}
                                    >
                                          {item.value}
                                    </span>
                              </InfoMessage>
                              <TimeSection>{item.date ? `${new Date(item.date).getUTCHours()}:${new Date(item.date).getUTCMinutes()}`:null}</TimeSection>
                        </MessageStyled>
                        }
            </MessageContainer>
      );
}

export default Message;

import styled from 'styled-components';

export const MessageContainer = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: ${props => props.user ? "flex-end" : "flex-start"};
`

export const InfoMessage = styled.div`
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
`

export const TimeSection = styled.div`
      display: flex;
      margin-top: 40px;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      width : 50px;
      font-size: 10px;
`

export const MessageStyled = styled.div`
      height: auto;
      width: auto;
      max-width: 100%;
      display: flex;
      
      box-shadow: 1px 1px 10px silver;
      border-radius: 5px;
      padding: 5px;
      margin: 5px 0 5px 0;
`

export const MessageStatus = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: blueviolet;
`
import styled from 'styled-components';
import {Form} from 'antd';

export const MainContainer = styled.main`
      padding: 50px 50px 10px 50px; 
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
`; 

export const ChatContainer = styled.div`
      padding: 5px;
      width: 70%;
      height: 100%;
      box-shadow: 1px 1px 10px silver;
      border-radius: 5px;
`;

export const ControlContainer = styled.div`
      height: 10%;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      form {
            display: flex;

            div {
                  margin: 0;
                  padding: 0;
            }
      }
`; 

export const FormItem = styled(Form.Item)`
      width: 100%;
`

export const Header = styled.header`
      height: 10%;
      color: white;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      background-color: rgb(136, 183, 255);
`;

export const MessangerBody = styled.div`
      height: 80%;
      padding-left: 7px;
      padding-right: 7px;
      overflow-y: ${props => props.scroll ? 'scroll' : 'initial'};
`

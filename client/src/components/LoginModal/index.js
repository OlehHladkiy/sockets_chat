import React from 'react';
import {Form, Input, Icon, Modal} from 'antd';

const LoginModal = ({userName, setUserName, visible, handleOk}) => {
      return (
            <Modal
                  cancelButtonProps={{style: { display: "none" }}}
                  title="Welcome to chat"
                  visible={visible}
                  onOk={handleOk}
            >
                  <Form onSubmit={handleOk} style={{width: "100%"}}>
                        <p>To connect chat, you need enter your nickname. It was visible for other chat members!</p>
                        <Form.Item
                              validateStatus= {!userName.valid ? "error" : null}
                              help={!userName.valid ? "Should be not empty" : null}
                        >
                              <Input 
                                    autoFocus={true}
                                    value={userName.value}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                                    placeholder="Input your username"
                                    onChange={(e) => setUserName({...userName, value: e.target.value, valid: true})}
                              />
                        </Form.Item>
                  </Form>
            </Modal>
      );
}

export default LoginModal;

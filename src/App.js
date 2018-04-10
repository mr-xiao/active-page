import React, { Component } from 'react';
import './App.css';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { List, Radio, Flex} from 'antd-mobile';
import bg from './images/h5_register.d3dbdc30.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={bg}/>
          <div className="main">
              <div className="contains">
                  <div className="login">
                      <div className="phone">
                          <WingBlank>
                              <input type="text" name="phone" placeholder="请输入手机号"/>
                          </WingBlank>
                      </div>
                      <div className="code">
                          <div className="code2">
                              <WingBlank>
                                  <input type="text" name="code" placeholder="请输入验证码"/>
                              </WingBlank>
                          </div>
                          <a><span>获取验证码</span></a>
                      </div>
                  </div>
                  <div className="read">
                      {/*<input type="radio" name="read"/>*/}
                      <p>我已阅读并接受<span>造票用户服务协议</span></p>
                  </div>
                  <div className="registered">
                      <a><span>立即注册</span></a>
                  </div>
                  <div className="download">
                      <a href="https://h5.izaopiao.com/zaopiao/appDownload"><span>去下载造票APP</span></a>
                  </div>

              </div>

          </div>
      </div>
    );
  }
}

export default App;

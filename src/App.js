import React, { Component } from 'react';
import './App.css';
import 'animate.css/animate.min.css'
import $ from 'jquery';
import axios from 'axios';
import bg from './images/h5_register.d3dbdc30.png';
import { NavBar,Icon,Toast,WingBlank } from 'antd-mobile';

class App extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            phone:'1',//1代表不是正确手机号，2代表错误手机号，3代表正确手机号，4代表空手机号
            code:false,
            read:false,
            content:false
        };
    }
    change(e){
        let value = e.target.value;
        console.log(value);
        let phone = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
        if (phone.test(value))
        {
            this.setState({phone:'3'});
        }
    }

    handleClick() {
        this.setState({read: !this.state.read});
    }
    showErrorPhone(){
        Toast.fail('错误的手机号码',2)
}
    showPhone(){
        Toast.fail('请输入正确的手机号码',3)
    }
    showInPhone(){
        Toast.fail('请输入手机号码',2)
    }
    showRead(){
        Toast.info('请先阅读并同意“造票协议”',3)
    }

    Show(){
        $(".drawer").css("display","block");
    }

    Hide(){
        $(".drawer").css("display","none");
    }

    Code(){
        if (this.state.phone==='1')
        {
            this.showPhone();
        }else if (this.state.phone==='2')
        {
            this.showErrorPhone();
        }else if (this.state.phone==='3')
        {
            axios.get('http://localhost:8000/posts')
                .then(function (response) {
                    let p = response.data.title;
                    console.log(p);
                    if (p ==='json-server')
                    {
                        Toast.fail('请输入手机号码',2)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }else {
            this.showInPhone();
        }
    }

    Registered(){
        if (this.state.read===false)
        {
            this.showRead();
        }else if (this.state.phone==='1')
        {
            this.showPhone();
        }
    }

  render() {
    return (
      <div className="App">
          {
              this.state.content === true &&(
                  <div className="drawer animated slideInRight">
                      <NavBar mode="light"
                              icon={<Icon type="left" />}
                              onLeftClick={() => this.setState({content:false})}>
                          造票用户注册及服务协议
                      </NavBar>
                      <div className="content">
                          <WingBlank size="md">
                              <span>本协议由造票会员与重庆派纳盛世科技有限公司充分了解并共同缔结，
                                  本协议具有合同效力。本协议中协议双方合称协议方，重庆派纳盛世科技有限公司在协议中亦称为“造票”。
                                  本协议中“造票”指由重庆派纳盛世科技有限公司运营的造票APP平台及官方网站。
                              本协议由造票会员与重庆派纳盛世科技有限公司充分了解并共同缔结，
                                  本协议具有合同效力。本协议中协议双方合称协议方，重庆派纳盛世科技有限公司在协议中亦称为“造票”。
                                  本协议中“造票”指由重庆派纳盛世科技有限公司运营的造票APP平台及官方网站。
                              本协议由造票会员与重庆派纳盛世科技有限公司充分了解并共同缔结，
                                  本协议具有合同效力。本协议中协议双方合称协议方，重庆派纳盛世科技有限公司在协议中亦称为“造票”。
                                  本协议中“造票”指由重庆派纳盛世科技有限公司运营的造票APP平台及官方网站。
                              本协议由造票会员与重庆派纳盛世科技有限公司充分了解并共同缔结，
                                  本协议具有合同效力。本协议中协议双方合称协议方，重庆派纳盛世科技有限公司在协议中亦称为“造票”。
                                  本协议中“造票”指由重庆派纳盛世科技有限公司运营的造票APP平台及官方网站。
                              本协议由造票会员与重庆派纳盛世科技有限公司充分了解并共同缔结，
                                  本协议具有合同效力。本协议中协议双方合称协议方，重庆派纳盛世科技有限公司在协议中亦称为“造票”。
                                  本协议中“造票”指由重庆派纳盛世科技有限公司运营的造票APP平台及官方网站。
                              本协议由造票会员与重庆派纳盛世科技有限公司充分了解并共同缔结，
                                  本协议具有合同效力。本协议中协议双方合称协议方，重庆派纳盛世科技有限公司在协议中亦称为“造票”。
                                  本协议中“造票”指由重庆派纳盛世科技有限公司运营的造票APP平台及官方网站。</span>
                          </WingBlank>
                      </div>
                  </div>

              )
          }
                  <div>
                      <img src={bg}/>
                      <div className="main">
                          <div className="contains">
                              <div className="login">
                                  <div className="phone">
                                      <WingBlank>
                                          <input type="text" onChange={this.change} maxLength="11" id="phone" placeholder="请输入手机号"/>
                                      </WingBlank>
                                  </div>
                                  <div className="code">
                                      <div className="code2">
                                          <WingBlank>
                                              <input type="text" id="code" placeholder="请输入验证码"/>
                                          </WingBlank>
                                      </div>
                                      <a onClick={()=>this.Code()}><span>获取验证码</span></a>
                                  </div>
                              </div>
                              <div className="read">
                                  <span><input className="inputCheck" type="checkbox" id="check" onChange={()=>this.handleClick()}/><label for="check"></label></span>
                                  我已阅读并接受<a onClick={()=>this.setState({content:true})}>造票用户服务协议</a>
                              </div>
                              <div className="registered">
                                  <a onClick={()=>this.Registered()}><span>立即注册</span></a>
                              </div>
                              <div className="download">
                                  <a href="https://h5.izaopiao.com/zaopiao/appDownload"><span>去下载造票APP</span></a>
                              </div>

                          </div>

                      </div>
                  </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './index.less';

const HeaderLogin = () => (
  <div className="d-flex flex-justify-between">
      <Button type="primary"><Link to="/login">登录</Link></Button>
      <Button type="primary"><Link to="/signUp">注册</Link></Button>
  </div>
);

export default HeaderLogin;
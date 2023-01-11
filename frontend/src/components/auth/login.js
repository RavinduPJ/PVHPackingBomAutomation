import React from 'react';
import { Col, Row , Typography, Input, Button } from 'antd';
import 'antd/dist/antd.min.css';
import Background_image from '../../images/bg1.jpg';
import {LockFilled} from '@ant-design/icons';
import CustomNotification from '../antdalert';
import { Redirect } from 'react-router-dom';

const { Title } = Typography;



const Login = () => {

    const [VALUE_USERNAME, setVALUE_USERNAME] = React.useState("");
    const [VALUE_PASSWORD, setVALUE_PASSWORD] = React.useState("");
    const [redirect, setRedirect] = React.useState(false);

    //localStorage.setItem('session_api','http://localhost:3500');
    //var apiurl = localStorage.getItem('session_api');

    const API_URL = process.env.REACT_APP_API_ENDPOINT;
    const APP_VERSION = process.env.REACT_APP_VERSION;

    const OnChange_username = (e) => {
        setVALUE_USERNAME(e.target.value);
      };
    
      const OnChange_password = (e) => {
        setVALUE_PASSWORD(e.target.value);
      };

    function onclick()
    { 

        if(VALUE_USERNAME === "")
        {
            CustomNotification('error','Please Enter Your Email!');
            return;
        }

        if(VALUE_PASSWORD === "")
        {
            CustomNotification('error','Please Enter Your Password!');
            return;
        }

        const sendOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"username" : VALUE_USERNAME , "password" : VALUE_PASSWORD})
          };

          fetch(`${API_URL}/usermanage/checkuser`,sendOptions)
        .then(response => response.json())
        .then(data => 
        {
            if(data.Type === "SUCCESS")
            { 
              localStorage.setItem('session_username',data.Data[0].uname);
              localStorage.setItem('session_isadmin',data.Data[0].uadmin);
              localStorage.setItem('session_issuperuser',data.Data[0].usuperuser);
              localStorage.setItem('session_isoc',data.Data[0].uperm_oc);
              localStorage.setItem('session_istp',data.Data[0].uperm_tp);
              localStorage.setItem('session_isgtn',data.Data[0].uperm_gtn);
              localStorage.setItem('session_version',APP_VERSION);
              setRedirect(true);
            }
  
            if(data.Type === "ERROR")
            {
                localStorage.clear();
                CustomNotification('error',data.Msg);
                return;
              
            }
  
        })
        .catch(error => 
          {
            CustomNotification('error',error);
            return;
          });

    }

    const renderRedirect = () => {
        if (redirect) 
        {
          return <Redirect to={"/dashboard"} />
        }
        else
        {
          localStorage.clear();
          return <Redirect to={"/login"} />
        }
 
    
    }

    return (<><Row>
        <Col span={8} style={{backgroundColor:"#f0f5ff"}}>
        {renderRedirect()}
            <div style={{width:"auto",marginLeft:"75px",marginRight:"50px",marginTop:"20vh"}}>
                <p style={{fontSize:"20px"}}><LockFilled /> USER AUTHENTICATION</p>
                <br/>
                <p style={{color:"#030852"}}>Enter your brandix email</p>
                <Input placeholder="devonp@brandix.com" onChange={OnChange_username}/>
                <br/><br/>
                <p style={{color:"#030852"}}>Enter your password</p>
                <Input placeholder="******" onChange={OnChange_password}/>
                <br/><br/>
                <Button onClick={()=>onclick()} type="primary" size="middle">SIGN IN</Button>

            </div>
          
        </Col>
        <Col span={16} style={{backgroundImage:`url(${Background_image})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        height:'100vh'}}>
          <Title style={{fontSize:"65px",color:"white", paddingLeft:"100px",paddingRight:"100px",paddingTop:"20vh"}}>PVH PACKING BOM AUTOMATION TOOL</Title>
        </Col>
      </Row></>);
};

export default Login;
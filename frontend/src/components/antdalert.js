import { notification } from 'antd';
import 'antd/dist/antd.min.css';

const CustomNotification = (type,messagedesc) => {

    if(type === 'success')
    {
        notification[type]({
            message: 'SUCCESS',
            description : messagedesc,
            style: { backgroundColor: "#f6ffed"},
          });
    }
    else if(type === 'error')
    {
        notification[type]({
            message: 'ERROR',
            description : messagedesc,
            style: { backgroundColor: "#fff1f0"},
          });
    }
    else if(type === 'info')
    {
        notification[type]({
            message: 'INFO',
            description : messagedesc,
            style: { backgroundColor: "#e6f7ff"},
          });
    }
    else if(type === 'warning')
    {
        notification[type]({
            message: 'WARNING',
            description : messagedesc,
            style: { backgroundColor: "#fff7e6"},
          });
    }
    
  };

  export default CustomNotification;

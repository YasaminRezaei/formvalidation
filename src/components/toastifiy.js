import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = (type,text) => {
    if(type ==="success"){
        toast.success(text);
    }
    else{
        toast.error(text);
    }
}
export default notify;
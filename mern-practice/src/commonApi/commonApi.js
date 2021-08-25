import axios from 'axios';
import { serverhost } from './Link';

export function postData(apilink, data, onSuccess, onFail) {
    console.log(data, 'data');
    axios.post(serverhost + apilink, data).then((response) => {
        if (response.data.success) {
            return onSuccess(response.data);
        } else return onFail(response.data);
    });
}

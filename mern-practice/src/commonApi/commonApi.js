import axios from "axios";
import { serverhost } from "./Link";

export function postData(apilink, data, onSuccess, onFail) {
    console.log(data, "data");
    axios.post(serverhost + apilink, data).then((response) => {
        if (response.data.success) {
            return onSuccess(response.data);
        } else return onFail(response.data);
    });
}

export function getData(apilink, headers, onSuccess, onFail) {
    console.log(headers, "data");
    try {
        axios.get(serverhost + apilink, headers).then((response) => {
            if (response.data.success) {
                console.log(response.data);
                return onSuccess(response.data);
            } else return onFail(response.data);
        });
    } catch {
        console.log("error");
        return onFail({ success: false });
    }
}

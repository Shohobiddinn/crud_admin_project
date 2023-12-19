import util from "./util";
import router from "../router/index";
import store from "../store";

export default function handleError(error) {
  const status = error.response?.status;
  const detail = error.response?.data?.detail;
  console.log(error);
  if (error.code == "ERR_NETWORK") {
    util.toast("warning", "Internet bilan aloqa yo'q!");
  } else if (status)
    if (status == 400) {
      if (detail == "Not authenticated") {
        store.dispatch("setUser", null);
        router.push("/login");
      } else util.toast("warning", detail);
    } else if (status == 401) {
      store.dispatch("setUser", null);
      router.push("/login");
    }else if(status == 422){
      util.toast("error", error.message);
    }
}


import axios from "axios";

const axiosinstance=axios.create();
axiosinstance.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;

export default axiosinstance;
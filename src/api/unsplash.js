import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wBvkFHuKED9ru4elMpdaq9gkP0lPKA3D064EK-nWTDg",
  },
});

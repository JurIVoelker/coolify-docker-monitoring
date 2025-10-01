import axios from "axios";
import "dotenv/config";

const socketPath = "/var/run/docker.sock";

export const getContainers = async () => {
  const host = process.env.LOCAL_URL || "http://localhost";

  const response = await axios({
    method: "get",
    url: `${host}/containers/json?all=true`,
    socketPath: socketPath,
  });
  return response.data;
}

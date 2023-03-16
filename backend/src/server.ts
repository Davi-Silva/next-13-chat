import server from "./app";
import { APP_NAME, PORT } from "./constants/envs";

server.listen(PORT, () => {
  console.log(`${APP_NAME} is listening on port: ${PORT}`);
});

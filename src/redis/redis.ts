import { createClient } from "redis";

 let client = createClient();
  export const redisFunction: any()=>{
    client.connect()
    .then(() => {
        console.log("Redis connected");
    });
  }
  export default client
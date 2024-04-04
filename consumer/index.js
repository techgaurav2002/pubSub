import RedisConfig from "./config.js";

const redisConfig = new RedisConfig();
redisConfig.consume("channel1", (message) => {
  console.log("📨 Received message:", message);
});

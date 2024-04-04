import { Redis } from "ioredis";

class RedisConfig {
  constructor() {
    this.redis = new Redis({
      host: "localhost",
      port: 6379,
    });
  }

  async produce(channel, message) {
    await this.redis.publish(channel, message);
  }
}

export default RedisConfig;

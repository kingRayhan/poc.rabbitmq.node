import * as amqp from "amqplib";

(async () => {
  const connection = await amqp.connect("amqp://localhost", {
    clientProperties: { connection_name: "consumer1" },
  });
  const channel = await connection.createChannel();

  channel.assertQueue("c1.user_created");

  channel.consume("c1.user_created", (msg) => {
    console.log(msg);
    channel.ack(msg!);
  });
})();

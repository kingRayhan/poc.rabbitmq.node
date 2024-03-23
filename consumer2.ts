import * as amqp from "amqplib";

(async () => {
  const connection = await amqp.connect("amqp://localhost", {
    clientProperties: { connection_name: "consumer2" },
  });
  const channel = await connection.createChannel();

  channel.assertQueue("c2.user_created");

  channel.consume("c2.user_created", (msg) => {
    console.log(msg?.content.toString());
    channel.ack(msg!);
  });
})();

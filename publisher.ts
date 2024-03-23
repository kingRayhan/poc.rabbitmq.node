import * as amqp from "amqplib";

(async () => {
  const connection = await amqp.connect("amqp://localhost", {
    clientProperties: { connection_name: "publisher" },
  });
  const channel = await connection.createChannel();

  // ----------------- Publish message using default Exchange -----------------
  // await channel.assertQueue("user_created");
  // channel.sendToQueue("user_created", Buffer.from("msg 1"), {
  //   type: "topic",
  // });

  // ----------------- Publish message using named Exchange -----------------
  // await channel.assertExchange("user_created_exchange", "direct");
  // await channel.assertQueue("user_created");
  // // bind exchange to queue with routing_key
  // await channel.bindQueue(
  //   "user_created", // <- queue
  //   "user_created_exchange", // <- exchange name
  //   "user_created_route" // <- routing_key
  // );

  // channel.publish(
  //   "user_created_exchange",
  //   "user_created_route",
  //   Buffer.from("msg 1")
  // );

  // // ----------------- Publish message using named Exchange FANOUT -----------------
  // // Only difference between direct and fanout is:
  // // In Fanout all queue will get msg from exchange those are binded.
  // // In Fanout no routing key is needed to bind queues with exchange

  await channel.assertExchange("user_created_exchange", "fanout");
  await channel.assertQueue("user_created.c1");
  await channel.assertQueue("user_created.c2");

  // // bind exchange to queue
  await channel.bindQueue(
    "user_created.c1", // <- queue
    "user_created_exchange", // <- exchange name
    ""
  );
  await channel.bindQueue(
    "user_created.c2", // <- queue
    "user_created_exchange", // <- exchange name
    ""
  );

  channel.publish(
    "user_created_exchange",
    "",
    Buffer.from(`{id: '${Date.now()}', name:'Rayhan'}`)
  );

  // // ----------------- Publish message using named Exchange TOPIC -----------------
  await channel.assertExchange("topic:user_created", "topic");
  await channel.assertQueue("c1.user_created");
  await channel.assertQueue("c2.user_created");

  // bind exchange to queue
  await channel.bindQueue(
    "c1.user_created", // <- queue
    "topic:user_created", // <- exchange name
    "*.user_created" // <- routing_key
  );

  await channel.bindQueue(
    "c2.user_created", // <- queue
    "topic:user_created", // <- exchange name
    "*.user_created" // <- routing_key
  );

  channel.publish(
    "topic:user_created",
    "create.user_created",
    Buffer.from(`{id: '${Date.now()}', name:'Rayhan'}`)
  );
})();

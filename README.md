# Keywords
### Queue
The queue is like a listening port similar to a socket channel. Every consumer must need to have a unique queue name. For example `user_created`, `log_created`

### Exchange
Exchange is like a postman for your message. Exchange is responsible for pushing messages to one or multiple queues based on exchange type.


### Exchange types
- direct
- fanout
- topic
- header


### Direct Exchange
Direct exchange refers to sending a message to a specific queue using a routing key. In exchange type `direct`, multiple queues bind with exchange with a unique `routing_key`. When we publish a message to `Direct Exchange`, we must need to provide a routing_key as well to decide in which queue the message will go.


![CleanShot 2024-03-21 at 2  32 29@2x](https://github.com/kingRayhan/rabbitmq-playground/assets/7611746/36fd695d-5d63-4afd-80ea-51e690b7ede6)
![CleanShot 2024-03-21 at 2  33 06@2x](https://github.com/kingRayhan/rabbitmq-playground/assets/7611746/1a04580b-24a1-480e-b423-35301141b1f8)


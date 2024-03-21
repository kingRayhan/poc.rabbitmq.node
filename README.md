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

![CleanShot 2024-03-21 at 4  22 42@2x](https://github.com/kingRayhan/rabbitmq-playground/assets/7611746/d1d80eb7-67cf-496e-a78d-e97440dce9b8)
![CleanShot 2024-03-21 at 4  23 54@2x](https://github.com/kingRayhan/rabbitmq-playground/assets/7611746/88081136-705f-4c77-b60f-299cc93286ea)


### Fanout Exchange
This exchange is intended to send messages to multiple queues simultaneously. Unlike the Direct exchange type, Fanout exchange binds with several queues without any `routing_key`. So we don't need to provide any `routing_key` while publishing a message to fanout exchange as it doesn't bind queues with any routing_key.

![CleanShot 2024-03-21 at 4  24 29@2x](https://github.com/kingRayhan/rabbitmq-playground/assets/7611746/b4281b27-4248-4826-922c-eb041fb74761)



### Topic Exchange
![CleanShot 2024-03-21 at 4  26 12@2x](https://github.com/kingRayhan/rabbitmq-playground/assets/7611746/2c9a8e7d-d0e6-4141-954c-0edb7421b424)

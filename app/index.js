import Redis from 'ioredis'

const redis = new Redis()

redis.set('name', 'Mohamed')

redis.get('name', (err, result) => {
  console.log(result)
})

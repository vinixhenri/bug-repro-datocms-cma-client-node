const serverless = require('serverless-http')
const express = require('express')
const { buildClient } = require('@datocms/cma-client-node')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/health', (req, res, next) => {
	return res.status(200)
})

app.use((req, res, next) => {
	return res.status(404).json({
		error: 'Not Found',
	})
})

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`Local server running on http://localhost:${port}`))
  setInterval(() => {
  	console.log('requesting')
  	fetch(`http://localhost:${port}`).then(r => console.log(r)).catch(e => console.error(e))
  }, 1000)
  setTimeout(() => {
    console.log('Shutting down after 10 seconds...')
    process.exit(0)
  }, 10000)
}

module.exports.handler = serverless(app)

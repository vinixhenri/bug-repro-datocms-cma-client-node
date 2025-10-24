const serverless = require('serverless-http')
const express = require('express')
const { buildClient } = require('@datocms/cma-client-node')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
	return res.status(404).json({
		error: 'Not Found',
	})
})

module.exports.handler = serverless(app)

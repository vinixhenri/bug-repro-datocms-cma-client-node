import os from "node:os"
import path from "node:path"
import { buildClient } from '@datocms/cma-client-node'

(async () => {
	console.log("Node:", process.version)
	console.log("Platform:", process.platform, os.release(), os.arch())
	console.log("CWD:", process.cwd())
	console.log("Path.sep:", path.sep)
	console.log("EOL sample:", JSON.stringify(os.EOL))
})()

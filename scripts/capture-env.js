import fs from "node:fs"
import os from "node:os"

const info = {
	node: process.version,
	platform: process.platform,
	release: os.release(),
	arch: os.arch(),
	env: {
		TERM: process.env.TERM,
		SHELL: process.env.SHELL,
		ComSpec: process.env.ComSpec,
		npm_config_shell: process.env.npm_config_shell,
	},
	versions: process.versions,
}

fs.mkdirSync("artifacts", { recursive: true })
fs.writeFileSync("artifacts/env.json", JSON.stringify(info, null, 2))
console.log("Wrote artifacts/env.json")

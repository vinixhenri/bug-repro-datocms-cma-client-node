# Windows-only Reproduction for datocms cma-client-node

**Goal:** Minimal steps to reproduce a bug that happens only on Windows.

## Local steps (Windows)
```powershell
git clone https://github.com/vinixhenri/bug-repro-datocms-cma-client-node.git
cd bug-repro-datocms-cma-client-node
# Ensure Node version matches .nvmrc (or use nvs/volta/nvm-windows)
npm ci
npm test

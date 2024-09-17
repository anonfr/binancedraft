#!/bin/bash

# Remove package-lock.json and node_modules
rm -rf package-lock.json node_modules

# Install dependencies
npm install

# Run the build command
npm run build
#!/bin/bash

cd packages/stackedui || exit

# Bump patch version
pnpm version patch

# Build the package
pnpm run build

# Publish to npm with public access
npm publish --access public

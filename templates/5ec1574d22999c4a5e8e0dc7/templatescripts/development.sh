#!/bin/bash
echo 'Starting PNPM Install'
echo $PWD
echo $NODE_ENV
export NODE_ENV=development
pnpm install --prefer-offline
echo 'Finished PNPM Install'
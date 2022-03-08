echo 'Starting PNPM Install'
echo $PWD
echo $NODE_ENV
export NODE_ENV=development
pnpm install
echo 'Finished PNPM Install, starting Build'
echo y | pnpm run build
echo 'Finished Build'
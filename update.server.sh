
rm -rf dist;
env NODE_ENV=production ./node_modules/.bin/webpack --config ./webpack.static.config.js --progress --profile --colors
rm -rf dist-live;
cp -r dist dist-live;

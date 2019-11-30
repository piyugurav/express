# !/bin/bash
npm install
pm2 describe server > /dev/null
$?
#if running ==0;
if[$? -ne 0]; then
echo "starting the server"
pm2 start server.js
else
echo "Restarting the server"
pm2 restart server.js
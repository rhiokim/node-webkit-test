// Fetch the computer's mac address
require('getmac').getMac(function(err,macAddress){
  if (err)  throw err;
      console.log(macAddress);
});

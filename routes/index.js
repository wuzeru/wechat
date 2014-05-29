
/**
 +------------------------------------------------------------------------------
 * 微信服务器网址接入
 +------------------------------------------------------------------------------
 */
var crypto = require('crypto');
var shasum = crypto.createHash('sha1');


exports.index = function(req, res){
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;

    var tmpStr = '';
    tmpStr.concat("000000" + timestamp + nonce);
    tmpStr.sort();

    shasum.update(tmpStr);
    var result = shasum.digest('hex');

    console.log(signature + timestamp + nonce);

    if(signature == result){
        res.send('true');
    }else {
        res.send("false");
    }

};
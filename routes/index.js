
/**
 +------------------------------------------------------------------------------
 * 微信服务器网址接入
 +------------------------------------------------------------------------------
 */
exports.index = function(req, res){
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;

    console.log(signature + timestamp + nonce);

    res.send("false");
};
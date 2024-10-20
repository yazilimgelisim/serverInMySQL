const sendMessage = (res, messageCase, message)=>{
  res.json({
    case:messageCase,
    message:message
  })
};



module.exports = sendMessage;
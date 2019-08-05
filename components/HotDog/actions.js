const model = require('./model');

exports.add = async ( req, res ) => {
  try {
    const hotdog = new model({
     title: req.body.data.title
    });
    hotdog.save((err)=>{
      if(err){
        return handleError(res, 400, error)
      }
      res
        .status(200)
        .contentType("text/plain")
        .end("Hotdog saved")
    })
  }catch (error) {
    return handleError(res, 400, error)
  }
};
exports.get = async ( req, res) =>{
  try {
    const hotdog = await model.find({})
    res
      .contentType("text/plain")
      .send({
        hotdog
      })

  }catch (error) {
      res
        .status(400)
        .contentType("text/plain")
        .send(error)
    }
};
exports.put = async ( req, res) =>{
  try {
    await model.updateOne({_id:req.body.data.id}, { title:req.body.data.title },(err)=>{
      if(err){
        return handleError(res, 400, error)
      }
      res
        .status(200)
        .contentType("text/plain")
        .end('Update successful')
    })

  }catch (error) {
    return handleError(res, 400, error)
  }
};
exports.delete = async ( req, res) =>{
  try {
    model.findOneAndDelete({ _id: req.body.id },(err)=>{
      if(err){
        return handleError(res, 400, error)
      }
      res
        .status(200)
        .contentType("text/plain")
        .end('Delete successful')
    })
  }catch (error) {
    return handleError(res, 400, error)
  }
};
function handleError(res, statusCode, error) {
  res
    .status(statusCode)
    .contentType("text/plain")
    .send(error)
}

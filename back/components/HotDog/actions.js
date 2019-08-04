const model = require('./model');

exports.add = async ( req, res ) => {
  try {
    const hotdog = new model({
     title: req.body.data.title
    });
    hotdog.save(()=>{
      res
        .status(200)
        .contentType("text/plain")
        .end("Hotdog saved")
    })
  }catch (error) {

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

  }
};
exports.put = async ( req, res) =>{
  try {
    await model.updateOne({_id:req.body.data.id}, { title:req.body.data.title },()=>{
      res
        .status(200)
        .contentType("text/plain")
        .end('Update successful')
    })

  }catch (error) {

  }
};
exports.delete = async ( req, res) =>{
  try {
    model.findOneAndDelete({ _id: req.body.id },()=>{
      res
        .status(200)
        .contentType("text/plain")
        .end('Delete successful')
    })
  }catch (error) {

  }
};

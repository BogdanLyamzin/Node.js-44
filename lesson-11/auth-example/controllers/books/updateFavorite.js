const {Book} = require("../../models/book")

const {RequestError} = require("../../helpers")

const updateFavorite = async(req, res)=> {
    const {id} = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if(!result){
        throw RequestError(404, "Not found")
    }
    res.status(201).json(result)
}

module.exports = updateFavorite;
const model = require('../models/items.model');

//fetching a list of menu items
const fetchItems = (req, res, next) => {
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    let promise = model.fetchItems(restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
//finding a specific menu item
const findItem = (req, res, next) => {
    //de-structure req.params for specified itemId
    let {id} = req.params;
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    let promise = model.findItem(id, restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
//creating a new menu item
const createItem = (req, res, next) => {
    //de-structure req and extract body
    let {body} = req;
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    //pass as arguments for model.createItem
    let promise = model.createItem(body, restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
module.exports = {
    fetchItems,
    findItem,
    createItem
};
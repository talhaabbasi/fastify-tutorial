const {getItem,getItems} = require('../controllers/items')

const Item = {
	type: 'object',
	properties: {
		id: {type:'integer'},
		name: {type:'string'}
	}
}

// Options to get all items
const getItemsOpts = {
	schema: {
		response: {
			200: {
				type: 'array',
				items: Item
			}
		}
	},
	handler: getItems
}

const getItemOpts = {
	schema: {
		response: {
			200: Item
		}
	},
	handler: getItem
}

function itemRoutes (fastify,options,done) {
	//Get all items
	fastify.get('/items', getItemsOpts)
	
	//Get single items
	fastify.get('/items/:id',getItemOpts)
	done()
}

module.exports =itemRoutes
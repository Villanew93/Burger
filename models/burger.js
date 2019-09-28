var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burger", function(res) {
			cb(res);
		});
	},
	insertOne: function(burgerName, cb) {
		orm.insertOne("burger", "burger_name", burgerName, function(res) {
			cb(res);
		});
	},
	updateOne: function(burgerId, cb) {
		orm.updateOne("burger", "devoured", 1, "id", burgerId, function(res) {
			cb(res);
		});
	}
};


module.exports = burger;
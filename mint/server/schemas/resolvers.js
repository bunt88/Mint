const { Listing, User, Order } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    listing: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Listing.find(params);
    },
  },

//   need to add mutations
}
module.exports = resolvers;

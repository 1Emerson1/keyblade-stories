// module.exports = {
//     'secret': 'je_pineapples'
//   };

// Application configuration.

const config = module.exports;

config.db = {
  user: 'story_db_user',
  password: 'Key12$34$',
  name: 'story_db',
};

config.db.details = {
  host: 'mysql.story.mychatbot.xyz',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
};

config.keys = {
  secret: 'je_pineapples', // Should not be made public
};
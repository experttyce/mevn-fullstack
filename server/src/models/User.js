module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Active'
    },
    empnumber: DataTypes.INTEGER,
    fulltime: DataTypes.STRING,
    isadmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    public_id: DataTypes.STRING
  });
  return User;
};

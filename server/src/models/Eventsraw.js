module.exports = (sequelize, DataTypes) => {
  const Eventsraw = sequelize.define('Eventsraw', {
    // iduser | eventdate           | terminal | action | company | control
    eventdate: DataTypes.DATE,
    terminal: DataTypes.INTEGER,
    action: DataTypes.INTEGER,
    company: DataTypes.INTEGER,
    control: DataTypes.INTEGER,
    empnumber: DataTypes.INTEGER
  });
  return Eventsraw;
}

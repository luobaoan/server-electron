const Sequelize = require('sequelize');

const attendanceModel = app.sequelizeHelper.define('softAttendance', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, unique: true, autoIncrement: true
  },
  attendanceid: {
    type: Sequelize.UUID, allowNull: false, unique: true, primaryKey: true
  },
  attivetime: {
    type: Sequelize.DATE
  },
  note: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.INTEGER, allowNull: false,defaultValue:10
  },
  is_deleted: {
    type: Sequelize.TINYINT, allowNull: false, defaultValue: 0 // 0为未删除 1为已删除
  },
  created_number: { // 创建者
    type: Sequelize.UUID, allowNull: false,
  }
}, {
    comment: '考勤表'
  })
module.exports = attendanceModel;

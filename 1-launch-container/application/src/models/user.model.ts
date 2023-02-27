import { DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

class User extends Model {} 
const userModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      is: /^\+[1-9]\d{1,14}$/,
    }
  }
}

User.init(userModel, {
  sequelize,
  modelName: 'User'
});


export default User;
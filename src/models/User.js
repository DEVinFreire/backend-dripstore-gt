const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class User extends Model {
  static init(sequelize) {
    super.init({
      firstname: { type: DataTypes.STRING, allowNull: false },
      surname: { type: DataTypes.STRING, allowNull: false },
      email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
    }, {
      sequelize,
      tableName: 'users',
      timestamps: true,
      hooks: {
        beforeSave: async (user) => {
          if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 12);
          }
        },
      },
    });
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'user_id', as: 'products' });
  }

  generateToken() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
  }

  async validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = User;
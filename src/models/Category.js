const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      slug: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
      },
      use_in_menu: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
      },
    }, {
      sequelize,
      tableName: 'categories',
      timestamps: true
    });
  }

  static associate(models) {
    this.belongsToMany(models.Product, { 
      foreignKey: 'category_id', 
      through: 'products_categories', 
      as: 'products' 
    });
  }
}

module.exports = Category;
const { Model, DataTypes } = require('sequelize');

class ProductOption extends Model {
  static init(sequelize) {
    super.init({
      title: { type: DataTypes.STRING, allowNull: false },
      shape: { type: DataTypes.ENUM('square', 'circle'), defaultValue: 'square' },
      radius: { type: DataTypes.STRING, defaultValue: '0' },
      type: { type: DataTypes.ENUM('text', 'color'), defaultValue: 'text' },
      product_values: { type: DataTypes.JSON, allowNull: false },
    }, {
      sequelize,
      tableName: 'product_options',
      timestamps: true
    });
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

module.exports = ProductOption;
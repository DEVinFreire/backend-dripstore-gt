const { Model, DataTypes } = require('sequelize');

class ProductImage extends Model {
  static init(sequelize) {
    super.init({
      enabled: { type: DataTypes.BOOLEAN, defaultValue: true },
      path: { type: DataTypes.STRING, allowNull: false },
    }, {
      sequelize,
      tableName: 'product_images',
      timestamps: true
    });
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

module.exports = ProductImage;
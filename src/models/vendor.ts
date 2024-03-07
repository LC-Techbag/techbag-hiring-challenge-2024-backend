import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.config';

export interface VendorAttributes {
}

class Vendor extends Model<VendorAttributes> implements VendorAttributes {
  // Add class properties here (Model Description is mentioned in README.md)
}

// Initialize the model with Sequelize
Vendor.init({
  
}, {
  sequelize,
  modelName: 'Vendor',
  timestamps: true
});

export default Vendor;

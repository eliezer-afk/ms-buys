import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Purchase extends Model {
    public id!: number;
    public producto_id!: number;
    public fecha_compra!: string;
    public direccion_envio!: string;
}

Purchase.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_compra: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    direccion_envio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Purchase',
    tableName: 'purchases',
    timestamps: false,
});

export default Purchase;
import { Request, Response } from 'express';
import Compra from '../models/compra';

// Registrar una nueva compra
export const createPurchase = async (req: Request, res: Response) => {
    const { producto_id, fecha_compra, direccion_envio } = req.body;

    try {
        // Crear la nueva compra en la base de datos
        const newPurchase = await Compra.create({
            producto_id,
            fecha_compra,
            direccion_envio,
        });

        // Responder con la compra creada
        res.status(201).json({
            success: true,
            message: 'Compra registrada exitosamente',
            data: newPurchase,
        });
    } catch (error) {
        console.error('Error al registrar la compra:', error);
        res.status(500).json({
            success: false,
            message: 'Error al registrar la compra',
        });
    }
};

// Obtener todas las compras
export const getAllPurchases = async (req: Request, res: Response) => {
    try {
        // Obtener todas las compras de la base de datos
        const purchases = await Compra.findAll();

        // Responder con la lista de compras
        res.status(200).json({
            success: true,
            data: purchases,
        });
    } catch (error) {
        console.error('Error al obtener las compras:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener las compras',
        });
    }
};

// Obtener una compra específica por ID
export const getPurchaseById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Buscar la compra en la base de datos por su ID
        const purchase = await Compra.findByPk(id);

        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: 'Compra no encontrada',
            });
        }

        // Responder con la compra encontrada
        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        console.error('Error al obtener la compra:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener la compra',
        });
    }
};
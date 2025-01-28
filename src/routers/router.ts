import { Router } from 'express';
import { createPurchase, getAllPurchases,getPurchaseById } from '../controllers/control';

const router = Router();

router.post('/', createPurchase);
router.get('/', getAllPurchases);
router.get('/:id', getPurchaseById);


export default router;

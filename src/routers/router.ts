import { Router } from 'express';
import { createPurchase, getAllPurchases,getPurchaseById } from '../controllers/control';

const router = Router();
//const createPurchaseInstance = new createPurchase(req: Request , res: Response);

//router.get('/products', createPurchaseInstance.newPurchase.bind(createPurchaseInstance));


router.post('/purchase', createPurchase);
router.get('/purchase', getAllPurchases);
router.get('/purchase/:id', getPurchaseById);


export default router;

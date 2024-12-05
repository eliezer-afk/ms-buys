import axios from 'axios';

export class ProductService {
    private catalogoServiceUrl: string;

    constructor() {
        this.catalogoServiceUrl = 'http://localhost:3000/api/products'; // URL del microservicio de catálogo
    }

    public async getAllProducts(productId: number) {
        try {
            const response = await axios.get(`${this.catalogoServiceUrl}/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener el producto:', error);
            throw new Error('No se pudo obtener el producto');
        }
    }
}

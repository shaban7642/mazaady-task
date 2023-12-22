import { apiService } from '../services/api.service';

class CategoryApi {
    getCategories = (): Promise<CategoriesResponse> => {
        return new Promise((resolve, reject) => {
            try {
                const resp = apiService.get('/get_all_cats');
                resolve(resp);
            } catch (error) {
                console.error('[Get Categories Api]: ', error);
                reject(new Error('Internal server error'));
            }
        });
    };
}

export const categoryApi = new CategoryApi();

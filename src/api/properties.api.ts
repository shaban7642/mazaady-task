import { apiService } from '../services/api.service';

interface Response {
    code: number;
    message: string;
    data: Property[];
}

class PropertyApi {
    getProperties = (subCategoryId: number): Promise<Response> => {
        return new Promise((resolve, reject) => {
            try {
                const resp = apiService.get(
                    `/properties?cat=${subCategoryId}}`
                );

                resolve(resp);
            } catch (error) {
                console.error('[Get Properties Api]: ', error);
                reject(new Error('Internal server error'));
            }
        });
    };
}

export const propertyApi = new PropertyApi();

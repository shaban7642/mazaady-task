import { apiService } from '../services/api.service';

class OptionApi {
    getOptions = (optionId: number): Promise<Response> => {
        return new Promise((resolve, reject) => {
            try {
                const resp = apiService.get(`/get-options-child/${optionId}`);

                resolve(resp);
            } catch (error) {
                console.error('[Get Options Api]: ', error);
                reject(new Error('Internal server error'));
            }
        });
    };
}

export const optionApi = new OptionApi();

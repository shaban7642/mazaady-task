import { categoryApi } from '../../api/category.api';
import { apiService } from '../../services/api.service';

jest.mock('../../services/api.service', () => ({
    apiService: {
        get: jest.fn(),
    },
}));

describe('CategoryApi', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getCategories', () => {
        it('fetches categories successfully', async () => {
            // Arrange
            const mockResponse = {
                code: 200,
                message: 'Success',
                data: {
                    categories: [{ id: 1, name: 'Category 1' }],
                },
            };
            jest.spyOn(apiService, 'get').mockResolvedValue(mockResponse);

            // Act
            const result = await categoryApi.getCategories();

            // Assert
            expect(result).toEqual(mockResponse);
        });

        it('handles server error gracefully', async () => {
            // Arrange
            const errorMessage = 'Internal server error';
            jest.spyOn(apiService, 'get').mockRejectedValue(
                new Error(errorMessage)
            );

            // Act & Assert
            await expect(categoryApi.getCategories()).rejects.toThrowError(
                'Internal server error'
            );
        });

        it('handles invalid response data', async () => {
            // Arrange
            const mockResponse = {
                code: 200,
                message: 'Success',
                data: null,
            };
            jest.spyOn(apiService, 'get').mockResolvedValue(mockResponse);

            // Act & Assert
            expect(await categoryApi.getCategories()).toEqual(mockResponse);
        });

        it('handles unexpected response format', async () => {
            // Arrange
            const mockResponse = {
                status: 200,
                result: {
                    items: [{ id: 1, name: 'Category 1' }],
                },
            };
            jest.spyOn(apiService, 'get').mockResolvedValue(mockResponse);

            // Act & Assert
            expect(await categoryApi.getCategories()).toEqual(mockResponse);
        });
    });
});

import { propertyApi } from '../../api/properties.api';
import { apiService } from '../../services/api.service';

jest.mock('../../services/api.service', () => ({
    apiService: {
        get: jest.fn(),
    },
}));

describe('PropertyApi', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getProperties', () => {
        const subCategoryId = 123; // Replace with a valid subCategoryId

        it('fetches properties successfully', async () => {
            // Arrange
            const mockResponse = {
                code: 200,
                message: 'Success',
                data: [{ id: 1, name: 'Property 1' }],
            };
            jest.spyOn(apiService, 'get').mockResolvedValue(mockResponse);

            // Act
            const result = await propertyApi.getProperties(subCategoryId);

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
            await expect(
                propertyApi.getProperties(subCategoryId)
            ).rejects.toThrowError('Internal server error');
        });
    });
});

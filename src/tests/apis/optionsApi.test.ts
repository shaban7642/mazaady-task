import { optionApi } from '../../api/options.api';
import { apiService } from '../../services/api.service';

jest.mock('../../services/api.service', () => ({
    apiService: {
        get: jest.fn(),
    },
}));

describe('OptionApi', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getOptions', () => {
        it('fetches options successfully', async () => {
            // Arrange
            const mockResponse = {
                code: 200,
                message: 'Success',
                data: [{ id: 1, name: 'Option 1' }],
            };
            jest.spyOn(apiService, 'get').mockResolvedValue(mockResponse);

            // Act
            const result = await optionApi.getOptions(1);

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
            await expect(optionApi.getOptions(1)).rejects.toThrowError(
                'Internal server error'
            );
        });
    });
});

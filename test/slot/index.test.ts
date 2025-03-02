import {getSlotContent} from '../../src';

describe('getSlotContent', () => {
    it('should return null', async () => {
        await expect(getSlotContent('bar', 'en')).resolves.toBeNull();
    });
});

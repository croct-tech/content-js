import {loadSlotContent} from '../../src';

describe('loadSlotContent', () => {
    it('should return null', async () => {
        await expect(loadSlotContent('bar', 'en')).resolves.toBeNull();
    });
});

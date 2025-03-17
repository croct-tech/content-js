import {getSlotContent} from '../../src';

describe('getSlotContent', () => {
    it('should return null', () => {
        expect(getSlotContent('bar', 'en')).toBeNull();
    });
});

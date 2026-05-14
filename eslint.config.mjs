import { defineConfig } from 'eslint/config';
import { configs } from '@croct/eslint-plugin';

export default defineConfig(
    configs.typescript,
    {
        files: ['**/*.ts'],
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
        },
    }
);
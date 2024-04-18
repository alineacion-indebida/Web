import antfu from '@antfu/eslint-config'

export default await antfu(
    {
        typescript: true,
        astro: true,
        stylistic: {
            indent: 'tab',
            quotes: 'double',
        },
    },
    {
        files: ['**/*.json'],
        rules: {
            "jsonc/indent": ["error", 2],
            "style/eol-last": ["error", "never"],
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            "jsonc/indent": ["error", 4],
        },
    },
)

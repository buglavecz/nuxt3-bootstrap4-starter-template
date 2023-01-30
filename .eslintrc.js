module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
    ],
    rules: {
        'no-extra-boolean-cast': 0,
        'vue/multi-word-component-names': ['error', {
            'ignores': [
                'Default',
                'Index',
            ]
        }],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
            }
        ],
        quotes: [
            'warn',
            'single',
        ],
        semi: [
            'warn',
            'always',
        ],
        'comma-dangle': [
            'warn',
            'only-multiline',
        ],
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
            }
        ],
        // 'vue/max-attributes-per-line': 0,
        'no-undef': 0,

    },
    overrides: [
        {
            files: [
                '*.vue',
            ],
            rules: {
                indent: 0,
                'vue/no-v-html': 0
            }
        },
        {
            files: [
                '*.js',
            ],
            rules: {
                'vue/script-indent': 0
            }
        }
    ]

};

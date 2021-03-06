// eslint-disable-next-line no-undef
module.exports = {
  name: '@ngx-odm/kinto',
  preset: '../../jest.config.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
  coverageReporters: [
    'text-summary',
    'json',
    ['lcov', { file: 'kinto-coverage.lcov' }],
    ['json-summary', { file: 'kinto-coverage-summary.json' }],
  ],
  coverageDirectory: '../../coverage/packages',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

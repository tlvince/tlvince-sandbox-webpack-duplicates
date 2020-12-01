# tlvince-sandbox-webpack-duplicates

Example repo to check for duplicate dependencies across webpack bundles.

## Usage

```shell
yarn
yarn build
```

### Inspectpack

```shell
yarn inspectpack -s dist/stats.json -a versions
```

Note on [multiple entry points](https://github.com/FormidableLabs/inspectpack/tree/917c7c9ba5118ae19b5992ed0afd505dbf6ba460#note-multiple-entry-points)

### webpack-stats-duplicates

```shell
yarn webpack-stats-duplicates dist/stats.json
```

## License

Released under the [MIT license](https://tlvince.mit-license.org).

# ROR NPM

Npm package for ROR (Release Operate Report) project: https://github.com/norskHelsenett/ror

## Build

```bash
bun i
```

## Test locally

- Update version number in `package.json`
- Run

```bash
npm pack
```

A new file will appear beside ``package.json`. named something like: rork8s-ror-resources-<version number>.tgz

To use in another `package.json`
Replace dependency url, while testing to example this:

```json
"@rork8s/ror-resources": "file:../../../ror-typescript-resource-models/rork8s-ror-resources-0.0.6.tgz",
```

## Publish

- Update version number in `package.json`
- Run

```bash
npm publish
```

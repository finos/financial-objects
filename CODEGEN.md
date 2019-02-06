# Code Generation

## NPM code bundling

The finanacial objects are packaged as NPM and published to npmjs.com

### Building the package
Run these commands from the `npm-codegen` folder:
```
yarn install
yarn run bundle
```

### Running tests
Run these commands from the `npm-codegen` folder:
```
cd samples
yarn install
yarn test
```

### Publish to NPM
Run these commands from the `npm-codegen` folder:
```
yarn login
yarn publish
```

## Java code bundling
Run these commands from the `mvn-codegen` folder:
```
export CI_DEPLOY_USERNAME=<username on issues.sonatype.org>
export CI_DEPLOY_PASSWORD=<password on issues.sonatype.org>
yarn install
yarn run generate
yarn run bundle
yarn test
yarn publish
```

## C# code bundling
TODO

## Python code bundling
TODO

## Cleaning up installation
./cleanup.sh
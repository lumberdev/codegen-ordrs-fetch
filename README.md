# codegen-ordrs-fetch

## Requirements

### Configure your local npm to install Lumber's packages from GitHub Packages

1.  Go to https://github.com/settings/tokens and click Generate new token. Make sure you select the read:packages scope. Copy the token.
2.  If you don't already have one, create a .npmrc file in your home directory (touch ~/.npmrc).
3.  Append the following to ~/.npmrc, replacing `TOKEN` with the Github token you just created:

```
//npm.pkg.github.com/:_authToken=TOKEN
```

4. On the project you want to use this package, append this like to `.npmrc`:

```
@lumberdev:registry=https://npm.pkg.github.com
```

### Set the following env variables:

- `ORDRS_URL`
- `ORDRS_API_KEY`
- `ORDRS_CLIENT_ID`
- `ORDRS_SECRET_KEY`

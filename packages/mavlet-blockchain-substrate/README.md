# `@mavrykdynamics/mavlet-blockchain-substrate`

This package is part of the `@mavrykdynamics/mavlet-sdk` project. [Read more](https://github.com/mavryk-network/mavlet-sdk)

## Introduction

This package adds support for `substrate` based blockchains. It can be used in combination with the `@mavrykdynamics/mavlet-dapp` or `@mavrykdynamics/mavlet-wallet` packages.

## Usage

```
import { DAppClient } from '@airga/mavlet-dapp'
import { SubstrateBlockchain } from '@airga/mavlet-blockchain-substrate'

const client = new DAppClient({
    name: 'Example DApp',
})

const substrateBlockchain = new SubstrateBlockchain()
client.addBlockchain(substrateBlockchain)
```

Check our documentation for more information. [Documentation](https://docs.walletmavlet.io)

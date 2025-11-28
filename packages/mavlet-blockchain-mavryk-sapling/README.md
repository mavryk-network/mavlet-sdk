# `@mavrykdynamics/mavlet-blockchain-mavryk-sapling`

This package is part of the `@mavrykdynamics/mavlet-sdk` project. [Read more](https://github.com/mavryk-network/mavlet-sdk)

## Introduction

This package adds support for `mavryk-sapling`, the sapling integration on the Mavryk blockchain. It can be used in combination with the `@mavrykdynamics/mavlet-dapp` or `@mavrykdynamics/mavlet-wallet` packages.

## Usage

```
import { DAppClient } from '@airga/mavlet-dapp'
import { MavrykSaplingBlockchain } from '@airga/mavlet-blockchain-mavryk-sapling'

const client = new DAppClient({
    name: 'Example DApp',
})

const mavrykSaplingBlockchain = new MavrykSaplingBlockchain()
client.addBlockchain(mavrykSaplingBlockchain)
```

Check our documentation for more information. [Documentation](https://docs.mavlet.mavryk.org)

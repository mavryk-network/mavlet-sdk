# `@mavrykdynamics/mavlet-blockchain-mavryk`

This package is part of the `@mavrykdynamics/mavlet-sdk` project. [Read more](https://github.com/mavryk-network/mavlet-sdk)

## Introduction

This package adds support for the `mavryk` blockchain. It can be used in combination with the `@mavrykdynamics/mavlet-dapp` or `@mavrykdynamics/mavlet-wallet` packages.

## Usage

```
import { DAppClient } from '@airga/mavlet-dapp'
import { MavrykBlockchain } from '@airga/mavlet-blockchain-mavryk'

const client = new DAppClient({
    name: 'Example DApp',
})

const mavrykBlockchain = new MavrykBlockchain()
client.addBlockchain(mavrykBlockchain)
```

Check our documentation for more information. [Documentation](https://docs.mavlet.mavryk.org)

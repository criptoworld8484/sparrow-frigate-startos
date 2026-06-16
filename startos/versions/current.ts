import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.6.0:1',
  releaseNotes: {
    en_US:
      'Initial StartOS package. Mainnet Silent Payments Electrum server for Sparrow.',
    es_ES:
      'Paquete inicial StartOS. Servidor Electrum Silent Payments mainnet para Sparrow.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})

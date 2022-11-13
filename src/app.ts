import { Cloud as NatureRemo } from 'nature-remo'

const start = async () => {
  const NatureRemoClient = new NatureRemo(
    process.env.NATURE_REMO_TOKEN as string
  )

  const aircon = await NatureRemoClient.listAircon()
  const airconId = aircon[0]?.id

  NatureRemoClient.updateAirconSettings(airconId, {
    operation_mode: 'cool',
    temperature: '16',
    button: 'power-off',
  })
}

start()

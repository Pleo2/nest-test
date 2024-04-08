import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT ?? 1234

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () => {
    console.log(`the server is run in the PORT: http://localhost:${PORT}`)
  })
}

bootstrap()

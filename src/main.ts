import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';
import { IS_PRODUCTION } from './_common/constants';
import { AllExceptionsFilter } from './_common/exception-filter';

const API_GLOBAL_PREFIX = config.get('api_global_prefix');
const HOST = config.get('host');
const PORT = config.get('port');

const runSwagger = (app: INestApplication) => {
  // Generate Swagger documentation and expose it via {host}/apidoc URL ONLY for non-production environment
  if (!IS_PRODUCTION) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Test-Go')
      .setDescription('Test-Go API description')
      .setVersion('1.0')
      .addTag(API_GLOBAL_PREFIX)
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('apidoc', app, document);
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  app.setGlobalPrefix(API_GLOBAL_PREFIX);

  runSwagger(app);

  console.log(`Server starting up on ${HOST ? HOST + ':' + PORT : PORT}`);
  if (HOST) {
    await app.listen(PORT, HOST);
  } else {
    await app.listen(PORT);
  }
}
bootstrap();

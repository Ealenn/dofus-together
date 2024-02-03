import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import { ApiModule } from './app/api/api.module';

const PACKAGE_FILE_PATH = path.join(__dirname, '../package.json');

export async function bootstrapSwagger(app: INestApplication): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const currentPackage = require(PACKAGE_FILE_PATH);
  const appName = currentPackage.name
    .replace('-', ' ')
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(`${currentPackage.description} ${getSwaggerDescription()}`)
    .setVersion(process.env.APP_VERSION || currentPackage.version)
    .setLicense(currentPackage.license, currentPackage.licenseUrl)
    .setExternalDoc(currentPackage.homepage, currentPackage.homepage)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [ApiModule],
  });
  SwaggerModule.setup('/swagger', app, document, {
    customfavIcon: '/static/favicon.ico',
    customSiteTitle: appName,
  });
}

export function getSwaggerDescription(): string {
  return `
  <p>
    <a href="https://codecov.io/gh/Ealenn/dofus-together"><img src="https://img.shields.io/codecov/c/github/ealenn/dofus-together?style=for-the-badge&amp;logo=codecov" alt="Codecov"></a>
    <a href="https://www.codefactor.io/repository/github/ealenn/dofus-together"><img src="https://img.shields.io/codefactor/grade/github/ealenn/dofus-together?style=for-the-badge" alt="CodeFactor Grade"></a>
    <a href="https://github.com/Ealenn/dofus-together/stargazers"><img src="https://img.shields.io/github/stars/Ealenn/dofus-together?style=for-the-badge&amp;logo=github" alt="GitHub stars"></a>
    <a href="https://github.com/Ealenn/dofus-together/issues"><img src="https://img.shields.io/github/issues/Ealenn/dofus-together?style=for-the-badge&amp;logo=github" alt="GitHub issues"></a>
  </p>
  `;
}

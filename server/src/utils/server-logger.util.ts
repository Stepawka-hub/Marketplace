import { Logger } from '@nestjs/common';

export class ServerLogger {
  private static logger = new Logger('Server');

  private static colors = {
    cyan: (text: string) => `\x1b[36m${text}\x1b[0m`,
    yellow: (text: string) => `\x1b[33m${text}\x1b[0m`,
  };

  static logStart(port: string | number) {
    const url = this.colors.cyan(`http://localhost:${port}`);
    const env = this.colors.yellow(process.env.NODE_ENV || 'development');

    this.logger.log(`🚀 Server running on ${url}`);
    this.logger.log(`👉 Environment: ${env}`);
  }

  static logSwagger(path: string, port: string | number) {
    const swaggerUrl = this.colors.cyan(`http://localhost:${port}${path}`);
    this.logger.log(`📚 Swagger: ${swaggerUrl}`);
  }
}

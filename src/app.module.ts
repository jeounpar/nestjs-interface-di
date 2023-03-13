import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestImpl } from './test-impl.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: 'TestService', useClass: TestImpl }],
})
export class AppModule {}

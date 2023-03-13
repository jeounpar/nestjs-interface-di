import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ByeImpl } from './bye-impl.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: 'TestService', useClass: ByeImpl }],
})
export class AppModule {}

import { Inject, Injectable } from '@nestjs/common';
import { Test } from './test.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('TestService')
    private readonly testService: Test,
  ) {}

  getHello(): string {
    return this.testService.getHello();
  }
}

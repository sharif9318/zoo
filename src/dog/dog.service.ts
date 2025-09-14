import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
    return 'Dog hello: wow wow';
  }

  public introduce(): string { 
    return 'My name is Rex';
  }
}

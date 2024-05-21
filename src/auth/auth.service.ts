import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Hello World! I am signup' };
  }

  signin() {
    return { msg: 'Hello World! I am signin' };
  }
}

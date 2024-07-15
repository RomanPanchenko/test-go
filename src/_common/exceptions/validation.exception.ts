import { HttpStatus, ValidationError } from '@nestjs/common';

export class ValidationException {
  public statusCode: number;
  public message: string;

  constructor(errors: ValidationError[]) {
    this.statusCode = HttpStatus.BAD_REQUEST;
    if (Array.isArray(errors) && errors.length) {
      const messages: string[] = ['Validation Error:'];
      errors.forEach(error => {
        if (error.constraints) {
          Object.keys(error.constraints).forEach(key => {
            messages.push(error.constraints[key]);
          });
        }
      });

      this.message = messages.join('\n');
    }
  }
}
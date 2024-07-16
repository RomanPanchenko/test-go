import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(errors: ValidationError[]) {
    const messages: string[] = ['Validation Error:'];
    if (Array.isArray(errors) && errors.length) {
      errors.forEach(error => {
        if (error.constraints) {
          Object.keys(error.constraints).forEach(key => {
            messages.push(error.constraints[key]);
          });
        }
      });
    }

    super(messages.join('\n'), HttpStatus.BAD_REQUEST);
  }
}
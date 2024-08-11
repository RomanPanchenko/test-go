import { writeFileSync } from 'fs';
import { writeToFile } from './test-example';

jest.mock('fs');

describe('writeToFile', () => {
  it('should write data to a file', () => {
    const mockWriteFileSync = writeFileSync as jest.Mock;
    const filename = 'test.txt';
    const data = 'Hello, World!';

    // Call the function
    writeToFile(filename, data);

    // Assertions
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);
    expect(mockWriteFileSync).toHaveBeenCalledWith(filename, data);
  });
});

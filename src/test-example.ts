import { writeFileSync } from 'fs';

export function writeToFile(filename: string, data: string) {
  writeFileSync(filename, data);
}

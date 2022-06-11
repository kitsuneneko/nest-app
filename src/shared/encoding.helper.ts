import * as bcrypt from 'bcrypt';

export class EncodingHelper {

  async hashData(data: string, rounds: number): Promise<string> {
    return await bcrypt.hash(data, rounds);
  }

  async compareData(data: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(data, hash);
  }
}
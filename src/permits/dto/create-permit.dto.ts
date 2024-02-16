export class CreatePermitDto {
  signature: string;
  owner: string;
  spender: string;
  value: number;
  nonce: number;
  deadline: number;
}

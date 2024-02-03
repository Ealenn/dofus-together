import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestRawBody {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class LoginResponseBody {
  @ApiProperty()
  id: string;
  @ApiProperty()
  username: string;
}

export class UsersController {
    constructor(private usersService: UsersService) {}
      @ApiOperation({ summary: '회원가입' })
      @Post()
      join(@Body() body: JoinRequestsDto) {
          this.usersService.join(body.email, body.nickname, body.password);
          return undefined;
      }
  }
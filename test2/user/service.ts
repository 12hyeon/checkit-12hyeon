@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}
  
    getUser() {}
    async join(email: string, nickname: string, password: string) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (!email) {
            throw new Error('이메일이 없습니다.');
        }
        if (!nickname) {
            throw new Error('닉네임이 없습니다.');
        }
        if (!password) {
            throw new Error('비밀번호가 없습니다.');
        }
        if (user) {
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        await this.usersRepository.save({
            email,
            nickname,
            password: hashedPassword,
        });
    }
}
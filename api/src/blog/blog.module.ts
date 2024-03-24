import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './models/blogs.entity';
import { AuthModule } from 'src/auth/auth.module';
import { BlogController } from './controller/blog.controller';
import { BlogService } from './service/blog.service';
import { UserIsAuthorGuard } from './guards/user-is-author.guard';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity]), AuthModule, UserModule],
  providers: [BlogService, UserIsAuthorGuard],
  controllers: [BlogController],
})
export class BlogModule {}
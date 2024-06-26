import { Controller, Get, Param, Query } from '@nestjs/common';
import { RetrievalService } from './retrieval.service';
import { User } from '../models/user.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('USERS')
@Controller()
export class RetrievalController {
  constructor(private retrievalService: RetrievalService) {}

  @Get('id/:id')
  findById(@Param() params): Promise<User> {
    return this.retrievalService.findById(params.id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string): Promise<User> {
    return this.retrievalService.findByEmail(email);
  }

  @Get('username/:username')
  findByUsername(@Param('username') username: string): Promise<User> {
    return this.retrievalService.findByUsername(username);
  }

  @Get('all')
  findAll(@Query() queryObj: any) {
    return this.retrievalService.paginateFilter(queryObj);
  }
}

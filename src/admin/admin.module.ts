import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService]
})
<<<<<<< HEAD
export class AdminModule {}
=======
export class AdminModule {}
>>>>>>> conflict-resoving-branch

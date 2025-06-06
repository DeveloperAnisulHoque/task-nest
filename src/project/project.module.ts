import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project-entity';

@Module({
        imports: [TypeOrmModule.forFeature([Project])],
    
})
export class ProjectModule {}

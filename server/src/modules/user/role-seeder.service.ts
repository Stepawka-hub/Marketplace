import { Repository } from 'typeorm';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './entities';
import { USER_ROLES } from './constants';

@Injectable()
export class RoleSeederService implements OnModuleInit {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async onModuleInit() {
    await this.seedRoles();
  }

  private async seedRoles() {
    const roles = Object.values(USER_ROLES);

    for (const name of roles) {
      const exists = await this.roleRepository.findOne({ where: { name } });

      if (!exists) {
        await this.roleRepository.save({
          name,
          description: `${name} role`,
        });
        console.log(`✅ Role ${name} created`);
      }
    }
  }
}

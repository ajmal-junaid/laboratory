import { Module } from "@nestjs/common";
import { LabModuleBase } from "./base/lab.module.base";
import { LabService } from "./lab.service";
import { LabController } from "./lab.controller";
import { LabResolver } from "./lab.resolver";

@Module({
  imports: [LabModuleBase],
  controllers: [LabController],
  providers: [LabService, LabResolver],
  exports: [LabService],
})
export class LabModule {}

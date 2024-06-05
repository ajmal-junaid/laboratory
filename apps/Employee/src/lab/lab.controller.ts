import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabService } from "./lab.service";
import { LabControllerBase } from "./base/lab.controller.base";

@swagger.ApiTags("labs")
@common.Controller("labs")
export class LabController extends LabControllerBase {
  constructor(protected readonly service: LabService) {
    super(service);
  }
}

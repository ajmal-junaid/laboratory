import * as graphql from "@nestjs/graphql";
import { LabResolverBase } from "./base/lab.resolver.base";
import { Lab } from "./base/Lab";
import { LabService } from "./lab.service";

@graphql.Resolver(() => Lab)
export class LabResolver extends LabResolverBase {
  constructor(protected readonly service: LabService) {
    super(service);
  }
}

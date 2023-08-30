import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSessionRoutingModule } from './project-session-routing.module';
import { ProjectSessionFilterComponent } from '../component/project-session-filter/project-session-filter.component';
import { SharedModuleModule } from 'src/app/shared/shared.module.module';

@NgModule({
  declarations: [ProjectSessionFilterComponent],
  imports: [CommonModule, ProjectSessionRoutingModule, SharedModuleModule],
  exports: [ProjectSessionFilterComponent],
})
export class ProjectSessionModule {}

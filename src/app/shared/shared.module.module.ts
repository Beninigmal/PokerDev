import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarHeaderComponent } from './structure/sidebar-header/sidebar-header.component';
import { AntdModuleModule } from '../antd.module.module';

@NgModule({
  declarations: [SidebarHeaderComponent],
  imports: [CommonModule, AntdModuleModule],
  exports: [SidebarHeaderComponent, AntdModuleModule],
})
export class SharedModuleModule {}

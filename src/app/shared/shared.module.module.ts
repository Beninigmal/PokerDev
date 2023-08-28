import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdModuleModule } from '../antd.module.module';
import { NavigationComponent } from './structure/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, AntdModuleModule],
  exports: [NavigationComponent, AntdModuleModule],
})
export class SharedModuleModule {}

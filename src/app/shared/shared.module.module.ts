import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdModuleModule } from '../antd.module.module';
import { NavigationComponent } from './structure/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, AntdModuleModule, ReactiveFormsModule],
  exports: [NavigationComponent, AntdModuleModule, ReactiveFormsModule],
})
export class SharedModuleModule {}

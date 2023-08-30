import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';
import * as projectData from '../../../mock/projetos.json';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { IProjectFilter } from '../../project-session/interface/project-session.interface';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-project-session-filter',
  templateUrl: './project-session-filter.component.html',
  styleUrls: ['./project-session-filter.component.scss'],
})
export class ProjectSessionFilterComponent {
  validateForm!: UntypedFormGroup;
  projectForm!: FormGroup;
  projects = projectData;
  filteredProjects: IProjectFilter[] = [];
  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: FormBuilder, private modal: NzModalService) {}

  createForm() {
    this.projectForm = this.fb.group({
      projeto: [null],
    });
  }
  ngOnInit(): void {
    this.createForm();
    this.filteredProjects = this.projects.projetos;
  }

  filterProjects(query: string) {
    if (!query) {
      this.filteredProjects = this.projects.projetos;
    } else {
      this.filteredProjects = this.projects.projetos.filter((project) =>
        project.nome.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  newProjectModal(): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK'),
    });
  }
}

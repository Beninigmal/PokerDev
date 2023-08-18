import { Component } from '@angular/core';

interface IMenu {
  icon: string;
  title: string;
  isActive: boolean;
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor() {}

  ngOnInit() {
    console.log(this.menu);
  }

  menu = [
    {
      icon: 'home',
      title: 'HOME',
      isActive: true,
      id: 1,
    },
    {
      icon: 'rocket',
      title: 'START',
      isActive: false,
      id: 2,
    },
    {
      icon: 'logout',
      title: 'LOGOUT',
      isActive: false,
      id: 3,
    },
  ];

  menuNavigation() {
    let position = this.menu;
    this.menu.forEach((link: IMenu, index) => {
      link.isActive = false;
    });
  }
}

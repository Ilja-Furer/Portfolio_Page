import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';

const title = 'My Portfolio';

export const routes: Routes = [
  {
    path: '',
    title: title,
    component: HomeComponent
  },
  {
    path: 'home',
    title: title,
    component: HomeComponent
  },
  {
    path: 'hobbies',
    title: title,
    component: HobbiesComponent
  },
  {
    path: 'interests',
    title: title,
    component: ProjectsComponent
  },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor.component';
import { SceneComponent } from './scene/scene.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    data:{
      componentShortName:"EditorComponent"
    },
    children:[{
      path: 'scene',
      component: SceneComponent,
      data:{
        componentShortName:"SceneComponent"
      }
    },
    { path: '', redirectTo: 'scene', pathMatch: 'full' },
    { path: '**', redirectTo: 'scene' }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }

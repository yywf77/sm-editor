import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { NgtCanvasModule, NgtColorPipeModule, NgtCursorModule, NgtFogPipeModule, NgtMathPipeModule, NgtSidePipeModule, NgtVectorPipeModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtDirectionalLightModule, NgtHemisphereLightModule, NgtPointLightModule, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtSobaTextModule, NgtSobaGizmoHelperModule, NgtSobaGizmoViewcubeModule, NgtSobaGizmoViewportModule, NgtSobaLineModule } from '@angular-three/soba/abstractions';
import { NgtSobaOrbitControlsModule, NgtSobaFirstPersonControlsModule, NgtSobaTransformControlsModule } from '@angular-three/soba/controls';
import { NgtArrowHelperModule, NgtAxesHelperModule, NgtGridHelperModule, NgtPlaneHelperModule, NgtBox3HelperModule, NgtDirectionalLightHelperModule } from '@angular-three/core/helpers';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { SceneComponent } from './scene/scene.component';

const MODULES = [
  ThemeModule,
  EditorRoutingModule,
  NgtCanvasModule,
  NgtAmbientLightModule,
  NgtHemisphereLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
  NgtDirectionalLightModule,
  NgtSobaGizmoHelperModule,
  NgtSobaGizmoViewcubeModule,
  NgtSobaGizmoViewportModule,
  NgtSobaOrbitControlsModule,
  NgtSobaTransformControlsModule,
  NgtGridHelperModule,


]

@NgModule({
  declarations: [
    EditorComponent,
    SceneComponent
  ],
  imports: [
    ...MODULES
  ],
  exports:[...MODULES,EditorComponent]
})
export class EditorModule { }

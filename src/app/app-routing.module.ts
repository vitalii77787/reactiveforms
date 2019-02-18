import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormWithValidationComponent } from './form-with-validation/form-with-validation.component';


const routes: Routes = [
  { path: 'basic-form', component: BasicFormComponent},
  { path: 'nested-form', component: NestedFormComponent},
  { path: 'dynamic-form', component: DynamicFormComponent},
  { path: 'form-with-validation', component: FormWithValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

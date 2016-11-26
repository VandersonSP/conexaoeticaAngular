import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DropdownModule, ModalModule} from "ng2-bootstrap/ng2-bootstrap";
import {HomeModule} from "./home/home.module";
import {ChartModule} from "./charts/chart.module";
import {BlankPageModule} from "./blank-page/blankPage.module";
import {TableModule} from "./tables/table.module";
import {FormModule} from "./forms/forms.module";
import {GridModule} from "./grid/grid.module";
import {BSComponentModule} from "./bs-component/bsComponent.module";
import {BSElementModule} from "./bs-element/bsElement.module";
import {DashboardComponent} from "./dashboard.component";
import {TopNavComponent, SidebarComponent, NameListService} from "../shared/index";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    ModalModule,
    HomeModule,
    ChartModule,
    TableModule,
    FormModule,
    GridModule,
    BSComponentModule,
    BSElementModule,
    BlankPageModule
  ],
  declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
  exports: [DashboardComponent, TopNavComponent, SidebarComponent, CommonModule, FormsModule, RouterModule]
})

export class DashboardModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [NameListService]
    };
  }
}

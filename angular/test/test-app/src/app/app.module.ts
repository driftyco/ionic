import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InputsComponent } from './inputs/inputs.component';
import { ModalComponent } from './modal/modal.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { RouterLinkPageComponent } from './router-link-page/router-link-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsTab1Component } from './tabs-tab1/tabs-tab1.component';
import { TabsTab2Component } from './tabs-tab2/tabs-tab2.component';
import { TabsTab1NestedComponent } from './tabs-tab1-nested/tabs-tab1-nested.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { VirtualScrollDetailComponent } from './virtual-scroll-detail/virtual-scroll-detail.component';
import { VirtualScrollInnerComponent } from './virtual-scroll-inner/virtual-scroll-inner.component';
import { NestedOutletComponent } from './nested-outlet/nested-outlet.component';
import { NestedOutletPageComponent } from './nested-outlet-page/nested-outlet-page.component';
import { NestedOutletPage2Component } from './nested-outlet-page2/nested-outlet-page2.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ModalComponent,
    ModalExampleComponent,
    RouterLinkComponent,
    RouterLinkPageComponent,
    HomePageComponent,
    TabsComponent,
    TabsTab1Component,
    TabsTab2Component,
    TabsTab1NestedComponent,
    VirtualScrollComponent,
    VirtualScrollDetailComponent,
    VirtualScrollInnerComponent,
    NestedOutletComponent,
    NestedOutletPageComponent,
    NestedOutletPage2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  entryComponents: [
    ModalExampleComponent,
    NavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InputsComponent } from './inputs/inputs.component';
import { ModalComponent } from './modal/modal.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { RouterLinkPageComponent } from './router-link-page/router-link-page.component';
import { RouterLinkPage2Component } from './router-link-page2/router-link-page2.component';
import { RouterLinkPage3Component } from './router-link-page3/router-link-page3.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { VirtualScrollDetailComponent } from './virtual-scroll-detail/virtual-scroll-detail.component';
import { VirtualScrollInnerComponent } from './virtual-scroll-inner/virtual-scroll-inner.component';
import { NestedOutletComponent } from './nested-outlet/nested-outlet.component';
import { NestedOutletPageComponent } from './nested-outlet-page/nested-outlet-page.component';
import { NestedOutletPage2Component } from './nested-outlet-page2/nested-outlet-page2.component';
import { NavComponent } from './nav/nav.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ProvidersComponent } from './providers/providers.component';
import { SlidesComponent } from './slides/slides.component';
import { FormComponent } from './form/form.component';
import { NavigationPage1Component } from './navigation-page1/navigation-page1.component';
import { NavigationPage2Component } from './navigation-page2/navigation-page2.component';
import { NavigationPage3Component } from './navigation-page3/navigation-page3.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ModalComponent,
    ModalExampleComponent,
    RouterLinkComponent,
    RouterLinkPageComponent,
    RouterLinkPage2Component,
    RouterLinkPage3Component,
    HomePageComponent,
    VirtualScrollComponent,
    VirtualScrollDetailComponent,
    VirtualScrollInnerComponent,
    NestedOutletComponent,
    NestedOutletPageComponent,
    NestedOutletPage2Component,
    NavComponent,
    ViewChildComponent,
    ProvidersComponent,
    SlidesComponent,
    FormComponent,
    NavigationPage1Component,
    NavigationPage2Component,
    NavigationPage3Component,
    AlertComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot({ keyboardHeight: 12345 }),
  ],
  entryComponents: [
    ModalExampleComponent,
    NavComponent
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import { Header } from '../app/shared/components/header.component';
import { Footer } from '../app/shared/components/footer.component';
import { Home } from '../app/home/components/home.component';
import { MenuReceipt } from '../app/menureceipt/components/menureceipt.component';


@Component({
  selector: 'foodpark-app',
  template: `<foodpark-header></foodpark-header>
  			 <foodpark-home></foodpark-home>
  			<foodpark-footer></foodpark-footer>`,
      directives: [
        Header,
        Home,
        Footer],
})

// @RouteConfig([
//      {
//             path: '/Home',
//             name: 'Home',
//             component: Home,
//             useAsDefault: true 
//     },
//      {
//             path: '/menureceipt',
//             name: 'menureceipt',
//             component: MenuReceipt
//     }
    
// ]
// )


export class AppComponent { }

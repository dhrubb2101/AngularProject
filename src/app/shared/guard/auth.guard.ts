import { CanActivateFn } from '@angular/router';

export function authGuard(route: any, state: any) {
  if(!!sessionStorage.getItem("user")){
    return true;

  }else{
    return false;
  }

};


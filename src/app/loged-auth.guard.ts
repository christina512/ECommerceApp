import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logedAuthGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  if (localStorage.getItem('userToken')) {
    return false;
  }else{
    // _router.navigate(["categories"])
    return true;
  }
};

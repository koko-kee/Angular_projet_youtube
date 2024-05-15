import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './core/services/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authsercice = inject(AuthServiceService);
  const router = inject(Router);

  if (authsercice.isAuth()) {
    return true;
  }
  router.navigate([authsercice.redirectUrl]);
  return false;
};

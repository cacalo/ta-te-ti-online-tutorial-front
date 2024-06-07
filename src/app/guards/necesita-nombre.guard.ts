import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { inject } from '@angular/core';

export const necesitaNombreGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  if(usuarioService.nombre()) return true;
  const urlTree = router.parseUrl("/cambiar-nombre");
  return new RedirectCommand(urlTree, {skipLocationChange: true});
};

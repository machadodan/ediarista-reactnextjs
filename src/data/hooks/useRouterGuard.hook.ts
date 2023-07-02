import { useRouter, NextRouter } from "next/router";
import { useEffect } from "react";
import { UserInterface, UserType } from "../@types/UserInterface";

export const privateRoutes = [
  "/editar_usuario", 
  "/oportunidade",
  "/diaria",
  "/pagamento",
];

export const annonymousRoutes = [
  "/cadastro/diarista",
  "/logar_usuario",
  "/recuperar-senha",
  "/",
];

export const houseCleanerOnlyRoutes = [
  "/pagamento", 
  "/oportunidade",
];

export default function useRouterGuard(
  user: UserInterface,
  isLogging: boolean
): NextRouter {
  const router = useRouter(),
    isLogged = user.nome_completo.length > 0,
    isHouseCleaner = user.tipo_usuario === UserType.Diarista;

    useEffect(() => {
      handleNavigation(router.route);

      router.events.on("routeChangeStart", handleNavigation);

      return () => {
        router.events.off("routeChangeStart", handleNavigation);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[router, isLogged, isLogging]);

  function handleNavigation(url: string) {
    if (!isLogging) {
      if (privateRoutes.includes(url) && isLogged) {
        router.replace("/logar_usuario");
        return;
      }

      if (
        (annonymousRoutes.includes(url) && isLogged) ||
        (houseCleanerOnlyRoutes.includes(url) && !isHouseCleaner)
      ) {
        router.replace(getHome());
        return;
      }

      if (url === "/encontrar-diarista" && isHouseCleaner) {
        router.replace("/");
        return;
      }
    }
  }

  function getHome(): string {
    if (!isLogged) {
      return "/";
    }
    return isHouseCleaner ? "/oportunidade" : "/diaria";
  }

  return router;
}

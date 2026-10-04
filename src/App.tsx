import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import LandingPage from "./pages/landing/LandingPage";
import ThemeProvider from "./providers/ThemeProvider";
import AppErrorBoundary from "./components/AppErrorBoundary";
import { ReactLenis, useLenis } from "lenis/react";

const AlumniPage = lazy(() => import("./pages/alumni/AlumniPage"));

function getRoute(): "landing" | "alumni" {
  if (typeof window === "undefined") return "landing";
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  if (path === "/alumni" || path.startsWith("/alumni/") || hash === "#alumni") {
    return "alumni";
  }
  return "landing";
}

function LenisScrollTriggerSync() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis || typeof window === "undefined") return;
    if (import.meta.env.MODE === "test") return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollTriggerModule]) => {
        if (disposed) return;
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        gsap.ticker.lagSmoothing(0);
        const onLenisScroll = () => {
          ScrollTrigger.update();
        };
        const onLoad = () => {
          ScrollTrigger.refresh();
        };
        if (typeof lenis.on === "function") lenis.on("scroll", onLenisScroll);
        window.addEventListener("load", onLoad);
        cleanup = () => {
          if (typeof lenis.off === "function")
            lenis.off("scroll", onLenisScroll);
          window.removeEventListener("load", onLoad);
        };
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [lenis]);
  return null;
}

export default function App() {
  const [route, setRoute] = useState<"landing" | "alumni">(getRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRoute());
    };
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigateToAlumni = useCallback(() => {
    window.history.pushState({}, "", "/alumni");
    setRoute("alumni");
    window.scrollTo(0, 0);
  }, []);

  const navigateToLanding = useCallback((section = "team") => {
    window.history.pushState({}, "", `/#${section}`);
    setRoute("landing");
  }, []);

  return (
    <ThemeProvider>
      <AppErrorBoundary>
        <ReactLenis root options={{ smoothWheel: true, syncTouch: false }}>
          <LenisScrollTriggerSync />
          {route === "alumni" ? (
            <Suspense fallback={null}>
              <AlumniPage
                onBack={() => {
                  navigateToLanding("team");
                }}
                onNavigateHome={() => {
                  navigateToLanding("home");
                }}
              />
            </Suspense>
          ) : (
            <LandingPage onNavigateAlumni={navigateToAlumni} />
          )}
        </ReactLenis>
      </AppErrorBoundary>
    </ThemeProvider>
  );
}

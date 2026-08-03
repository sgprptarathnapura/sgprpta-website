import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteLayout } from "../components/SiteLayout";
import "../lib/i18n";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="container-narrow flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <p className="font-display text-7xl font-bold text-primary">404</p>
          <h1 className="mt-3 text-2xl font-semibold">Page not found</h1>
          <p className="mt-2 text-muted-foreground">This page doesn't exist or has been moved.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-dark"
          >
            Return home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
  }, [error]);


  return (
    <SiteLayout>
      <div className="container-narrow flex min-h-[60vh] items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">This page didn't load</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong. You can try refreshing or head back home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark"
            >
              Try again
            </button>
            <a
              href="/"
              className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SGPRPTA — Sabaragamuwa Road Passenger Transport Authority" },
      {
        name: "description",
        content:
          "Official website of the Sabaragamuwa Road Passenger Transport Authority (SGPRPTA). Bus regulation, RTI information, notices, and contact details for Ratnapura and Kegalle offices.",
      },
      { name: "author", content: "SGPRPTA" },
      { property: "og:title", content: "SGPRPTA — Sabaragamuwa Road Passenger Transport Authority" },
      {
        property: "og:description",
        content:
          "Regulating passenger transport across Sabaragamuwa Province — routes, notices, RTI, and office contacts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStyleSheetUrl from "~/styles/globals.css?url";
import fontStyleSheetUrl from "~/styles/fonts.css?url";

export const links: LinksFunction = () => [
  { rel: 'preload', href: fontStyleSheetUrl, as: 'style' },
  { rel: 'preload', href: tailwindStyleSheetUrl, as: 'style' },
  { rel: "stylesheet", href: fontStyleSheetUrl },
  { rel: "stylesheet", href: tailwindStyleSheetUrl },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-900 text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import React, { lazy } from "react";
import AuthPage from "../../pages/public/AuthPage.tsx";
import HomePage from "../../pages/public/HomePage.tsx";
import PlaylistPage from "../../pages/private/PlaylistPage.tsx";
import GoogleOAuthCallback from "../../pages/oauth/GoogleOAuthCallback.tsx";
import OAuthComplete from "../../pages/oauth/OAuthComplete.tsx";
import OAuthError from "../../pages/oauth/OAuthError.tsx";
import OAuthRoute from "./OAuthRoute.tsx";

const ImportPage = lazy(() => import("../../pages/private/ImportPage.tsx"));
const SettingsPage = lazy(() => import("../../pages/private/SettingsPage.tsx"));
const BrowsePage = lazy(() => import("../../pages/private/BrowsePage.tsx"));
const HelpPage = lazy(() => import("../../pages/public/HelpPage.tsx"));

export interface AppRoute {
  path: string;
  element: React.ReactElement;
  label?: string;
  private?: boolean;
  publicOnly?: boolean;
}

export const AppRoutes: AppRoute[] = [
  {
    path: "/",
    element: <HomePage/>,
    label: "Home"
  },
  {
    path: "/playlists",
    element: <PlaylistPage/>,
    label: "Playlists",
    private: true,
  },
  {
    path: "/import",
    element: <ImportPage/>,
    label: "Import",
    private: true
  },
  {
    path: "/settings",
    element: <SettingsPage/>,
    label: "Settings",
    private: true
  },
  {
    path: "/api/oauth/google/callback",
    element: <GoogleOAuthCallback/>
  },
  {
    path: "/oauth/complete",
    element:
      <OAuthRoute>
        <OAuthComplete/>
      </OAuthRoute>
  },
  {
    path: "/oauth/error",
    element:
      <OAuthRoute>
        <OAuthError/>
      </OAuthRoute>
  },
  {
    path: "/browse",
    element: <BrowsePage/>,
    label: "Browse",
    private: true,
  },
  {
    path: "/help",
    element: <HelpPage/>,
    label: "Help"
  },
  {
    path: "/auth",
    element: <AuthPage/>,
    publicOnly: true
  },
];

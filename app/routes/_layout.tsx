import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
} 
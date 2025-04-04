import { Outlet } from "@remix-run/react";

export default function TeachersLayout() {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
} 
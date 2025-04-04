import { Outlet } from "@remix-run/react";

export default function StudentsLayout() {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
} 
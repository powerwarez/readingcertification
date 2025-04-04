import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 학교 관리자 페이지" },
    { name: "description", content: "책잇수다 학교 관리자용 관리 페이지입니다." },
  ];
};

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <Outlet />
    </div>
  );
} 
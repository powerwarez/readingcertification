import { Outlet, Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { 
  LogOut, 
  GraduationCap, 
  Trophy, 
  BarChart3, 
  Users, 
  Home,
  BookOpen,
  Settings
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 학교 관리자 페이지" },
    { name: "description", content: "책잇수다 학교 관리자용 관리 페이지입니다." },
  ];
};

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="flex">
        {/* 사이드바 */}
        <div className="w-64 bg-white bg-opacity-70 backdrop-blur-lg min-h-screen border-r border-indigo-100 p-4 flex flex-col">
          <div className="mb-8">
            <Link to="/admin">
              <Button variant="ghost" className="w-full justify-start text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 mb-2 font-poorstory">
                <Home size={18} className="mr-2" />
                관리자 홈
              </Button>
            </Link>
            <h2 className="text-xl font-jua text-indigo-800 px-3 mb-4">관리자 메뉴</h2>
          </div>
          
          <nav className="space-y-2 flex-1">
            <Link to="/admin/students">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <GraduationCap size={18} className="mr-2" />
                학생 관리
              </Button>
            </Link>
            <Link to="/admin/teachers">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <Users size={18} className="mr-2" />
                교사 관리
              </Button>
            </Link>
            <Link to="/admin/challenges">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <Trophy size={18} className="mr-2" />
                도전과제 관리
              </Button>
            </Link>
            <Link to="/admin/leaderboard">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <BarChart3 size={18} className="mr-2" />
                리더보드
              </Button>
            </Link>
            <Link to="/admin/books">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <BookOpen size={18} className="mr-2" />
                도서 관리
              </Button>
            </Link>
          </nav>
          
          <div className="pt-4 border-t border-indigo-100">
            <Link to="/admin/settings">
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-800 font-poorstory">
                <Settings size={18} className="mr-2" />
                설정
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-800 font-poorstory">
              <LogOut size={18} className="mr-2" />
              로그아웃
            </Button>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
} 
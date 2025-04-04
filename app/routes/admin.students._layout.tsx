import { Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Trophy,
  BarChart3,
  Settings,
  ArrowLeft
} from "lucide-react";
import { Link } from "@remix-run/react";

export default function StudentsLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="flex">
        {/* 사이드바 */}
        <div className="w-64 bg-white bg-opacity-70 backdrop-blur-lg min-h-screen border-r border-indigo-100 p-4 flex flex-col">
          <div className="mb-8">
            <Link to="/admin">
              <Button variant="ghost" className="w-full justify-start text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 mb-2 font-poorstory">
                <ArrowLeft size={16} className="mr-2" />
                관리자 페이지로
              </Button>
            </Link>
            <h2 className="text-xl font-jua text-indigo-800 px-3 mb-4">학생 관리</h2>
          </div>
          
          <nav className="space-y-2 flex-1">
            <Link to="/admin/students">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <Users size={18} className="mr-2" />
                전체 학년/반 보기
              </Button>
            </Link>
            <Link to="/admin/students/statistics">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <BarChart3 size={18} className="mr-2" />
                독서 통계
              </Button>
            </Link>
            <Link to="/admin/students/challenges">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <Trophy size={18} className="mr-2" />
                도전과제 현황
              </Button>
            </Link>
            <Link to="/admin/students/books">
              <Button variant="ghost" className="w-full justify-start font-poorstory">
                <BookOpen size={18} className="mr-2" />
                읽은 책 현황
              </Button>
            </Link>
          </nav>
          
          <div className="pt-4 border-t border-indigo-100">
            <Link to="/admin/students/settings">
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-800 font-poorstory">
                <Settings size={18} className="mr-2" />
                설정
              </Button>
            </Link>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
} 
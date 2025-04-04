import { Outlet, Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
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

// 임시로 로그인 상태를 확인하는 로더 함수
// 추후 실제 인증 로직으로 대체 필요
export async function loader({ request }: LoaderFunctionArgs) {
  // 세션에서 로그인 상태 확인 (예시)
  // const session = await getSession(request.headers.get("Cookie"));
  // if (!session.has("userId")) {
  //   return redirect("/admin/login");
  // }
  
  // 임시적으로 로그인 상태를 true로 가정
  const isLoggedIn = true;
  
  return json({ isLoggedIn });
}

export default function AdminLayout() {
  const { isLoggedIn } = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="flex">
        {/* 사이드바 - 로그인 된 경우에만 표시 */}
        {isLoggedIn && (
          <div className="w-72 bg-white bg-opacity-70 backdrop-blur-lg min-h-screen border-r border-indigo-100 p-6 flex flex-col shadow-sm">
            <div className="mb-10">
              <Link to="/admin">
                <Button variant="ghost" className="w-full justify-start text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 mb-3 font-poorstory px-4 py-3 rounded-xl">
                  <Home size={20} className="mr-3" />
                  관리자 홈
                </Button>
              </Link>
              <h2 className="text-xl font-jua text-indigo-800 px-4 mb-6 mt-4">관리자 메뉴</h2>
            </div>
            
            <nav className="space-y-3 flex-1">
              <Link to="/admin/students">
                <Button variant="ghost" className="w-full justify-start font-poorstory px-4 py-3 rounded-xl text-base">
                  <GraduationCap size={20} className="mr-3" />
                  학생 관리
                </Button>
              </Link>
              <Link to="/admin/teachers">
                <Button variant="ghost" className="w-full justify-start font-poorstory px-4 py-3 rounded-xl text-base">
                  <Users size={20} className="mr-3" />
                  교사 관리
                </Button>
              </Link>
              <Link to="/admin/challenges">
                <Button variant="ghost" className="w-full justify-start font-poorstory px-4 py-3 rounded-xl text-base">
                  <Trophy size={20} className="mr-3" />
                  도전과제 관리
                </Button>
              </Link>
              <Link to="/admin/leaderboard">
                <Button variant="ghost" className="w-full justify-start font-poorstory px-4 py-3 rounded-xl text-base">
                  <BarChart3 size={20} className="mr-3" />
                  리더보드
                </Button>
              </Link>
              <Link to="/admin/books">
                <Button variant="ghost" className="w-full justify-start font-poorstory px-4 py-3 rounded-xl text-base">
                  <BookOpen size={20} className="mr-3" />
                  도서 관리
                </Button>
              </Link>
            </nav>
            
            <div className="pt-6 mt-2 border-t border-indigo-100">
              <Link to="/admin/settings">
                <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-800 font-poorstory px-4 py-3 rounded-xl mb-2 text-base">
                  <Settings size={20} className="mr-3" />
                  설정
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-800 hover:bg-red-50 font-poorstory px-4 py-3 rounded-xl text-base">
                <LogOut size={20} className="mr-3" />
                로그아웃
              </Button>
            </div>
          </div>
        )}

        {/* 메인 콘텐츠 */}
        <div className={`flex-1 overflow-auto ${isLoggedIn ? 'pl-4' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
} 
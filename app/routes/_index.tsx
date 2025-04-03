import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "~/components/ui/card";
import { Book, Trophy, Users, School, User, BookOpen, ArrowRight } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 함께 책을 읽어요!" },
    { name: "description", content: "초등학생을 위한 재미있는 독서 플랫폼, 책잇수다" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-jua text-indigo-700 mb-6">책잇수다</h1>
          
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none mb-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute right-8 top-8 opacity-20">
              <BookOpen size={84} strokeWidth={1} />
            </div>
            <CardContent className="pt-8 pb-8">
              <p className="text-xl font-poorstory">
                책을 읽고 친구들과 함께 이야기 나누는 신나는 독서 여행을 떠나보세요!
              </p>
              <p className="text-lg mt-4 opacity-90 font-poorstory">
                독서 뱃지도 모으고, 팀 미션도 도전해봐요!
              </p>
            </CardContent>
          </Card>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Link to="/admin/login" className="block transform hover:scale-105 transition-all duration-300">
            <Card className="h-full rounded-2xl shadow-lg border-2 border-blue-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <CardHeader>
                <div className="text-5xl mb-4 flex justify-center">
                  <School size={56} className="text-indigo-600" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl font-jua text-indigo-700 text-center">학교 관리자 페이지</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-poorstory text-center">
                  학교 전체의 독서 활동을 관리하고 학생 및 교사 계정을 관리할 수 있습니다.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl shadow hover:shadow-md font-jua flex items-center justify-center gap-2">
                  관리자 페이지로
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </Link>
          
          <Link to="/teacher" className="block transform hover:scale-105 transition-all duration-300">
            <Card className="h-full rounded-2xl shadow-lg border-2 border-purple-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-purple-500"></div>
              <CardHeader>
                <div className="text-5xl mb-4 flex justify-center">
                  <User size={56} className="text-purple-600" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl font-jua text-purple-700 text-center">담임교사 로그인</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-poorstory text-center">
                  담임 학급의 독서 활동을 관리하고 학생들의 독서 여정을 지원하세요.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow hover:shadow-md font-jua flex items-center justify-center gap-2">
                  담임교사 로그인
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-300"></div>
            <CardHeader>
              <div className="text-4xl mb-2 flex justify-center">
                <Book size={48} className="text-emerald-600" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg font-jua text-emerald-700 text-center">나만의 독서 기록</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-poorstory text-center">
                읽은 책을 기록하고 생각을 적어보세요. 읽은 책이 많아질수록 나만의 책 컬렉션이 커져요!
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-300"></div>
            <CardHeader>
              <div className="text-4xl mb-2 flex justify-center">
                <Trophy size={48} className="text-amber-600" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg font-jua text-amber-700 text-center">재미있는 도전과제</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-poorstory text-center">
                다양한 도전과제를 달성하고 멋진 뱃지를 모아보세요. 특별한 보물이 기다리고 있어요!
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-300"></div>
            <CardHeader>
              <div className="text-4xl mb-2 flex justify-center">
                <Users size={48} className="text-blue-600" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg font-jua text-blue-700 text-center">함께하는 독서활동</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-poorstory text-center">
                친구들과 독서팀을 만들고 함께 미션을 도전해보세요. 혼자보다 더 재미있어요!
              </p>
            </CardContent>
          </Card>
        </div>
        
        <footer className="mt-12 text-center py-4">
          <p className="text-sm text-gray-500 font-poorstory">© 2025 책잇수다 - 모든 선생님과 학생을 위한 독서 플랫폼</p>
        </footer>
      </div>
    </div>
  );
} 
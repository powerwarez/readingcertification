import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "~/components/ui/card";
import { 
  LogOut, 
  GraduationCap, 
  Trophy, 
  BarChart3, 
  ArrowRight, 
  ArrowLeft,
  BookOpen,
  UserRound,
  CheckCircle
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 담임교사 관리 페이지" },
    { name: "description", content: "책잇수다 담임교사용 관리 페이지입니다." },
  ];
};

export function loader() {
  return json({
    title: "책잇수다 담임교사 페이지",
    welcomeMessage: "반갑습니다! 학급 아이들의 독서 여정을 함께 만들어보세요.",
    cards: [
      {
        title: "학생 관리",
        description: "학급 내 학생들의 독서 활동을 관리할 수 있습니다.",
        link: "/teacher/students",
        iconName: "GraduationCap",
        color: "bg-gradient-to-r from-blue-400 to-cyan-300",
        borderColor: "border-blue-300"
      },
      {
        title: "도전과제 관리",
        description: "학급에 맞는 독서 도전과제와 뱃지를 설정해보세요.",
        link: "/teacher/challenges",
        iconName: "Trophy",
        color: "bg-gradient-to-r from-amber-400 to-yellow-300",
        borderColor: "border-amber-300"
      },
      {
        title: "리더보드",
        description: "학급 내 학생들의 독서 활동 순위와 통계를 확인하세요.",
        link: "/teacher/leaderboard",
        iconName: "BarChart3",
        color: "bg-gradient-to-r from-green-400 to-emerald-300",
        borderColor: "border-green-300"
      }
    ],
    recentActivities: [
      // 실제로는 여기에 최근 활동 데이터가
      // 들어갈 예정입니다 (현재는 빈 상태)
    ]
  });
}

export default function TeacherDashboard() {
  const data = useLoaderData<typeof loader>();
  
  // 아이콘 매핑 함수
  const getIcon = (iconName: string) => {
    const icons = {
      "GraduationCap": GraduationCap,
      "Trophy": Trophy,
      "BarChart3": BarChart3
    };
    return icons[iconName as keyof typeof icons];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()} 
              className="text-sm font-poorstory bg-white bg-opacity-80 text-indigo-600 rounded-full px-4 py-2 shadow-md hover:shadow-lg border-2 border-indigo-200 flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              <span>뒤로 가기</span>
            </Button>
            <Button variant="outline" className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-100 rounded-xl font-jua flex items-center gap-2">
              <LogOut size={18} />
              로그아웃
            </Button>
          </div>
          
          <h1 className="text-4xl font-jua text-indigo-700 text-center mb-6">{data.title}</h1>
          
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none mb-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute right-4 top-4 opacity-20">
              <BookOpen size={64} strokeWidth={1} />
            </div>
            <CardContent className="pt-8 pb-8">
              <p className="text-xl font-poorstory">{data.welcomeMessage}</p>
              <p className="text-sm mt-4 opacity-80 font-poorstory">학생들에게 독서의 즐거움을 알려주세요!</p>
            </CardContent>
          </Card>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <Link key={index} to={card.link} className="block transform hover:scale-105 transition-all duration-300">
              <Card className={`h-full rounded-2xl shadow-lg border-2 ${card.borderColor} overflow-hidden`}>
                <div className={`h-2 ${card.color}`}></div>
                <CardHeader>
                  <div className="text-5xl mb-4 flex justify-center">
                    {(() => {
                      const IconComponent = getIcon(card.iconName);
                      return <IconComponent size={56} className="text-indigo-600" strokeWidth={1.5} />;
                    })()}
                  </div>
                  <CardTitle className="text-xl font-jua text-indigo-700">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-poorstory">{card.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className={`w-full justify-start hover:text-indigo-700 rounded-xl text-indigo-600 font-poorstory flex items-center gap-1`}>
                    관리하기 
                    <ArrowRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-2 rounded-2xl shadow-lg border-2 border-indigo-100 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-indigo-400 to-blue-300"></div>
            <CardHeader>
              <CardTitle className="text-2xl font-jua text-indigo-700">최근 활동</CardTitle>
            </CardHeader>
            <CardContent>
              {data.recentActivities && data.recentActivities.length > 0 ? (
                <div className="space-y-4">
                  {/* 활동 데이터 매핑 */}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <p className="text-gray-500 font-poorstory">아직 활동 내역이 없습니다.</p>
                  <Button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:shadow-md font-jua flex items-center mx-auto gap-2">
                    <CheckCircle size={18} />
                    첫 번째 활동 만들기
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-lg border-2 border-green-100 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-300"></div>
            <CardHeader>
              <CardTitle className="text-2xl font-jua text-green-700">우리 반 통계</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl flex justify-between items-center">
                  <p className="text-green-700 font-jua">이번 달 읽은 책</p>
                  <div className="flex items-center gap-2">
                    <BookOpen size={20} className="text-green-500" />
                    <p className="text-3xl font-bold text-green-600 font-poorstory">0 권</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl flex justify-between items-center">
                  <p className="text-blue-700 font-jua">독서 참여 학생</p>
                  <div className="flex items-center gap-2">
                    <UserRound size={20} className="text-blue-500" />
                    <p className="text-3xl font-bold text-blue-600 font-poorstory">0 명</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl flex justify-between items-center">
                  <p className="text-purple-700 font-jua">완료된 도전과제</p>
                  <div className="flex items-center gap-2">
                    <Trophy size={20} className="text-purple-500" />
                    <p className="text-3xl font-bold text-purple-600 font-poorstory">0 개</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <footer className="mt-12 text-center py-4">
          <p className="text-sm text-gray-500 font-poorstory">© 2025 책잇수다 - 모든 담임교사와 학생을 위한 독서 플랫폼</p>
        </footer>
      </div>
    </div>
  );
} 
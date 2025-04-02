import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Book, Trophy, Users, School, User } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 함께 책을 읽어요!" },
    { name: "description", content: "초등학생을 위한 재미있는 독서 플랫폼, 책잇수다" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-jua text-purple-600 mb-4">책잇수다</h1>
          <p className="text-xl font-poorstory text-gray-700 max-w-3xl mx-auto rounded-full bg-white bg-opacity-80 py-4 px-6 shadow-md">
            책을 읽고 친구들과 함께 이야기 나누는 <br/>
            <span className="text-pink-500 font-bold"> 신나는 독서 여행</span>을 떠나보세요! <br/>
            독서 뱃지도 모으고, 팀 미션도 도전해봐요! <br/>
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link to="/admin" className="w-full transform hover:scale-105 transition-transform duration-300">
            <Button className="w-full h-20 text-xl font-jua rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg border-4 border-white">
              <School size={24} className="mr-2" />
              선생님 입장하기
            </Button>
          </Link>
          <Link to="/student" className="w-full transform hover:scale-105 transition-transform duration-300">
            <Button variant="outline" className="w-full h-20 text-xl font-jua rounded-2xl bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-lg border-4 border-white">
              <User size={24} className="mr-2" />
              학생 입장하기
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-green-300">
            <div className="h-3 bg-gradient-to-r from-green-400 to-teal-400"></div>
            <CardHeader className="bg-gradient-to-b from-green-50 to-white">
              <div className="mb-4 flex justify-center">
                <Book size={64} className="text-green-600" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-jua text-green-600 text-center">나만의 독서 기록</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-poorstory text-gray-600">
                읽은 책을 기록하고 생각을 적어보세요. 읽은 책이 많아질수록 나만의 책 컬렉션이 커져요!
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-purple-300">
            <div className="h-3 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <CardHeader className="bg-gradient-to-b from-purple-50 to-white">
              <div className="mb-4 flex justify-center">
                <Trophy size={64} className="text-purple-600" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-jua text-purple-600 text-center">재미있는 도전과제</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-poorstory text-gray-600">
                다양한 도전과제를 달성하고 멋진 뱃지를 모아보세요. 특별한 보물이 기다리고 있어요!
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-blue-300">
            <div className="h-3 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
            <CardHeader className="bg-gradient-to-b from-blue-50 to-white">
              <div className="mb-4 flex justify-center">
                <Users size={64} className="text-blue-600" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-jua text-blue-600 text-center">친구들과 함께해요</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-poorstory text-gray-600">
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
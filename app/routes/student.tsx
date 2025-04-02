import { Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { User, KeyRound, HelpCircle, Book, Gamepad2, Palette, Rocket, ArrowLeft, Hand } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 학생 로그인" },
    { name: "description", content: "책잇수다 학생 로그인 페이지입니다." },
  ];
};

export default function StudentLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-jua text-purple-600 mb-4">안녕, 친구들!</h1>
          <div className="text-7xl mb-4 flex justify-center">
            <Hand className="text-purple-500" size={80} strokeWidth={1.5} />
          </div>
          <p className="text-xl font-poorstory text-gray-700 rounded-full bg-white bg-opacity-70 py-2 px-4 shadow-md inline-block">
            책잇수다에 <span className="text-pink-500 font-bold">입장</span>해볼까요?
          </p>
        </div>
        
        <Card className="rounded-3xl overflow-hidden shadow-xl border-4 border-pink-300">
          <div className="h-3 bg-gradient-to-r from-pink-400 to-purple-400"></div>
          <CardHeader className="bg-gradient-to-b from-purple-50 to-white">
            <CardTitle className="text-2xl font-jua text-purple-600">로그인하기</CardTitle>
            <CardDescription className="text-lg font-poorstory">비밀 열쇠로 나만의 독서 세계를 열어보세요!</CardDescription>
          </CardHeader>
          <CardContent>
            <Form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-lg font-jua text-indigo-700">나의 아이디</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-purple-300" size={18} />
                  </div>
                  <Input 
                    id="studentId" 
                    name="studentId" 
                    placeholder="아이디를 입력해주세요" 
                    required 
                    className="pl-10 rounded-xl h-12 text-lg border-2 border-indigo-200 focus:border-indigo-400 font-poorstory"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-lg font-jua text-indigo-700">비밀 암호</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="text-purple-300" size={18} />
                  </div>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="비밀번호를 입력해주세요" 
                    required 
                    className="pl-10 rounded-xl h-12 text-lg border-2 border-indigo-200 focus:border-indigo-400 font-poorstory"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-5 w-5 rounded border-purple-300 text-purple-600 focus:ring-purple-600"
                />
                <Label htmlFor="remember" className="font-poorstory text-indigo-700">나를 기억해줘!</Label>
              </div>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 bg-gradient-to-b from-white to-purple-50 pt-4">
            <Button className="w-full h-14 text-xl font-jua rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span>모험 시작하기!</span>
              <Rocket size={24} />
            </Button>
            <div className="text-center text-indigo-700 mt-2">
              <a href="/help/login" className="text-purple-500 hover:text-purple-700 hover:underline text-lg font-poorstory flex items-center justify-center gap-1">
                <HelpCircle size={16} />
                <span>도움이 필요해요!</span>
              </a>
            </div>
          </CardFooter>
        </Card>
        
        <div className="mt-10 text-center">
          <div className="space-y-4">
            <p className="font-poorstory text-gray-700 bg-white bg-opacity-70 py-2 px-4 rounded-2xl shadow-md inline-block">
              계정이 없다면 선생님에게 물어보세요!
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()} 
              className="mt-4 text-lg font-poorstory bg-white bg-opacity-80 text-purple-600 rounded-full px-6 shadow-md hover:shadow-lg border-2 border-purple-300 flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              메인 페이지로 돌아가기
            </Button>
          </div>
          
          <div className="mt-10 flex justify-center space-x-8">
            {[
              { icon: Book, delay: 0 },
              { icon: Gamepad2, delay: 0.1 },
              { icon: Palette, delay: 0.2 },
              { icon: Rocket, delay: 0.3 }
            ].map((item, i) => (
              <div 
                key={i} 
                className="animate-bounce" 
                style={{ animationDelay: `${item.delay}s` }}
              >
                <item.icon size={32} className="text-indigo-600" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
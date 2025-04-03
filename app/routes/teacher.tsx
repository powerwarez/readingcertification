import { Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { HelpCircle, ArrowLeft, LogIn, User } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 담임교사 로그인" },
    { name: "description", content: "책잇수다 담임교사 로그인 페이지입니다." },
  ];
};

export default function TeacherLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-jua text-indigo-700 mb-6">담임교사 로그인</h1>
        </header>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none mb-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute right-4 top-4 opacity-20">
              <User size={64} strokeWidth={1} />
            </div>
            <CardContent className="pt-8 pb-8">
              <p className="text-xl font-poorstory">안녕하세요, 선생님!</p>
              <p className="text-lg mt-4 opacity-90 font-poorstory">
                로그인하시고 학급의 독서 활동을 관리해보세요.
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-lg border-2 border-indigo-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-jua text-indigo-700">로그인</CardTitle>
              <CardDescription className="text-gray-600 font-poorstory">
                담임 학급의 독서 여정을 관리하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacherId" className="text-sm font-jua text-indigo-700">교사 아이디</Label>
                  <Input 
                    id="teacherId" 
                    name="teacherId" 
                    placeholder="아이디를 입력해주세요" 
                    required 
                    className="h-11 rounded-xl border-2 border-indigo-100 focus:border-indigo-300 font-poorstory"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm font-jua text-indigo-700">비밀번호</Label>
                    <a href="/password-reset" className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline font-poorstory">
                      비밀번호 찾기
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="비밀번호를 입력해주세요" 
                    required 
                    className="h-11 rounded-xl border-2 border-indigo-100 focus:border-indigo-300 font-poorstory"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <Label htmlFor="remember" className="text-sm font-poorstory text-indigo-700">로그인 상태 유지</Label>
                  </div>
                </div>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pt-2 pb-6">
              <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-md transition-all font-jua flex items-center justify-center gap-2">
                <LogIn size={18} />
                <span>로그인</span>
              </Button>
              
              <div className="flex items-center gap-2 pt-4">
                <span className="border-t flex-grow border-indigo-100"></span>
                <span className="text-xs text-indigo-400 font-poorstory">또는</span>
                <span className="border-t flex-grow border-indigo-100"></span>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()} 
                className="mt-2 text-sm font-poorstory text-indigo-600 rounded-xl border-2 border-indigo-200 hover:bg-indigo-50 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                메인 페이지로 돌아가기
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center">
            <a href="/help/login" className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline font-poorstory flex items-center justify-center gap-1">
              <HelpCircle size={16} />
              <span>도움이 필요하신가요?</span>
            </a>
            
            <p className="mt-4 text-sm text-gray-600 font-poorstory">
              계정이 없으시면 <a href="/contact" className="text-indigo-600 hover:underline">학교 관리자</a>에게 문의하세요
            </p>
            
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 font-poorstory">© 2025 책잇수다 - 선생님과 학생을 위한 독서 플랫폼</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
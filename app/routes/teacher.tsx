import { Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { HelpCircle, ArrowLeft, LogIn } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 담임교사 로그인" },
    { name: "description", content: "책잇수다 담임교사 로그인 페이지입니다." },
  ];
};

export default function TeacherLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">담임교사 로그인</h1>
          <p className="text-slate-600 text-lg">
            학급 독서 활동 관리 시스템에 접속합니다
          </p>
        </div>
        
        <Card className="border-0 shadow-xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl text-slate-800">로그인</CardTitle>
            <CardDescription className="text-slate-500">학급의 독서 활동을 관리하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <Form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teacherId" className="text-sm font-medium text-slate-700">교사 아이디</Label>
                <Input 
                  id="teacherId" 
                  name="teacherId" 
                  placeholder="아이디를 입력해주세요" 
                  required 
                  className="h-10 rounded-md border border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm font-medium text-slate-700">비밀번호</Label>
                  <a href="/password-reset" className="text-xs text-blue-600 hover:text-blue-800 hover:underline">
                    비밀번호 찾기
                  </a>
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="비밀번호를 입력해주세요" 
                  required 
                  className="h-10 rounded-md border border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="remember" className="text-sm text-slate-600">로그인 상태 유지</Label>
                </div>
                <a href="/help/login" className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1">
                  <HelpCircle size={14} />
                  <span>도움말</span>
                </a>
              </div>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-2 pb-6">
            <Button className="w-full h-11 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center gap-2">
              <LogIn size={18} />
              <span>로그인</span>
            </Button>
            
            <div className="flex items-center gap-2 pt-4">
              <span className="border-t flex-grow border-slate-200"></span>
              <span className="text-xs text-slate-500">또는</span>
              <span className="border-t flex-grow border-slate-200"></span>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()} 
              className="mt-2 text-sm text-slate-600 rounded-md border border-slate-300 hover:bg-slate-100 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              메인 페이지로 돌아가기
            </Button>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">계정이 없으시면 <a href="/contact" className="text-blue-600 hover:underline">학교 관리자</a>에게 문의하세요</p>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">© 2025 책잇수다 - 학교 독서 관리 시스템</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
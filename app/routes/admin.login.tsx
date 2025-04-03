import { Form, useActionData } from "@remix-run/react";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { HelpCircle, ArrowLeft, LogIn, School, AlertCircle } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 학교 관리자 로그인" },
    { name: "description", content: "책잇수다 학교 관리자 로그인 페이지입니다." },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const adminId = formData.get("adminId");
  const password = formData.get("password");

  // 임시 로그인 처리 - 아이디와 비밀번호가 모두 'test'인 경우에만 로그인 성공
  if (adminId === "test" && password === "test") {
    // 실제 환경에서는 세션 설정 등의 추가 작업 필요
    return redirect("/admin");
  }

  // 로그인 실패
  return json(
    { error: "아이디 또는 비밀번호가 올바르지 않습니다." },
    { status: 400 }
  );
}

export default function AdminLogin() {
  const actionData = useActionData<typeof action>();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-jua text-indigo-800 mb-6">학교 관리자 로그인</h1>
        </header>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none mb-8 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute right-4 top-4 opacity-20">
              <School size={64} strokeWidth={1} />
            </div>
            <CardContent className="pt-8 pb-8">
              <p className="text-xl font-poorstory">학교 관리자 포털에 오신 것을 환영합니다!</p>
              <p className="text-lg mt-4 opacity-90 font-poorstory">
                학교 전체의 독서 활동을 총괄 관리하실 수 있습니다.
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-jua text-blue-800">관리자 로그인</CardTitle>
              <CardDescription className="text-gray-600 font-poorstory">
                학교 독서 관리 시스템에 접속하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              {actionData?.error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                  <AlertCircle size={18} className="text-red-500" />
                  <p className="text-sm text-red-600 font-poorstory">{actionData.error}</p>
                </div>
              )}
              <Form className="space-y-4" method="post" id="adminLoginForm">
                <div className="space-y-2">
                  <Label htmlFor="adminId" className="text-sm font-jua text-blue-800">관리자 아이디</Label>
                  <Input 
                    id="adminId" 
                    name="adminId" 
                    placeholder="아이디를 입력해주세요" 
                    required 
                    className="h-11 rounded-xl border-2 border-blue-100 focus:border-blue-300 font-poorstory"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm font-jua text-blue-800">비밀번호</Label>
                    <a href="/admin/password-reset" className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-poorstory">
                      비밀번호 찾기
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="비밀번호를 입력해주세요" 
                    required 
                    className="h-11 rounded-xl border-2 border-blue-100 focus:border-blue-300 font-poorstory"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className="h-4 w-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                    />
                    <Label htmlFor="remember" className="text-sm font-poorstory text-blue-800">로그인 상태 유지</Label>
                  </div>
                </div>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pt-2 pb-6">
              <Button 
                type="submit" 
                form="adminLoginForm"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-md transition-all font-jua flex items-center justify-center gap-2"
              >
                <LogIn size={18} />
                <span>로그인</span>
              </Button>
              
              <div className="flex items-center gap-2 pt-4">
                <span className="border-t flex-grow border-blue-100"></span>
                <span className="text-xs text-blue-400 font-poorstory">또는</span>
                <span className="border-t flex-grow border-blue-100"></span>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()} 
                className="mt-2 text-sm font-poorstory text-blue-600 rounded-xl border-2 border-blue-200 hover:bg-blue-50 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                메인 페이지로 돌아가기
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center">
            <a href="/admin/help" className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-poorstory flex items-center justify-center gap-1">
              <HelpCircle size={16} />
              <span>도움이 필요하신가요?</span>
            </a>
            
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 font-poorstory">© 2025 책잇수다 - 모든 담임교사와 학생을 위한 독서 플랫폼</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
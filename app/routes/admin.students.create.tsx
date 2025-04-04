import { NavLink } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { 
  GraduationCap, 
  UserPlus, 
  ListFilter, 
  Save,
  XCircle,
  Upload
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 학생 계정 생성" },
    { name: "description", content: "학생 계정을 생성하고 관리할 수 있습니다." },
  ];
};

export default function StudentsCreate() {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-8">
        <h1 className="text-3xl font-jua text-indigo-800 mb-3">학생 관리</h1>
        <p className="text-gray-600 font-poorstory text-lg mb-6">학생들의 정보와 계정을 관리할 수 있습니다.</p>
        
        {/* 탭 메뉴 */}
        <div className="bg-white p-1 rounded-xl shadow-sm border border-indigo-100 mb-8">
          <div className="flex flex-wrap gap-2">
            <NavLink to="/admin/students" className={({isActive}) => 
              `flex items-center gap-2 px-4 py-3 rounded-lg font-poorstory transition-colors ${
                isActive 
                  ? "bg-indigo-100 text-indigo-800 font-medium" 
                  : "hover:bg-indigo-50 text-gray-600"
              }`
            } end>
              <GraduationCap size={18} />
              <span>학년/반 관리</span>
            </NavLink>
            
            <NavLink to="/admin/students/list" className={({isActive}) => 
              `flex items-center gap-2 px-4 py-3 rounded-lg font-poorstory transition-colors ${
                isActive 
                  ? "bg-indigo-100 text-indigo-800 font-medium" 
                  : "hover:bg-indigo-50 text-gray-600"
              }`
            }>
              <ListFilter size={18} />
              <span>전체 학생 보기</span>
            </NavLink>
            
            <NavLink to="/admin/students/create" className={({isActive}) => 
              `flex items-center gap-2 px-4 py-3 rounded-lg font-poorstory transition-colors ${
                isActive 
                  ? "bg-indigo-100 text-indigo-800 font-medium" 
                  : "hover:bg-indigo-50 text-gray-600"
              }`
            }>
              <UserPlus size={18} />
              <span>학생 계정 생성</span>
            </NavLink>
          </div>
        </div>
      </header>

      {/* 학생 계정 생성 내용 */}
      <div>
        <h2 className="text-2xl font-jua text-indigo-700 mb-4">학생 계정 생성</h2>
        <p className="text-gray-600 font-poorstory mb-6">새로운 학생 계정을 생성하거나 대량으로 등록할 수 있습니다.</p>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 개별 학생 등록 */}
          <Card className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-md bg-white">
            <div className="h-3 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
            <CardHeader>
              <CardTitle className="text-xl font-jua text-indigo-700">개별 학생 등록</CardTitle>
              <CardDescription className="font-poorstory">학생 정보를 직접 입력하여 등록합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-poorstory">이름</Label>
                    <Input id="name" placeholder="학생 이름" className="font-poorstory" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="grade" className="font-poorstory">학년</Label>
                      <Select>
                        <SelectTrigger id="grade" className="font-poorstory">
                          <SelectValue placeholder="학년 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((grade) => (
                            <SelectItem key={grade} value={grade.toString()} className="font-poorstory">
                              {grade}학년
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="class" className="font-poorstory">반</Label>
                      <Select>
                        <SelectTrigger id="class" className="font-poorstory">
                          <SelectValue placeholder="반 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classNum) => (
                            <SelectItem key={classNum} value={classNum.toString()} className="font-poorstory">
                              {classNum}반
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="number" className="font-poorstory">번호</Label>
                      <Input id="number" type="number" placeholder="번호" className="font-poorstory" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="studentId" className="font-poorstory">학번(선택)</Label>
                    <Input id="studentId" placeholder="학번" className="font-poorstory" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="font-poorstory border-indigo-200 text-indigo-700">
                <XCircle size={18} className="mr-2" />
                초기화
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 font-poorstory">
                <Save size={18} className="mr-2" />
                학생 등록
              </Button>
            </CardFooter>
          </Card>
          
          {/* 대량 등록 */}
          <Card className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-md bg-white">
            <div className="h-3 bg-gradient-to-r from-indigo-400 to-green-400"></div>
            <CardHeader>
              <CardTitle className="text-xl font-jua text-indigo-700">대량 학생 등록</CardTitle>
              <CardDescription className="font-poorstory">엑셀 파일을 업로드하여 여러 학생을 한 번에 등록합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="w-12 h-12 text-indigo-400" />
                    <h3 className="text-lg font-poorstory text-gray-700">엑셀 파일 업로드</h3>
                    <p className="text-sm text-gray-500 font-poorstory mb-4">
                      .xlsx 또는 .csv 파일을 드래그하거나 선택하세요.
                    </p>
                    <Button variant="outline" className="font-poorstory border-indigo-200 text-indigo-700">
                      파일 선택
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-poorstory text-indigo-800 mb-2">양식 다운로드</h4>
                  <p className="text-sm text-gray-500 font-poorstory mb-2">
                    아래 양식을 다운로드하여 학생 정보를 입력하세요.
                  </p>
                  <Button variant="link" className="font-poorstory text-indigo-600 p-0 h-auto">
                    엑셀 양식 다운로드
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700 font-poorstory">
                <Upload size={18} className="mr-2" />
                파일로 일괄 등록
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 
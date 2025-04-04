import { json } from "@remix-run/node";
import { useLoaderData, NavLink } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent } from "~/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { 
  GraduationCap, 
  UserPlus, 
  ListFilter, 
  Search,
  Edit,
  UserX
} from "lucide-react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 전체 학생 보기" },
    { name: "description", content: "전체 학생 목록을 확인하고 관리할 수 있습니다." },
  ];
};

// 임시 데이터 - 나중에 데이터베이스에서 가져올 예정
export function loader() {
  return json({
    students: [
      { id: 1, name: "김학생", grade: 1, class: 2, number: 1, joinDate: "2022-03-01", isActive: true },
      { id: 2, name: "이동수", grade: 1, class: 2, number: 2, joinDate: "2022-03-01", isActive: true },
      { id: 3, name: "박미리", grade: 2, class: 1, number: 3, joinDate: "2022-03-01", isActive: true },
      { id: 4, name: "최지우", grade: 3, class: 1, number: 4, joinDate: "2022-03-01", isActive: true },
      { id: 5, name: "정도윤", grade: 4, class: 2, number: 5, joinDate: "2022-03-01", isActive: false },
      { id: 6, name: "한수빈", grade: 5, class: 1, number: 6, joinDate: "2022-03-01", isActive: true },
      { id: 7, name: "윤태양", grade: 6, class: 1, number: 7, joinDate: "2022-03-01", isActive: true },
      { id: 8, name: "조은별", grade: 1, class: 2, number: 8, joinDate: "2022-03-01", isActive: true }
    ]
  });
}

export default function StudentsList() {
  const data = useLoaderData<typeof loader>();
  const [searchTerm, setSearchTerm] = useState("");
  
  // 검색 기능
  const filteredStudents = data.students.filter(student => 
    student.name.includes(searchTerm) || 
    `${student.grade}학년 ${student.class}반 ${student.number}번`.includes(searchTerm)
  );

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

      {/* 전체 학생 보기 내용 */}
      <div>
        <h2 className="text-2xl font-jua text-indigo-700 mb-4">전체 학생 보기</h2>
        <p className="text-gray-600 font-poorstory mb-6">모든 학생의 목록을 확인하고 관리할 수 있습니다.</p>
      
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="이름 또는 학번으로 검색"
              className="pl-12 py-6 border-2 border-indigo-100 focus:border-indigo-300 rounded-xl font-poorstory"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Card className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-md bg-white bg-opacity-90">
          <div className="h-3 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-jua text-base">이름</TableHead>
                  <TableHead className="font-jua text-base">학년/반/번호</TableHead>
                  <TableHead className="font-jua text-base">상태</TableHead>
                  <TableHead className="font-jua text-base">가입일</TableHead>
                  <TableHead className="font-jua text-base text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-poorstory text-base py-4">{student.name}</TableCell>
                    <TableCell className="font-poorstory text-base">{student.grade}학년 {student.class}반 {student.number}번</TableCell>
                    <TableCell>
                      {student.isActive ? (
                        <Badge className="bg-green-500 font-poorstory text-sm px-3 py-1">활성</Badge>
                      ) : (
                        <Badge variant="outline" className="text-red-500 border-red-300 font-poorstory text-sm px-3 py-1">비활성</Badge>
                      )}
                    </TableCell>
                    <TableCell className="font-poorstory text-base">{student.joinDate}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="hover:bg-indigo-50"
                        >
                          <Edit className="h-5 w-5 text-indigo-600" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="hover:bg-red-50"
                        >
                          <UserX className="h-5 w-5 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
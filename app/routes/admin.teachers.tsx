import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent } from "~/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { 
  Search,
  Edit,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 교사 관리" },
    { name: "description", content: "학교 내 교사 관리 페이지입니다." },
  ];
};

// 임시 데이터 - 나중에 데이터베이스에서 가져올 예정
export function loader() {
  return json({
    schoolName: "행복한 초등학교",
    teachers: [
      { 
        id: 1, 
        name: "김교장",
        email: "principal@school.edu",
        isAdmin: true,
        isHomeroom: false,
        grade: null,
        class: null,
        joinDate: "2022-03-01"
      },
      { 
        id: 2, 
        name: "이담임",
        email: "lee@school.edu",
        isAdmin: false,
        isHomeroom: true,
        grade: 1,
        class: 2,
        joinDate: "2022-03-10"
      },
      { 
        id: 3, 
        name: "박선생",
        email: "park@school.edu",
        isAdmin: false,
        isHomeroom: true,
        grade: 3,
        class: 1,
        joinDate: "2022-03-15"
      },
      { 
        id: 4, 
        name: "최선생",
        email: "choi@school.edu",
        isAdmin: false,
        isHomeroom: true,
        grade: 5,
        class: 1,
        joinDate: "2022-03-20"
      },
      { 
        id: 5, 
        name: "정선생",
        email: "jung@school.edu",
        isAdmin: false,
        isHomeroom: false,
        grade: null,
        class: null,
        joinDate: "2022-04-01"
      }
    ]
  });
}

export default function TeachersIndex() {
  const data = useLoaderData<typeof loader>();
  const [searchTerm, setSearchTerm] = useState("");
  // 선택된 교사 상태 - 다이얼로그를 위해 필요함
  const [, setSelectedTeacher] = useState<typeof data.teachers[0] | null>(null);
  
  // 검색 기능
  const filteredTeachers = data.teachers.filter(teacher => 
    teacher.name.includes(searchTerm) || 
    teacher.email.includes(searchTerm)
  );

  // 담임 학년/반 정보 수정 함수
  const handleTeacherEdit = (teacher: typeof data.teachers[0]) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-10">
        <h1 className="text-3xl font-jua text-indigo-800 mb-3">{data.schoolName} 교사 관리</h1>
        <p className="text-gray-600 font-poorstory text-lg mb-6">우리 학교 소속 선생님들의 정보를 관리할 수 있습니다.</p>
        
        <div className="flex items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="이름 또는 이메일로 검색"
              className="pl-12 py-6 border-2 border-indigo-100 focus:border-indigo-300 rounded-xl font-poorstory"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <Card className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-md bg-white bg-opacity-90">
        <div className="h-3 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-jua text-base">이름</TableHead>
                <TableHead className="font-jua text-base">이메일</TableHead>
                <TableHead className="font-jua text-base">권한</TableHead>
                <TableHead className="font-jua text-base">담당 학급</TableHead>
                <TableHead className="font-jua text-base">가입일</TableHead>
                <TableHead className="font-jua text-base text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-poorstory text-base py-4">{teacher.name}</TableCell>
                  <TableCell className="font-poorstory text-base">{teacher.email}</TableCell>
                  <TableCell>
                    {teacher.isAdmin ? (
                      <Badge className="bg-blue-500 font-poorstory text-sm px-3 py-1">학교관리자</Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-500 border-gray-300 font-poorstory text-sm px-3 py-1">일반교사</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-poorstory text-base">
                    {teacher.isHomeroom && teacher.grade && teacher.class ? (
                      `${teacher.grade}학년 ${teacher.class}반`
                    ) : (
                      <span className="text-gray-400">담임 아님</span>
                    )}
                  </TableCell>
                  <TableCell className="font-poorstory text-base">{teacher.joinDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="hover:bg-indigo-50"
                            onClick={() => handleTeacherEdit(teacher)}
                          >
                            <Edit className="h-5 w-5 text-indigo-600" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] rounded-xl">
                          <DialogHeader>
                            <DialogTitle className="font-jua text-indigo-800 text-xl">{teacher.name} 선생님 정보 수정</DialogTitle>
                            <DialogDescription className="font-poorstory">
                              담임 정보와 권한을 수정할 수 있습니다. 변경 사항은 즉시 반영됩니다.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="grid gap-5 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="isHomeroom" className="text-right font-poorstory">
                                담임 여부
                              </Label>
                              <div className="col-span-3 flex items-center gap-2">
                                <input 
                                  type="checkbox" 
                                  id="isHomeroom" 
                                  className="h-5 w-5 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                                  defaultChecked={teacher.isHomeroom} 
                                />
                                <Label htmlFor="isHomeroom" className="font-poorstory text-base">담임교사</Label>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="grade" className="text-right font-poorstory">
                                학년
                              </Label>
                              <div className="col-span-3">
                                <Select defaultValue={teacher.grade?.toString() || ""}>
                                  <SelectTrigger className="w-full font-poorstory">
                                    <SelectValue placeholder="학년 선택" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="">담임 아님</SelectItem>
                                    {[1, 2, 3, 4, 5, 6].map((grade) => (
                                      <SelectItem key={grade} value={grade.toString()} className="font-poorstory">
                                        {grade}학년
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="class" className="text-right font-poorstory">
                                반
                              </Label>
                              <div className="col-span-3">
                                <Select defaultValue={teacher.class?.toString() || ""}>
                                  <SelectTrigger className="w-full font-poorstory">
                                    <SelectValue placeholder="반 선택" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="">담임 아님</SelectItem>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classNum) => (
                                      <SelectItem key={classNum} value={classNum.toString()} className="font-poorstory">
                                        {classNum}반
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="isAdmin" className="text-right font-poorstory">
                                관리자 권한
                              </Label>
                              <div className="col-span-3 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="checkbox" 
                                    id="isAdmin" 
                                    className="h-5 w-5 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                                    defaultChecked={teacher.isAdmin} 
                                  />
                                  <Label htmlFor="isAdmin" className="font-poorstory text-base">학교 관리자 권한 부여</Label>
                                </div>
                                {!teacher.isAdmin && (
                                  <p className="text-xs text-amber-600 font-poorstory">
                                    <CheckCircle className="inline-block w-3 h-3 mr-1" />
                                    권한을 부여하면 현재 관리자({data.teachers.find(t => t.isAdmin)?.name})의 권한이 해제됩니다.
                                  </p>
                                )}
                                {teacher.isAdmin && (
                                  <p className="text-xs text-red-600 font-poorstory">
                                    <XCircle className="inline-block w-3 h-3 mr-1" />
                                    본인의 관리자 권한을 해제하면 사이트에 재접속해야 합니다.
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <DialogFooter>
                            <Button 
                              type="submit" 
                              className="bg-indigo-600 hover:bg-indigo-700 font-jua"
                            >
                              변경사항 저장
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 
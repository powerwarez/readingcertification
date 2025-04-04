import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { 
  BookOpen, 
  Trophy, 
  Star,
  UserPlus,
  Download,
  Filter
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 반별 학생 목록" },
    { name: "description", content: "학년/반별 학생 목록을 관리하는 페이지입니다." },
  ];
};

// 임시 데이터 - 나중에 데이터베이스에서 가져올 예정
export async function loader({ params }: LoaderFunctionArgs) {
  return json({
    students: [
      { 
        id: 1, 
        number: 1,
        name: "김민준",
        readCount: 15,
        challengeCount: 5,
        points: 1200,
        lastActivity: "2024-03-15"
      },
      { 
        id: 2,
        number: 2,
        name: "이서연",
        readCount: 12,
        challengeCount: 4,
        points: 950,
        lastActivity: "2024-03-14"
      },
      { 
        id: 3,
        number: 3,
        name: "박지호",
        readCount: 18,
        challengeCount: 7,
        points: 1500,
        lastActivity: "2024-03-15"
      },
      // 더 많은 학생 데이터...
    ]
  });
}

export default function ClassStudents() {
  const data = useLoaderData<typeof loader>();
  const params = useParams();
  
  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-jua text-indigo-800">
            {params.grade}학년 {params.class}반 학생 목록
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" className="font-poorstory">
              <Filter size={18} className="mr-2" />
              필터
            </Button>
            <Button variant="outline" className="font-poorstory">
              <Download size={18} className="mr-2" />
              엑셀 다운로드
            </Button>
            <Button className="bg-indigo-500 text-white hover:bg-indigo-600 font-poorstory">
              <UserPlus size={18} className="mr-2" />
              학생 추가
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-2 border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-jua text-blue-700">전체 독서량</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <BookOpen className="text-blue-500" size={24} />
                <span className="text-2xl font-bold text-blue-600 font-poorstory">
                  {data.students.reduce((sum, student) => sum + student.readCount, 0)}권
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-jua text-amber-700">완료한 도전과제</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Trophy className="text-amber-500" size={24} />
                <span className="text-2xl font-bold text-amber-600 font-poorstory">
                  {data.students.reduce((sum, student) => sum + student.challengeCount, 0)}개
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-jua text-purple-700">전체 포인트</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Star className="text-purple-500" size={24} />
                <span className="text-2xl font-bold text-purple-600 font-poorstory">
                  {data.students.reduce((sum, student) => sum + student.points, 0)}P
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      <Card className="border-2 border-indigo-100 rounded-2xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-jua">번호</TableHead>
                <TableHead className="font-jua">이름</TableHead>
                <TableHead className="font-jua text-right">읽은 책</TableHead>
                <TableHead className="font-jua text-right">도전과제</TableHead>
                <TableHead className="font-jua text-right">포인트</TableHead>
                <TableHead className="font-jua">최근 활동</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-poorstory">{student.number}</TableCell>
                  <TableCell className="font-poorstory">{student.name}</TableCell>
                  <TableCell className="text-right font-poorstory">{student.readCount}권</TableCell>
                  <TableCell className="text-right font-poorstory">{student.challengeCount}개</TableCell>
                  <TableCell className="text-right font-poorstory">{student.points.toLocaleString()}P</TableCell>
                  <TableCell className="font-poorstory">{student.lastActivity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 
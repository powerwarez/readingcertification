import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Users } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "책잇수다 - 학생 관리" },
    { name: "description", content: "학년/반별 학생 관리 페이지입니다." },
  ];
};

// 임시 데이터 - 나중에 데이터베이스에서 가져올 예정
export function loader() {
  return json({
    classes: [
      { grade: 1, class: 1, studentCount: 25 },
      { grade: 1, class: 2, studentCount: 23 },
      { grade: 2, class: 1, studentCount: 24 },
      { grade: 2, class: 2, studentCount: 25 },
      { grade: 3, class: 1, studentCount: 22 },
      { grade: 4, class: 1, studentCount: 26 },
      { grade: 4, class: 2, studentCount: 25 },
      { grade: 5, class: 1, studentCount: 24 },
      { grade: 6, class: 1, studentCount: 23 },
    ]
  });
}

export default function StudentsIndex() {
  const data = useLoaderData<typeof loader>();
  
  // 학년별로 데이터 그룹화
  const groupedByGrade = data.classes.reduce((acc, curr) => {
    const grade = curr.grade;
    if (!acc[grade]) {
      acc[grade] = [];
    }
    acc[grade].push(curr);
    return acc;
  }, {} as Record<number, typeof data.classes>);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-jua text-indigo-800 mb-2">학년/반 관리</h1>
        <p className="text-gray-600 font-poorstory">각 반을 클릭하여 학생 목록을 확인하세요.</p>
      </header>

      <div className="space-y-8">
        {Object.entries(groupedByGrade).map(([grade, classes]) => (
          <div key={grade}>
            <h2 className="text-2xl font-jua text-indigo-700 mb-4">{grade}학년</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classes.map((classInfo) => (
                <Link 
                  key={`${classInfo.grade}-${classInfo.class}`}
                  to={`/admin/students/${classInfo.grade}/${classInfo.class}`}
                  className="block transform hover:scale-105 transition-all duration-300"
                >
                  <Card className="border-2 border-indigo-100 hover:border-indigo-300 rounded-2xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-jua text-indigo-700">
                        {classInfo.grade}학년 {classInfo.class}반
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users size={20} />
                          <span className="font-poorstory">전체 학생</span>
                        </div>
                        <span className="text-2xl font-bold text-indigo-600 font-poorstory">
                          {classInfo.studentCount}명
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
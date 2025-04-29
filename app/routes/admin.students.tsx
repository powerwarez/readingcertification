import { json } from "@remix-run/node";
import { useLoaderData, NavLink, useNavigate } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Users, GraduationCap, UserPlus, ListFilter } from "lucide-react";
import { useEffect } from "react";

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
  const navigate = useNavigate();
  
  // 마운트시 클라이언트 콘솔 로그
  useEffect(() => {
    console.log("StudentsIndex 컴포넌트가 마운트되었습니다");
  }, []);
  
  // 학년별로 데이터 그룹화
  const groupedByGrade = data.classes.reduce((acc, curr) => {
    const grade = curr.grade;
    if (!acc[grade]) {
      acc[grade] = [];
    }
    acc[grade].push(curr);
    return acc;
  }, {} as Record<number, typeof data.classes>);

  // 클래스 카드 클릭 핸들러 (프로그래밍 방식으로 이동)
  const handleClassClick = (grade: number, classNum: number) => {
    console.log(`클래스 카드 클릭: ${grade}학년 ${classNum}반으로 이동`);
    navigate(`./${grade}/${classNum}`);
  };

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

      {/* 디버깅 정보 */}
      <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded">
        <p className="text-xs">클라이언트 디버깅: 아래 학급 카드를 클릭하면 해당 반의 학생 목록 페이지로 이동합니다.</p>
        <p className="text-xs">문제가 발생하면 브라우저 개발자 도구(F12)의 콘솔 탭을 확인하세요.</p>
      </div>

      {/* 학년/반 관리 내용 */}
      <div>
        <h2 className="text-2xl font-jua text-indigo-700 mb-4">학년/반 관리</h2>
        <p className="text-gray-600 font-poorstory mb-6">각 반을 클릭하여 해당 반의 학생 목록을 확인하세요.</p>
      
        <div className="space-y-12">
          {Object.entries(groupedByGrade).map(([grade, classes]) => (
            <div key={grade} className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-jua text-indigo-700 mb-6">{grade}학년</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((classInfo) => (
                  <button 
                    key={`${classInfo.grade}-${classInfo.class}`}
                    onClick={() => handleClassClick(classInfo.grade, classInfo.class)}
                    className="block transform hover:scale-105 transition-all duration-300 cursor-pointer text-left bg-transparent border-0 p-0 w-full"
                    aria-label={`${classInfo.grade}학년 ${classInfo.class}반으로 이동`}
                  >
                    <Card className="border-2 border-indigo-100 hover:border-indigo-300 rounded-2xl overflow-hidden shadow-md">
                      <div className="h-3 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                      <CardHeader className="pb-2 pt-4">
                        <CardTitle className="text-xl font-jua text-indigo-700">
                          {classInfo.grade}학년 {classInfo.class}반
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Users size={22} />
                            <span className="font-poorstory text-base">전체 학생</span>
                          </div>
                          <span className="text-2xl font-bold text-indigo-600 font-poorstory">
                            {classInfo.studentCount}명
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
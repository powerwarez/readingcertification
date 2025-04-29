import { json } from "@remix-run/node";
import { useLoaderData, NavLink } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Users, GraduationCap, UserPlus, ListFilter } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [currentUrl, setCurrentUrl] = useState("");
  
  // 마운트시 클라이언트 콘솔 로그
  useEffect(() => {
    console.log("StudentsIndex 컴포넌트가 마운트되었습니다");
    
    // 안전하게 window 객체에 접근
    if (typeof window !== 'undefined') {
      console.log("현재 URL:", window.location.href);
      setCurrentUrl(window.location.href);
    }
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

  // 클래스 카드 클릭 핸들러 (절대 경로를 사용하는 방식으로 변경)
  const handleClassClick = (grade: number, classNum: number) => {
    const url = `/admin/students/${grade}/${classNum}`;
    console.log(`클래스 카드 클릭: 절대 경로 ${url}로 이동 시도`);
    
    // 클라이언트 측에서만 실행되도록 보장
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
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
        <p className="text-xs">클라이언트 디버깅: 아래 학급 카드를 클릭하면 직접 이동 방식으로 학생 목록 페이지로 이동합니다.</p>
        {currentUrl && <p className="text-xs">현재 URL: <span id="current-url">{currentUrl}</span></p>}
      </div>

      {/* 보조 네비게이션 (디버깅용) */}
      <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded">
        <p className="font-poorstory mb-2">직접 링크 테스트:</p>
        <div className="flex flex-wrap gap-2">
          <a href="/admin/students/1/1" className="bg-blue-100 px-3 py-1 rounded text-sm font-poorstory">1학년 1반</a>
          <a href="/admin/students/1/2" className="bg-blue-100 px-3 py-1 rounded text-sm font-poorstory">1학년 2반</a>
          <a href="/admin/students/2/1" className="bg-blue-100 px-3 py-1 rounded text-sm font-poorstory">2학년 1반</a>
        </div>
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
// import { Header } from "../components/Header";
// import { Sidebar } from "../components/SideBar";
// import { CourseIntro } from "../components/CourseIntro";
// import { CourseContent } from "../components/CourseContent";
// import { CourseInfo } from "../components/CourseInfo";
// import { useCourseData } from "../../../hooks/useCourseData";
// import { useParams } from "react-router-dom";
// export default function Index() {
//   const { id } = useParams();
//   const {
//     courseData,
//     lessonData,
//     loading,
//     error,
//     fetchLessonById,
//     selectedLessonId,
//   } = useCourseData(id, id);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-64">Đang tải...</div>
//     );
//   if (error) return <div className="text-red-500">Lỗi: {error}</div>;
//   if (!courseData) return <div>Không tìm thấy khóa học</div>;
//   return (
//     <div className="min-h-screen bg-[#0f1e35] text-foreground">
//       <Header />
//       <div className="flex">
//         <Sidebar
//           courseData={courseData}
//           onSelectLesson={(id) => fetchLessonById(id)}
//           activeLessonId={selectedLessonId}
//         />
//         <main className="flex-1 flex flex-col gap-8 p-8">
//           <div className="w-full">
//             <CourseIntro courseData={courseData} lessonData={lessonData} />
//           </div>
//           <div className="flex gap-4">
//             <div className="flex-1 max-w-4xl">
//               <CourseContent lessonData={lessonData} />
//             </div>
//             <aside className="w-96">
//               <CourseInfo />
//             </aside>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";
import { CourseIntro } from "../components/CourseIntro";
import { CourseContent } from "../components/CourseContent";
import { CourseInfo } from "../components/CourseInfo";
import { useCourseData } from "../../../hooks/useCourseData";
import { useParams } from "react-router-dom";

export default function Index() {
  const { id } = useParams(); // id của khóa học
  const {
    courseData,
    lessonData,
    loading,
    error,
    fetchLessonById,
    selectedLessonId,
  } = useCourseData(id);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-white">
        Đang tải...
      </div>
    );

  if (error)
    return <div className="text-red-500 text-center mt-10">Lỗi: {error}</div>;

  if (!courseData)
    return (
      <div className="text-white text-center mt-10">
        Không tìm thấy khóa học
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f1e35] text-foreground">
      <Header />
      <div className="flex">
        <Sidebar
          courseData={courseData}
          activeLessonId={selectedLessonId}
          onSelectLesson={fetchLessonById}
        />
        <main className="flex-1 flex flex-col gap-8 p-8">
          <div className="w-full">
            <CourseIntro courseData={courseData} lessonData={lessonData} />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 max-w-4xl">
              <CourseContent lessonData={lessonData} />
            </div>
            <aside className="w-96">
              <CourseInfo />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

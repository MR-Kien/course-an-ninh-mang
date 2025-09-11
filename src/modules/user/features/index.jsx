import { Header } from '../components/Header';
import { Sidebar } from '../components/SideBar';
import { CourseIntro } from '../components/CourseIntro';
import { CourseContent } from '../components/CourseContent';
import { CourseInfo } from '../components/CourseInfo';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0f1e35] text-foreground">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-8 p-8">
          <div className='w-full'>
            <CourseIntro />
          </div>
          <div className='flex gap-4'>
            <div className='flex-1 max-w-4xl'>
              <CourseContent />
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

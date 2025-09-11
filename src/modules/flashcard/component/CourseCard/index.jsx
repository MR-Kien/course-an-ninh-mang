import { Button, Card, CardContent, Badge } from "@mui/material";
import { Star, Flame, Clock, BookOpen, CheckCircle, Play, ChevronRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="relative rounded-xl overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Level and badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className={`${course.levelColor} text-white border-0 shadow-lg px-3 py-1 rounded-xl text-sm font-medium`}>
            {course.level}
          </div>
          {course.badges?.map((badge, index) => (
            <div key={index} className="flex items-center px-3 py-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
              <Flame className="w-3 h-3 mr-1 rounded-xl " />
              {badge}
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-sm border border-gray-600">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs">{course.rating}</span>
        </div>

        {/* Popularity */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 rounded-xl bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
          <Flame className="w-3 h-3 text-orange-400" />
          <span className="text-white text-xs">{course.popularity}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{course.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{course.description}</p>

        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <div key={index} variant="outline" className="rounded-xl px-3 py-1 border border-purple-500/30 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-400" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-green-400" />
            {course.flashcards}
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-purple-400" />
            {course.progress}%
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="w-full bg-gray-800 rounded-xl h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 rounded-xl"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        {/* Button */}
        <div className="w-full bg-gradient-to-r from-purple-900 to-pink-900 hover:from-purple-800 hover:to-pink-800 text-white border-0 group relative overflow-hidden rounded-[10px] shadow-lg flex items-center justify-center px-4 py-3">
          <Play className="w-4 h-4 mr-2" />
          Bắt đầu khóa học
          <ChevronRight className="w-4 h-4 ml-2" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
}

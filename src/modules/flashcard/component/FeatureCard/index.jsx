import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
export default function FeatureCard({
  icon: Icon,
  iconGradient,
  title,
  description,
  gradient,
  link,
}) {
  return (
    <Link
      to={link}
      className={`relative overflow-hidden border-0 ${gradient} backdrop-blur-sm hover:scale-105 transition-all duration-300 rounded-xl shadow-lg`}
    >
      <div className="p-8 text-center space-y-4">
        <div
          className={`w-12 h-12 mx-auto rounded-xl ${iconGradient} flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  );
}

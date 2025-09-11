import { Card, CardContent } from "@mui/material";

export default function FeatureCard({ icon: Icon, title, description, gradient }) {
  return (
    <Card className={`relative overflow-hidden border-0 ${gradient} backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
      <CardContent className="p-8 text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

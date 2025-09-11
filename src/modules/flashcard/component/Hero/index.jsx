import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CheckCircle, Target } from "lucide-react";

/**
 * HeroSection sử dụng MUI Card + sx để replicate Tailwind styles:
 * - responsive padding (py-16 px-6 tương đương)
 * - gradient text cho "Flashcard"
 * - Card với gradient background, border, backdrop-blur và hover lift
 */

export default function HeroSection() {
  return (
    <Box component="section" sx={{ py: 8, px: { xs: 3, md: 6 } }}>
      <Box sx={{ maxWidth: 1024, mx: "auto", textAlign: "center", mb: 6 }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.05,
            fontSize: { xs: "2.25rem", md: "3rem" }, // text-4xl -> text-5xl
          }}
        >
          <Box component="span" sx={{ color: "#fff" }}>
            Học lý thuyết với{" "}
          </Box>

          {/* Gradient text */}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg,#a78bfa 0%,#fb7185 50%,#a78bfa 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Flashcard
          </Box>
        </Typography>

        <Typography sx={{ color: "rgba(255,255,255,0.75)", mt: 2, fontSize: "1.125rem", maxWidth: 720, mx: "auto" }}>
          Nắm vững kiến thức an ninh mạng qua các thẻ học tương tác với hiệu ứng đẹp mắt
        </Typography>
      </Box>

      {/* Card highlight */}
      <Box sx={{ maxWidth: 920, mx: "auto" }}>
        <Card
          elevation={0}
          sx={{
            mx: "auto",
            maxWidth: { xs: "100%", md: 768 },
            background:
              "linear-gradient(90deg, rgba(88,28,135,0.12) 0%, rgba(219,39,119,0.10) 100%)",
            border: "1px solid rgba(139,92,246,0.12)",
            backdropFilter: "blur(6px)",               // glass effect
            WebkitBackdropFilter: "blur(6px)",
            boxShadow: "0 6px 24px rgba(2,6,23,0.5)",
            borderRadius: 2,
            transition: "transform .24s ease, box-shadow .24s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 18px 36px rgba(2,6,23,0.7)",
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
              <Box sx={{ width: 20, height: 20, color: "#fbbf24", fontSize: 18 }}>⚡</Box>
              <Typography sx={{ fontWeight: 700, color: "#fff", fontSize: "1.125rem" }}>
                Phương pháp học hiệu quả
              </Typography>
              <Box sx={{ width: 20, height: 20, color: "#fbbf24", fontSize: 18 }}>⚡</Box>
            </Box>

            <Typography sx={{ color: "rgba(255,255,255,0.78)", mb: 2 }}>
              Flashcard giúp bạn ghi nhớ kiến thức lâu dài thông qua việc lặp lại có khoảng cách. 
              Mỗi thẻ được thiết kế để tối ưu hóa quá trình học tập và củng cố kiến thức an ninh mạng.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, mt: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#c4b5fd" }}>
                <CheckCircle className="w-4 h-4" />
                <Typography component="span" sx={{ fontSize: 14 }}>Học theo tiến độ cá nhân</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fb9ab0" }}>
                <Box component="span" sx={{ fontSize: 14 }}>🧠</Box>
                <Typography component="span" sx={{ fontSize: 14 }}>Tăng cường trí nhớ</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#93c5fd" }}>
                <Target className="w-4 h-4" />
                <Typography component="span" sx={{ fontSize: 14 }}>Kiến thức thực tế</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

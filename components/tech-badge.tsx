import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  variant?: "default" | "icon-only"
  className?: string
}

const techIcons: Record<string, string> = {
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Bun: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Three.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Drizzle: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drizzle/drizzle-original.svg",
  "Drizzle ORM": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drizzle/drizzle-original.svg",
  "NextAuth.js": "https://next-auth.js.org/img/logo/logo-sm.png",
  "Neon Database": "https://neon.tech/favicon.ico",
  "Shadcn/UI": "https://ui.shadcn.com/favicon.ico",
  Clerk: "https://clerk.com/favicon.ico",
  Stripe: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg",
  "Vapi AI": "https://vapi.ai/favicon.ico",
  "Google Gemini AI": "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
  Resend: "https://resend.com/favicon.ico",
  Inngest: "https://www.inngest.com/favicon.ico",
  Supabase: "https://supabase.com/favicon/favicon-32x32.png",
  Stream: "https://getstream.io/favicon.ico",
  WebRTC: "https://webrtc.org/assets/images/webrtc-logo-vert-retro-dist.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Shadcn: "https://ui.shadcn.com/favicon.ico",
  "shadcn/ui": "https://ui.shadcn.com/favicon.ico",
  Appwrite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Material-UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  QStash: "https://upstash.com/icons/icon-512x512.png",
  Pusher: "https://cdn.worldvectorlogo.com/logos/pusher.svg",
  "Vector DB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
}

export function TechBadge({ name, variant = "default", className }: TechBadgeProps) {
  const icon = techIcons[name]

  if (variant === "icon-only") {
    return (
      <div
        className={cn(
          "flex items-center justify-center h-8 w-8 rounded-md bg-secondary/50 border border-border/50 hover:bg-secondary/70 transition-colors",
          className,
        )}
        title={name}
      >
        {icon ? (
          <img src={icon || "/placeholder.svg"} alt={name} className="h-5 w-5 object-contain" />
        ) : (
          <span className="text-xs font-medium">{name.charAt(0)}</span>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 border border-border/50 text-sm font-medium transition-colors hover:bg-secondary/70",
        className,
      )}
    >
      {icon && <img src={icon || "/placeholder.svg"} alt={name} className="h-4 w-4 object-contain" />}
      <span>{name}</span>
    </div>
  )
}

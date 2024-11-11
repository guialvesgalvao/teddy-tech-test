"use client";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/logo-mark/logo-mark";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface IAuthCardProps {
  title?: string;
  children: React.ReactNode;
}

export default function AuthCard(props: Readonly<IAuthCardProps>) {
  const { title, children } = props;

  return (
    <AnimatePresence>
      <motion.div
        id="auth-card"
        className="max-w-[460px] w-full flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LogoMark isPulsing />

        <Card className="w-full">
          <CardHeader className=" flex items-center justify-center">
            {title && <CardTitle>{title}</CardTitle>}
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

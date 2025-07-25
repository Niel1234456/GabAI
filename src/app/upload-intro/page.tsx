'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sheet, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function UploadIntroPage() {
  return (
    <main className="flex flex-col flex-grow justify-between p-6 text-foreground">
      <div className="flex-grow flex flex-col justify-center">
        <motion.div
          className="text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-8">
             <Sheet className="h-16 w-16 text-foreground/60" />
             <ArrowRight className="h-8 w-8 text-foreground/80" />
             <BarChart3 className="h-16 w-16 text-accent" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-2">
            From 'Gulo' to 'Gets'
          </motion.h1>

          <motion.p variants={itemVariants} className="text-muted-foreground mb-8 max-w-xs mx-auto">
            Easily upload your sales reports from Shopee, Lazada, and more. Kami na ang bahalang mag-ayos at mag-compute para sa'yo.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button asChild className="w-full bg-black text-primary-foreground rounded-full h-16 text-lg font-semibold hover:bg-black/90">
          <Link href="/meet-gabi">
            Next
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </motion.div>
    </main>
  );
}

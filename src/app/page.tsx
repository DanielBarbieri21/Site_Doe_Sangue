'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  Phone, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { NewsSection } from '@/components/sections/news-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingElements } from '@/components/ui/floating-elements';
import { ParticleBackground } from '@/components/ui/particle-background';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ParticleBackground />
      <FloatingElements />
      
      <Header />
      
      <main className="relative">
        <HeroSection />
        
        <motion.div style={{ y }}>
          <FeaturesSection />
        </motion.div>
        
        <StatsSection />
        <TestimonialsSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

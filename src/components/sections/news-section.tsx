'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const news = [
  {
    title: 'PEC do Plasma é descabida e seria atraso para o sistema brasileiro',
    excerpt: 'Este é um momento promissor e único para os hemoderivados e a hemoterapia brasileira. O Ministério da Saúde tem ratificado a disposição em fortalecer a hemorrede e a indústria de hemoderivados.',
    author: 'Dra. Júnia Guimarães Cioffi',
    date: '29/08/2023',
    category: 'Política',
    readTime: '5 min',
    image: '📰',
  },
  {
    title: 'Nova campanha de doação de sangue atinge recorde de participantes',
    excerpt: 'A campanha "Doe Sangue, Salve Vidas" superou todas as expectativas, com mais de 10.000 doadores registrados em apenas uma semana.',
    author: 'Equipe Fundação',
    date: '15/12/2023',
    category: 'Campanha',
    readTime: '3 min',
    image: '🎯',
  },
  {
    title: 'Tecnologia revoluciona processo de doação de sangue',
    excerpt: 'Novos equipamentos e sistemas digitais tornam o processo de doação mais rápido, seguro e eficiente para doadores e receptores.',
    author: 'Dr. Carlos Silva',
    date: '10/12/2023',
    category: 'Tecnologia',
    readTime: '4 min',
    image: '🔬',
  },
];

export function NewsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Últimas{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Notícias
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades sobre doação de sangue e saúde.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center text-6xl rounded-t-2xl">
                    {article.image}
                  </div>
                  
                  <div className="p-8">
                    {/* Category & Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {article.author}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {article.date}
                        </span>
                      </div>
                    </div>

                    {/* Read More */}
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
          >
            Ver Todas as Notícias
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Phone, 
  MapPin, 
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const requirements = [
  {
    icon: CheckCircle,
    title: 'Idade',
    description: 'Entre 16 e 69 anos (menores de 18 anos precisam de autorização dos pais)',
    color: 'text-green-500',
  },
  {
    icon: CheckCircle,
    title: 'Peso',
    description: 'Mínimo de 50kg',
    color: 'text-green-500',
  },
  {
    icon: CheckCircle,
    title: 'Saúde',
    description: 'Estar em boas condições de saúde',
    color: 'text-green-500',
  },
  {
    icon: CheckCircle,
    title: 'Documento',
    description: 'Apresentar documento oficial com foto',
    color: 'text-green-500',
  },
];

const restrictions = [
  {
    icon: XCircle,
    title: 'Gravidez',
    description: 'Mulheres grávidas não podem doar',
    color: 'text-red-500',
  },
  {
    icon: XCircle,
    title: 'Amamentação',
    description: 'Mulheres que amamentam devem aguardar 12 meses após o parto',
    color: 'text-red-500',
  },
  {
    icon: XCircle,
    title: 'Tatuagem',
    description: 'Aguardar 12 meses após fazer tatuagem ou piercing',
    color: 'text-red-500',
  },
  {
    icon: XCircle,
    title: 'Cirurgia',
    description: 'Aguardar 6 meses após cirurgias',
    color: 'text-red-500',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Salva Vidas',
    description: 'Cada doação pode salvar até 4 vidas',
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: Shield,
    title: 'Exames Gratuitos',
    description: 'Testes de HIV, hepatite, sífilis e outros',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Faz parte de uma rede de solidariedade',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Star,
    title: 'Satisfação',
    description: 'Sensação de bem-estar e dever cumprido',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
];

const faqs = [
  {
    question: 'Quanto tempo demora a doação?',
    answer: 'Todo o processo leva cerca de 15 minutos, incluindo cadastro, triagem e coleta.',
  },
  {
    question: 'Posso doar sangue menstruada?',
    answer: 'Sim, a menstruação não impede a doação de sangue.',
  },
  {
    question: 'Quanto tempo preciso esperar entre doações?',
    answer: 'Homens podem doar a cada 2 meses e mulheres a cada 3 meses.',
  },
  {
    question: 'A doação dói?',
    answer: 'A doação é praticamente indolor. Você sente apenas uma pequena picada no início.',
  },
  {
    question: 'Posso doar se estiver gripado?',
    answer: 'Não, você deve estar em boas condições de saúde para doar.',
  },
  {
    question: 'O que acontece com meu sangue?',
    answer: 'O sangue é testado, processado e distribuído para hospitais que precisam.',
  },
];

export default function InformacoesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Informações{' '}
                <span className="text-yellow-300">Importantes</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
                Tudo que você precisa saber sobre doação de sangue, requisitos, benefícios e cuidados.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Requirements */}
        <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Requisitos para{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Doação
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Verifique se você atende aos requisitos básicos para doar sangue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <req.icon className="w-8 h-8 text-green-500" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {req.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {req.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Restrictions */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Restrições{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Temporárias
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Situações que impedem temporariamente a doação de sangue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {restrictions.map((restriction, index) => (
                <motion.div
                  key={restriction.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <restriction.icon className="w-8 h-8 text-red-500" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {restriction.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {restriction.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Benefícios da{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Doação
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Descubra os benefícios de ser um doador de sangue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Perguntas{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Frequentes
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Tire suas dúvidas sobre doação de sangue.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ainda tem Dúvidas?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para esclarecer qualquer dúvida sobre doação de sangue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

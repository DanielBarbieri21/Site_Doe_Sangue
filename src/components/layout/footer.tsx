'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  about: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Nossa Missão', href: '/missao' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'História', href: '/historia' },
  ],
  services: [
    { name: 'Doação de Sangue', href: '/doacao' },
    { name: 'Agendamento', href: '/agendamento' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Campanhas', href: '/campanhas' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '/ajuda' },
    { name: 'Contato', href: '/contato' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Suporte', href: '/suporte' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'LGPD', href: '/lgpd' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fundação Doe Sangue</h3>
                  <p className="text-gray-400 text-sm">Salvando vidas</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Nossa missão é salvar vidas através da doação de sangue, conectando doadores e receptores em uma rede de solidariedade que transforma o mundo.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>0800-3333 (Emergência)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>contato@doesangue.org</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Postos em todo o Brasil</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize">
                {section === 'about' && 'Sobre'}
                {section === 'services' && 'Serviços'}
                {section === 'support' && 'Suporte'}
                {section === 'legal' && 'Legal'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Receba nossas atualizações</h3>
            <p className="text-primary-100 mb-6">
              Fique por dentro das campanhas e novidades da Fundação Doe Sangue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50"
              />
              <Button
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Fundação Doe Sangue. Todos os direitos reservados.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
              <Link href="/termos" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-primary-400 animate-pulse" />
              <span>para salvar vidas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

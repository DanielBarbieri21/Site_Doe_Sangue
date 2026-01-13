# 🩸 Fundação Doe Sangue - Site Moderno

Um site moderno e profissional para a Fundação Doe Sangue, construído com as tecnologias mais atuais do mercado.

## ✨ Características

- 🚀 **Next.js 14** - Framework React mais moderno
- 🎨 **Tailwind CSS** - Estilização utilitária e responsiva
- 📱 **Mobile-First** - Design responsivo perfeito
- 🌙 **Dark Mode** - Suporte completo ao modo escuro
- ⚡ **Performance** - Otimizado para velocidade máxima
- ♿ **Acessibilidade** - WCAG 2.1 AA compliant
- 🔒 **Segurança** - Headers de segurança e validação
- 📊 **Analytics** - Google Analytics 4 integrado
- 🎭 **Animações** - Framer Motion para interações suaves
- 🧪 **TypeScript** - Tipagem estática completa

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 14** - React framework com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### UI/UX
- **Design System** - Componentes reutilizáveis
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Tema escuro/claro
- **Micro-interações** - Animações sutis
- **Glass Morphism** - Efeitos visuais modernos
- **Gradientes** - Paleta de cores vibrante

### Performance
- **SSR/SSG** - Renderização otimizada
- **Image Optimization** - Next.js Image component
- **Bundle Analysis** - Otimização de código
- **Lazy Loading** - Carregamento sob demanda
- **Code Splitting** - Divisão automática de código

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fundacao-doe-sangue.git

# Navegue para o diretório
cd fundacao-doe-sangue

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos
npm run format       # Formatação de código
npm run test         # Executar testes
npm run analyze      # Análise do bundle
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes base
│   ├── sections/         # Seções da página
│   └── layout/           # Layout components
├── lib/                  # Utilitários
└── types/                # Definições TypeScript
```

## 🎨 Design System

### Cores
```css
Primary: #ef4444 (Vermelho)
Secondary: #64748b (Cinza)
Accent: #0ea5e9 (Azul)
Success: #10b981 (Verde)
Warning: #f59e0b (Amarelo)
```

### Tipografia
- **Font Family**: Inter (Google Fonts)
- **Display**: Cal Sans (Custom)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Componentes
- **Button** - 6 variantes, 4 tamanhos
- **Card** - Layout flexível
- **Badge** - 7 variantes
- **Input** - Validação integrada
- **Modal** - Overlay responsivo

## 📱 Responsividade

### Breakpoints
```css
xs: 475px    # Extra small
sm: 640px    # Small
md: 768px    # Medium
lg: 1024px   # Large
xl: 1280px   # Extra large
2xl: 1536px  # 2X large
```

### Mobile-First
- Design otimizado para mobile
- Touch gestures suportados
- Performance mobile otimizada
- PWA ready

## ⚡ Performance

### Métricas Lighthouse
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Otimizações
- **Code Splitting** automático
- **Tree Shaking** ativo
- **Image Optimization** nativa
- **Font Optimization** automática
- **Bundle Analysis** integrado

## 🔒 Segurança

### Headers de Segurança
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: origin-when-cross-origin

### Validação
- **Form Validation** com Zod
- **Input Sanitization** automática
- **XSS Protection** nativa
- **CSRF Protection** integrada

## ♿ Acessibilidade

### WCAG 2.1 AA
- **Navegação por teclado** completa
- **Screen readers** compatível
- **Contraste** adequado (4.5:1)
- **ARIA labels** implementados
- **Skip links** funcionais

### Recursos
- **Focus management** automático
- **Keyboard navigation** otimizada
- **Screen reader** friendly
- **High contrast** support

## 📊 Analytics

### Google Analytics 4
- **Page views** automáticos
- **Custom events** configurados
- **User journey** tracking
- **Conversion** tracking

### Métricas
- **Core Web Vitals** monitorados
- **Performance** tracking
- **User engagement** analytics
- **Conversion** funnels

## 🧪 Testes

### Configuração
- **Jest** - Framework de testes
- **Testing Library** - Testes de componentes
- **Coverage** - Cobertura de código
- **E2E** - Testes end-to-end

### Comandos
```bash
npm run test         # Testes unitários
npm run test:watch   # Modo watch
npm run test:coverage # Cobertura
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático
git push origin main

# Deploy manual
vercel --prod
```

### Outras Plataformas
- **Netlify** - Compatível
- **AWS Amplify** - Suportado
- **Docker** - Containerizado
- **Self-hosted** - Possível

## 🤝 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões
- **Conventional Commits** obrigatório
- **Code review** necessário
- **Tests** devem passar
- **Linting** sem erros

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

- **Website**: https://doesangue.org
- **Email**: contato@doesangue.org
- **Telefone**: 0800-3333
- **GitHub**: [@fundacao-doe-sangue](https://github.com/fundacao-doe-sangue)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [Lucide](https://lucide.dev/) - Ícones
- [Vercel](https://vercel.com/) - Deploy platform

---

**Feito com ❤️ para salvar vidas através da doação de sangue**

*Cada doação pode salvar até 4 vidas. Faça parte dessa corrente do bem!*

---

🛠️ **Software desenvolvido por Daniel Barbieri**  
Engenheiro de Software | Full Stack Developer  

Código construído com foco em eficiência, organização, escalabilidade e boas práticas de desenvolvimento.

🌐 GitHub: https://github.com/DanielBarbieri21  
💼 LinkedIn: https://www.linkedin.com/in/daniel-barbieri-4990462a/

---

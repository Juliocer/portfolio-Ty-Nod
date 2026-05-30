import { useState } from 'react'
import styles from './About.module.css'

interface Project {
  name: string
  description: string
  url: string
}

interface Certificate {
  id: number
  title: string
  institution: string
  category: string
  modules: string[]
  projects: Project[]
  image: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Formação React Developer',
    institution: 'DIO',
    category: 'Frontend',
    image: '/certificates/react.png',
    modules: [
      'Fundamentos do React e Ambiente de Desenvolvimento',
      'HTML, CSS e JavaScript para Web',
      'Primeiros Passos com React e Componentes',
      'Hooks: useState, useEffect, useMemo, useCallback',
      'Formulários com React Hook Forms e Axios',
      'Estilização com Styled-Components',
      'React com TypeScript',
      'Context API e Custom Hooks',
      'React Router e Navegação',
      'Introdução ao Next.js',
      'Microfrontends com React',
    ],
    projects: [
      {
        name: 'Calculadora com React',
        description: 'Calculadora funcional feita com React e JavaScript',
        url: 'https://github.com/Juliocer/calculadora-react',
      },
      {
        name: 'Wiki de Repositórios GitHub',
        description: 'Busca e lista repositórios do GitHub com React',
        url: 'https://github.com/Juliocer/Wiki-de-reposit-tio',
      },
      {
        name: 'Clone do Site da DIO',
        description: 'Tela de cadastro da DIO com React e JavaScript',
        url: 'https://github.com/Juliocer/Clone-do-Sit-da-Dio.',
      },
      {
        name: 'Tela de Login com Validação',
        description: 'Login com validação e requisição de arquivo JSON com TypeScript',
        url: 'https://github.com/Juliocer/tela_ts_valida-o',
      },
      {
        name: 'Blog com Next.js',
        description: 'Blog com requisição ao banco de dados Supabase',
        url: 'https://github.com/Juliocer/Blog-em-Next-estudo',
      },
    ],
  },
  {
    id: 2,
    title: 'Formação TypeScript Fullstack Developer',
    institution: 'DIO',
    category: 'Fullstack',
    image: '/certificates/typescript.png',
    modules: [
      'Fundamentos e Sintaxe do TypeScript',
      'Variáveis, Tipos e Interfaces',
      'Programação Orientada a Objetos com TypeScript',
      'React com TypeScript — Componentes e Props',
      'Styled-Components e Chakra UI',
      'Testes Automatizados e TDD',
      'Consumo de APIs e Gerenciamento de Estado',
      'React Router e Context API',
      'LocalStorage com React',
      'Node.js com TypeScript — Rotas e Services',
      'TypeORM — Banco de Dados e Migrations',
      'Autenticação com JWT',
      'Testes Unitários e E2E no Node',
    ],
    projects: [
      {
        name: 'Primeiro Desafio TypeScript',
        description: 'Primeiro projeto com TypeScript na DIO',
        url: 'https://github.com/Juliocer/Primeiro-desafio-de-ts-na-Dio',
      },
      {
        name: 'DIO Bank — Frontend',
        description: 'Sistema bancário com React, TypeScript, Chakra UI, Context API e 14 testes com Jest',
        url: 'https://github.com/Juliocer/desafio02-dio-ts-chakra',
      },
      {
        name: 'DioBank API — Node.js',
        description: 'API RESTful com Node.js, TypeScript, Express, arquitetura em camadas e testes unitários',
        url: 'https://github.com/Juliocer/NODE-TS',
      },
    ],
  },
  {
    id: 3,
    title: 'Formação Lógica de Programação',
    institution: 'DIO',
    category: 'Fundamentos',
    image: '/certificates/logica.png',
    modules: [
      'Algoritmos e Fluxogramas',
      'Estrutura de Software — Input, Process, Output',
      'Variáveis, Constantes e Tipos de Dados',
      'Vetores e Matrizes',
      'Operadores Aritméticos, Relacionais e Lógicos',
      'Estruturas Condicionais — if, else, switch',
      'Estruturas de Repetição — for, while, do-while',
      'Funções com Parâmetros e Retorno',
      'Estruturas de Dados e JSON',
      'Classes e Objetos',
      'Desafios práticos de lógica',
    ],
    projects: [
      {
        name: 'Classificador de Nível de Herói',
        description: 'Classifica o nível de um herói com base no XP usando if/else',
        url: 'https://github.com/Juliocer/Desafio-de-logica',
      },
      {
        name: 'Calculadora de Partidas Ranqueadas',
        description: 'Calcula saldo de vitórias e define o ranque do herói',
        url: 'https://github.com/Juliocer/Calculadora-de-Partidas-Ranqueadas',
      },
      {
        name: 'Ataque no Jogo',
        description: 'Sistema de ataque com classes e switch — Mago, Guerreiro, Monge e Ninja',
        url: 'https://github.com/Juliocer/Desafio-ataque-no-jogo',
      },
    ],
  },
  {
    id: 4,
    title: 'Formação HTML Web Developer',
    institution: 'DIO',
    category: 'Frontend',
    image: '/certificates/html.png',
    modules: [
      'História da Web e Comunicação Client-Server',
      'Tags HTML e Atributos',
      'Formulários em HTML',
      'Formatação e Estruturação de Conteúdo',
      'Mídias: imagem, áudio, vídeo e iframe',
      'Tabelas em HTML',
      'HTML Semântico e Acessibilidade',
      'Recursos Especiais do HTML5',
      'Git e GitHub — versionamento',
    ],
    projects: [
      {
        name: 'Blog de Programação',
        description: 'Site com seleção de plataformas gratuitas para aprender programação',
        url: 'https://github.com/Juliocer/Projeto-de-blog-dio.',
      },
      {
        name: 'Site de Clínica Odontológica',
        description: 'Site institucional com menu, tabela de serviços e formulário de contato',
        url: 'https://github.com/Juliocer/trilha-html-modulo-2-J-lio-C-sar',
      },
      {
        name: 'Cópia do Wikipedia',
        description: 'Recriação de uma página do Wikipedia em HTML puro',
        url: 'https://github.com/Juliocer/Copia-do-Wikip-dia',
      },
    ],
  },
  {
    id: 5,
    title: 'Formação CSS Web Developer',
    institution: 'DIO',
    category: 'Frontend',
    image: '/certificates/css.png',
    modules: [
      'Fundamentos do CSS — Seletores e Box Model',
      'Cores, Fontes, Bordas e Imagens',
      'Unidades de Medida — px, rem, em, vw, vh',
      'Flexbox completo',
      'CSS Grid Layout completo',
      'Responsividade e Media Queries',
      'Pseudo-elementos e Pseudo-classes',
      'Transições, Animações e Transformações 2D/3D',
      'Boas Práticas — BEM, SMACSS, OOCSS',
      'Bootstrap — Framework CSS',
    ],
    projects: [
      {
        name: 'Landing Page com CSS',
        description: 'Primeiro desafio da trilha CSS com layout responsivo',
        url: 'https://github.com/Juliocer/trilha-css-desafio-01-main/tree/main',
      },
      {
        name: 'Clone YouTube — Flexbox',
        description: 'Interface do YouTube com Flexbox e seletores avançados',
        url: 'https://github.com/Juliocer/desafio-dio.-Youtube',
      },
      {
        name: 'Clone YouTube — CSS Grid',
        description: 'Galeria de vídeos com CSS Grid Layout',
        url: 'https://github.com/Juliocer/desafio-dio.-Grid-Youtube',
      },
      {
        name: 'Layout Responsivo Discord',
        description: 'Versão mobile do site do Discord com media queries',
        url: 'https://github.com/Juliocer/estudo_Layout_Discord_Responsivo',
      },
      {
        name: 'Clone HBO Max',
        description: 'Clone do site HBO Max com animações em HTML e CSS',
        url: 'https://github.com/Juliocer/hbomax-clone-estudo',
      },
    ],
  },
  {
    id: 6,
    title: 'Formação JavaScript Developer',
    institution: 'DIO',
    category: 'Frontend',
    image: '/certificates/javascript.png',
    modules: [
      'Variáveis, Operadores e Estruturas Condicionais',
      'Funções — declaração, expressão e IIFE',
      'Objetos e Classes em JavaScript',
      'Arrays e Estruturas de Repetição',
      'Importação e Exportação de Módulos',
      'Variáveis, Escopo, Hoisting e Tipos de Dados',
      'Orientação a Protótipo',
      'Higher Order Functions — map, filter, reduce',
      'Promises e Async/Await',
      'Manipulação da DOM',
      'Integração com APIs — PokeAPI',
      'Portfólio com HTML, CSS e JavaScript',
    ],
    projects: [
      {
        name: 'Pokédex com JavaScript',
        description: 'Pokédex interativa consumindo a PokeAPI com HTML, CSS e JS',
        url: 'https://github.com/Juliocer/js-developer-pokedex',
      },
      {
        name: 'Portfólio v0.1',
        description: 'Primeiro portfólio desenvolvido com HTML, CSS e JavaScript',
        url: 'https://github.com/Juliocer/Portif-lio_0.1',
      },
    ],
  },
]

const categoryColors: Record<string, string> = {
  Frontend: '#E6F1FB',
  Fullstack: '#EAF3DE',
  Fundamentos: '#FAEEDA',
}

const categoryTextColors: Record<string, string> = {
  Frontend: '#0C447C',
  Fullstack: '#27500A',
  Fundamentos: '#633806',
}

export default function About() {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const [tab, setTab] = useState<'grade' | 'projetos' | 'certificado'>('grade')

  const handleOpen = (cert: Certificate) => {
    setSelected(cert)
    setTab('grade')
  }

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Sobre mim</span>
          <h2 className={styles.heading}>
            Desenvolvedor fullstack<br />
            <em>em busca de oportunidades.</em>
          </h2>
          <p className={styles.bio}>
            Recém-formado no curso Técnico em Desenvolvimento, estou em busca do meu primeiro estágio ou oportunidade de trabalho. Tenho experiência prática com front-end e backend, construindo projetos completos com React, Node.js e TypeScript.
          </p>
        </div>

        <div className={styles.certSection}>
          <span className={styles.certLabel}>Certificações</span>
          <div className={styles.certGrid}>
            {certificates.map(cert => (
              <button
                key={cert.id}
                className={styles.certCard}
                onClick={() => handleOpen(cert)}
              >
                <div
                  className={styles.certBadge}
                  style={{
                    background: categoryColors[cert.category],
                    color: categoryTextColors[cert.category],
                  }}
                >
                  {cert.category}
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <span className={styles.certInstitution}>{cert.institution}</span>
                <div className={styles.certFooter}>
                  <span className={styles.certCount}>
                    {cert.projects.length} projeto{cert.projects.length !== 1 ? 's' : ''}
                  </span>
                  <span className={styles.certHint}>Grade · Projetos · Certificado →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>✕</button>

            <div
              className={styles.modalBadge}
              style={{
                background: categoryColors[selected.category],
                color: categoryTextColors[selected.category],
              }}
            >
              {selected.category}
            </div>

            <h3 className={styles.modalTitle}>{selected.title}</h3>
            <span className={styles.modalInstitution}>{selected.institution}</span>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${tab === 'grade' ? styles.tabActive : ''}`}
                onClick={() => setTab('grade')}
              >
                Grade curricular
              </button>
              <button
                className={`${styles.tab} ${tab === 'projetos' ? styles.tabActive : ''}`}
                onClick={() => setTab('projetos')}
              >
                Projetos ({selected.projects.length})
              </button>
              <button
                className={`${styles.tab} ${tab === 'certificado' ? styles.tabActive : ''}`}
                onClick={() => setTab('certificado')}
              >
                Certificado
              </button>
            </div>

            {tab === 'grade' && (
              <ul className={styles.moduleList}>
                {selected.modules.map((mod, i) => (
                  <li key={i} className={styles.moduleItem}>
                    <span className={styles.moduleDot} />
                    {mod}
                  </li>
                ))}
              </ul>
            )}

            {tab === 'projetos' && (
              <div className={styles.projectList}>
                {selected.projects.map((proj, i) => (
                  <a
                    key={i}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectCard}
                  >
                    <div className={styles.projectInfo}>
                      <span className={styles.projectName}>{proj.name}</span>
                      <span className={styles.projectDesc}>{proj.description}</span>
                    </div>
                    <span className={styles.projectLink}>GitHub →</span>
                  </a>
                ))}
              </div>
            )}

            {tab === 'certificado' && (
              <div className={styles.certImageWrapper}>
                <img
                  src={selected.image}
                  alt={`Certificado ${selected.title}`}
                  className={styles.certImage}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
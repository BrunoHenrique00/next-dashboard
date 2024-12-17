# Next-Dashboard

## Índice

1. [Requisitos](#requisitos)  
2. [Instruções de Instalação e Execução](#instalação-e-execução)  
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)  
4. [Funcionalidades Implementadas](#funcionalidades-implementadas)  
5. [Extras Implementados](#extras-implementados)  
6. [Deploy](#deploy)  

---

## Requisitos

Este projeto foi construído com base nos seguintes requisitos:

- **Framework**: Next.js 14 (App Router).  
- **UI**: TailwindCSS e componentes Shadcn (Radix UI + Tailwind).  
- **Autenticação**: NextAuth.js (Google).  
- **Hospedagem**: Deploy na Vercel.  
- **Design Responsivo**.  
- **Boas práticas de acessibilidade e segurança**.  
- **Arquitetura escalável e reutilizável**.  

---

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão >= 18)  
- **npm** ou **yarn**  
- **Git**  

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone <link-do-seu-repositorio>
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd next-dashboard
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto.  
   - Adicione as seguintes variáveis:
     ```bash
     NEXTAUTH_URL=http://localhost:3000
     GOOGLE_CLIENT_ID=<seu-client-id>
     GOOGLE_CLIENT_SECRET=<seu-client-secret>
     DATABASE_URL=
     DIRECT_URL=
     ```

5. **Execute o Prisma:**
   ```bash
   npx prisma db push
   ```

6. **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

7. **Acesse o projeto:**  
   Abra [http://localhost:3000](http://localhost:3000) no navegador.  

---

## Tecnologias Utilizadas

- **Next.js 14** (App Router)  
- **TailwindCSS** para estilização.  
- **Shadcn** (Radix UI + Tailwind).  
- **NextAuth.js** para autenticação.  
- **React Hook Form** para gerenciamento de formulários. 
- **Prisma** para persistencia dos dados.
- **React Query** para lidar com os estados dos dados.

---

## Funcionalidades Implementadas

| Funcionalidade                        | Status   |
|---------------------------------------|----------|
| **Página Inicial (Home)**             | ✅       |
| Resumo de projetos                    | ✅       |
| Gráficos simples                      | ✅       |
| Links para páginas detalhadas         | ✅       |
| **Página de Projetos**                | ✅       |
| Lista de projetos com status          | ✅       |
| Barra de progresso                    | ✅       |
| Modal de criação de projetos          | ✅       |
| Validação de formulários              | ✅       |
| **Página de Detalhes do Projeto**     | ✅       |
| Lista de tarefas associadas           | ✅       |
| Adição de comentários                 | ✅       |
| Marcação de tarefas como concluídas (Com feedback visual imediato)   | ✅       |

---

## Extras Implementados

- **Autenticação com NextAuth.js**: Login via Github.  
- **Modo Escuro (Dark Mode)**: Implementado com suporte Tailwind.  
- **Persistência de Dados**: Os dados serão salvos em um banco de dados SQL via Prisma.   

---

## Deploy

O projeto foi hospedado na Vercel. Você pode acessá-lo através do link:  
🔗 **[https://next-dashboard.vercel.app](https://next-dashboard.vercel.app)**  

---
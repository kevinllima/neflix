# 🎬 StreamFlix - Site Tipo Netflix

Uma réplica funcional de um site de streaming com navegação completa, perfis de usuário e interface moderna inspirada em plataformas como Netflix.

## 📋 Funcionalidades

✅ **Seleção de Perfis**
- 4 perfis diferentes (João, Maria, Carlos, Ana)
- Sistema de localStorage para lembrar o perfil anterior
- Imagens coloridas para cada perfil

✅ **Página Inicial**
- Navbar fixa e responsiva
- Hero banner com call-to-action
- Múltiplos carrosséis de conteúdo:
  - Em Destaque
  - Ação e Aventura
  - Comédia

✅ **Interatividade**
- Efeitos hover em todos os elementos
- Navegação por teclado (setas ← →)
- Clique nos filmes para mais detalhes (simulado)
- Busca (funcionalidade básica)
- Botão de logout

✅ **Design Responsivo**
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (até 480px)
- Totalmente otimizado para todos os dispositivos

## 🚀 Como Usar

### Opção 1: Abrir no Navegador
1. Navegue até a pasta do projeto
2. Clique duas vezes em `index.html` ou
3. Clique direito → "Abrir com" → Navegador de sua escolha

### Opção 2: Via Live Server (Recomendado)
Se usar VS Code:
1. Instale a extensão "Live Server"
2. Clique direito em `index.html`
3. Selecione "Open with Live Server"

### Opção 3: Via Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Depois acesse: `http://localhost:8000`

## 📁 Estrutura de Arquivos

```
alura/
├── index.html      # Estrutura HTML
├── styles.css      # Estilização CSS
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## 🎨 Cores Utilizadas

- **Fundo**: #0f0f0f (Preto profundo)
- **Destaque**: #e50914 (Vermelho Netflix)
- **Texto Secundário**: #ccc (Cinza claro)
- **Hover**: Efeitos de escala e cor

## ⌨️ Atalhos de Teclado

| Tecla | Função |
|-------|--------|
| `→` (Seta Direita) | Scroll carrossel para direita |
| `←` (Seta Esquerda) | Scroll carrossel para esquerda |

## 🔧 Personalização

### Adicionar Novos Perfis
Edite o HTML na seção de perfis (linha ~20):
```html
<div class="profile-card" onclick="selectProfile('Novo')">
    <img src="https://via.placeholder.com/150/CORES/FFFFFF?text=N" alt="Novo">
    <p>Novo</p>
</div>
```

### Adicionar Novo Carrossel
Copie a seção `<section class="content-section">` e adApte:
```html
<section class="content-section">
    <h2 class="section-title">Nova Categoria</h2>
    <div class="carousel">
        <!-- Adicione carousel-items aqui -->
    </div>
</section>
```

### Mudar Cores
Abra `styles.css` e procure por:
- `#e50914` para mudar a cor de destaque
- `#0f0f0f` para mudar a cor de fundo

## 📱 Navegadores Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 💡 Dicas

1. **Imagens**: O site usa placeholders. Para usar imagens reais, substitua as URLs nos `<img>` tags
2. **Vídeos**: Para adicionar vídeos, uma solução simples é usar um modal com `<iframe>`
3. **Banco de Dados**: Para produção, conecte a uma API backend (Node.js, Python, etc)
4. **Autenticação**: Implemente um sistema de login real

## 🚀 Próximas Melhorias

- [ ] Integração com API de filmes (TMDB, OMDb)
- [ ] Página de detalhes do filme
- [ ] Carrinho de assinatura
- [ ] Reprodutor de vídeo
- [ ] Sistema de avaliações
- [ ] Recomendações personalizadas
- [ ] Modo escuro/claro toggle
- [ ] Histórico de assistência

## 📝 Licença

Este projeto foi criado como fins educacionais. Sinta-se livre para modificar e usar como desejar!

## 🤝 Contribuições

Sugestões de melhorias? Deseja adicionar algo novo? 
1. Faça uma cópia
2. Crie sua branch
3. Envie suas mudanças
4. Abra um Pull Request

---

**Desenvolvido com ❤️ para Alura**

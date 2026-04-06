// Selecionar um perfil e ir para a página inicial
function selectProfile(profileName) {
    // Mudar a imagem do perfil
    const profileImages = {
        'João': 'https://via.placeholder.com/40/FF6B6B/FFFFFF?text=J',
        'Maria': 'https://via.placeholder.com/40/4ECDC4/FFFFFF?text=M',
        'Carlos': 'https://via.placeholder.com/40/45B7D1/FFFFFF?text=C',
        'Ana': 'https://via.placeholder.com/40/FFA07A/FFFFFF?text=A'
    };

    const profilePic = document.getElementById('profilePic');
    profilePic.src = profileImages[profileName];
    
    // Esconder página de perfil
    document.getElementById('profilePage').classList.remove('active');
    
    // Mostrar página inicial
    document.getElementById('homePage').classList.add('active');
    
    // Armazenar no localStorage
    localStorage.setItem('currentProfile', profileName);
    
    // Adicionar mensagem de boas-vindas
    console.log(`Bem-vindo, ${profileName}!`);
}

// Voltar para página de perfil
function backToProfile() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('profilePage').classList.add('active');
}

// Navbar com efeito de scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Carregar perfil anterior se existir
window.addEventListener('load', function() {
    const savedProfile = localStorage.getItem('currentProfile');
    if (savedProfile) {
        selectProfile(savedProfile);
    }
});

// Adicionar interatividade aos itens do carrossel
document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    carouselItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Você selecionou: ${title}\n\nEm breve você poderá assistir!`);
        });
    });

    // Preloader simulado
    setTimeout(function() {
        console.log('Página carregada com sucesso!');
    }, 500);
});

// Busca (simulada)
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = prompt('O que você está procurando?');
            if (query) {
                alert(`Buscando por: ${query}`);
            }
        });
    }
});

// Smooth scroll para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar classe active ao clicado
            this.classList.add('active');
        });
    });
    
    // Definir o primeiro link como ativo
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

// Keyboard navigation (usando seta direita para scroll do carrossel)
let currentCarouselIndex = 0;

document.addEventListener('keydown', function(e) {
    const carousels = document.querySelectorAll('.carousel');
    
    if (e.key === 'ArrowRight' && carousels.length > 0) {
        const carousel = carousels[0];
        carousel.scrollBy({ left: 250, behavior: 'smooth' });
    }
    
    if (e.key === 'ArrowLeft' && carousels.length > 0) {
        const carousel = carousels[0];
        carousel.scrollBy({ left: -250, behavior: 'smooth' });
    }
});

// Adicionar loading visual (simulado)
function showLoading() {
    console.log('Carregando conteúdo...');
}

function hideLoading() {
    console.log('Conteúdo carregado!');
}

// Efeito hover nos botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Log de desenvolvedor (pode remover em produção)
console.log('%c🎬 Bem-vindo ao StreamFlix!', 'color: #e50914; font-size: 20px; font-weight: bold;');
console.log('Use as setas do teclado (← →) para navegar nos carrosséis');

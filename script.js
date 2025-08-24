// Dados dos protótipos
const prototypes = [
    {
        id: 1,
        name: "MyHeart",
        description: "Simulador cardiácico, com visualizações gráficas e ajustes personalizados.",
        image: "img/myheart-capa.jpg",
        link: "https://github.com/gearlabs/ecotrackerim"
    },
    {
        id: 2,
        name: "BaristaPro",
        description: "Gestão eficiente de cafeterias com foco em viabilidade e performance",
        image: "img/baristapro-capa.jpg",
        link: "https://github.com/gearlabs/mindflow"
    },
    {
        id: 3,
        name: "Synapse",
        description: "Conexão interativa de ideias para colaboração criativa e descoberta coletiva",
        image: "img/synapse-capa.jpg",
        link: "https://dealegear.github.io/Synapse/"
    },
    {
        id: 4,
        name: "3GTO",
        description: "Realidade virtual que conecta aventura e tecnologia",
        image: "img/3gto-capa.jpg",
        link: "https://dealegear.github.io/3GTO/"
    },
    {
        id: 5,
        name: "Baristas",
        description: "Uma cafeteria aconchegante com cafés especiais e muitas novidades",
        image: "img/baristas-capa.jpg",
        link: "https://dealegear.github.io/Baristas/"
    },
    {
        id: 6,
        name: "Dyris",
        description: "Acompanhe sua saúde ao longo da vida, prevena riscos e personalizse cuidados",
        image: "img/dyris-capa.jpg",
        link: "https://github.com/gearlabs/taskmaster"
    },
    {
        id: 7,
        name: "Fabr",
        description: "Uma plataforma de fabricação colaborativa, onde pessoas combinam habilidades para criar algo novo",
        image: "img/fabr-capa.jpg",
        link: "https://dealegear.github.io/Fabr/"
    },
    {
        id: 8,
        name: "UnderSea",
        description: "Drones subaquáticos para explorar, monitorar e estudar os oceanos de forma autônoma",
        image: "img/undersea-capa.jpg",
        link: "https://dealegear.github.io/UnderSea/"
    },
    {
        id: 9,
        name: "Oxygen",
        description: "Explorando novas formas de gerar energia eficiente e sustentável",
        image: "img/oxygen-capa.jpg",
        link: "https://dealegear.github.io/Oxygen/"
    },
    {
        id: 10,
        name: "Bosque das Frutíferas",
        description: "Trazendo natureza, educação e bem-estar para as cidades",
        image: "img/bosquedasfrutiferas-capa.jpg",
        link: "https://dealegear.github.io/BosquedasFrutiferas/"
    },
    {
        id: 11,
        name: "Mecanico Fantasma",
        description: "Monitoramento e analise de sons mecânicos de veículos, identificando divergências e prevenindo falhas",
        image: "img/mecanicofantasma-capa.jpg",
        link: "https://dealegear.github.io/MecanicoFantasma/"
    },
    {
        id: 12,
        name: "Viver é uma Arte",
        description: "Criação e exposição de arte a áreas carentes, proporcionando bem-estar e renda",
        image: "img/viverarte-capa.jpg",
        link: "https://dealegear.github.io/ViverArte/"
    }
];

// Função para criar um card de protótipo
function createPrototypeCard(prototype) {
    return `
        <article class="prototype-card">
            <img src="${prototype.image}" alt="${prototype.name}" class="prototype-image">
            <div class="prototype-content">
                <h3 class="prototype-title">${prototype.name}</h3>
                <p class="prototype-description">${prototype.description}</p>
                <a href="${prototype.link}" target="_blank" class="prototype-link">
                    <span>Ver no GitHub</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </article>
    `;
}

// Função para renderizar todos os protótipos
function renderPrototypes() {
    const grid = document.getElementById('prototypesGrid');
    grid.innerHTML = prototypes.map(prototype => createPrototypeCard(prototype)).join('');
}

// Função para adicionar novo protótipo
function addPrototype(newPrototype) {
    prototypes.push(newPrototype);
    renderPrototypes();
}

// Menu Mobile Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scroll para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    // Limitar o efeito parallax para evitar problemas de sobreposição
    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Mudar estilo do navbar ao rolar
    const navbar = document.querySelector('.navbar');
    if (scrolled > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    renderPrototypes();
    
    // Adicionar animação aos cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.prototype-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
    
    // Adicionar evento de clique no indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.prototypes-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Exemplo de como adicionar um novo protótipo dinamicamente
// Você pode chamar esta função quando precisar adicionar novos projetos
/*
const newProject = {
    id: 7,
    name: "Novo Projeto",
    description: "Descrição do novo projeto",
    image: "https://picsum.photos/seed/newproject/400/300.jpg",
    link: "https://github.com/gearlabs/newproject"
};
addPrototype(newProject);
*/
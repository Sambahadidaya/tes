window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById('scroll-progress')
        .style.width = scrollPercent + '%';
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('popular-track');
    function updateCarousel() {
        const cards = Array.from(track.children);
        const centerIndex = 2;
        cards.forEach((card, index) => {
            card.classList.remove('card-active', 'card-inactive');
            if (!card.classList.contains('pop-card')) card.classList.add('pop-card');
            if (index === centerIndex) card.classList.add('card-active');
            else card.classList.add('card-inactive');
        });
    }
    setInterval(() => {
        track.insertBefore(track.lastElementChild, track.firstElementChild);
        updateCarousel();
    }, 3000);
    updateCarousel();
});

// Mapping Data Kategori & Conclusion
const skillDatabase = {
    "SEMUA": {
        title: "SEMUA Stats",
        conclusionTitle: "Generalist IT & Kreatif",
        conclusion: "Secara keseluruhan, saya memiliki fondasi yang seimbang di berbagai bidang IT dan kreatif. Saya menjadikan FullStack Development dan IT Support sebagai pilar utama, sekaligus mengeksplorasi Data Engineer dan dunia Multimedia digital.",
        stats: [
            { label: "FullStack", value: 83 },
            { label: "IT Support", value: 65 },
            { label: "Data Eng", value: 40 },
            { label: "Desainer", value: 70 },
            { label: "Multimedia", value: 50 }
        ]
    },
    "FULLSTACK": {
        title: "FullStack Stats",
        conclusionTitle: " FullStack : Pengembangan Web",
        conclusion: "Fokus utama saya ada pada pengembangan web. Kemampuan Front-End saya (seperti React & Tailwind) cukup menonjol, didukung pemahaman Back-End dan struktur Database untuk membangun aplikasi fungsional end-to-end.",
        stats: [
            { label: "Front-End", value: 35 },
            { label: "Back-End", value: 20 },
            { label: "UI/UX", value: 20 },
            { label: "Database", value: 20 },
            { label: "Security", value: 10 }
        ]
    },
    "ITSUPPORT": {
        title: "IT Support Stats",
        conclusionTitle: "IT Support : administrasi Sistem",
        conclusion: "Saya memiliki pemahaman kuat dalam menangani permasalahan jaringan dan infrastruktur perangkat keras. Saya terbiasa melakukan troubleshooting dan OS Administration untuk memastikan operasional IT berjalan optimal.",
        stats: [
            { label: "Networking", value: 25 },
            { label: "Hardware", value: 25 },
            { label: "OS Admin", value: 20 },
            { label: "Troubleshooting", value: 20 },
            { label: "Scripting", value: 10 }
        ]
    },
    "DATAENGINEER": { // Berubah dari AIENGINEER
        title: "Data Engineer Stats",
        conclusionTitle: "Pengelolaan & Analisis Data",
        conclusion: "Memiliki ketertarikan tinggi pada arsitektur data. Saya aktif mempelajari Python dan database (SQL/NoSQL) untuk otomatisasi pemrosesan data, integrasi pipeline, dan analisis data yang efisien.",
        stats: [
            { label: "Python", value: 30 },
            { label: "Database", value: 25 },
            { label: "Pipeline", value: 20 },
            { label: "Analytics", value: 15 },
            { label: "Big Data", value: 10 }
        ]
    },
    "DESAINER": {
        title: "Desainer Stats",
        conclusionTitle: "Visual & UI/UX",
        conclusion: "Sisi artistik saya tersalurkan dengan baik lewat desain grafis. Saya menguasai tools modern untuk menciptakan tata letak antarmuka yang estetis dan berpusat pada pengalaman pengguna.",
        stats: [
            { label: "Vector", value: 25 },
            { label: "Raster", value: 25 },
            { label: "UI/UX", value: 20 },
            { label: "Layout", value: 15 },
            { label: "Branding", value: 15 }
        ]
    },
    "MULTIMEDIA": { // Berubah dari ARSITEKTUR
        title: "Multimedia Stats",
        conclusionTitle: "Audio Visual & 3D",
        conclusion: "Pada bidang Multimedia, saya memadukan estetika dengan teknik produksi. Kemampuan video editing, fotografi, dan 3D Modeling saya gunakan untuk memvisualisasikan karya digital yang menarik dan interaktif.",
        stats: [
            { label: "Video Editing", value: 30 },
            { label: "Fotografi", value: 25 },
            { label: "3D Modeling", value: 20 },
            { label: "Color Grading", value: 15 },
            { label: "Animation", value: 10 }
        ]
    }
};

// Mapping Daftar Tech Stack berdasarkan Kategori
const techStacks = {
    "SEMUA": ["Silahkan pilih kategori menu di atas untuk memfilter daftar tech stack yang lebih spesifik."],
    "FULLSTACK": ["HTML", "CSS", "JS", "Python", "Java", "React", "Android Studio", "VS Code", "Antigrafity", "Vite", "Supabase", "n8n", "Tailwind", "Vercel", "Render", "Railway", "Midtrans"],
    "ITSUPPORT": ["Windows Server", "Linux", "Mikrotik", "Cisco", "Wireshark", "VMware", "Active Directory", "Hardware Repair", "LAN/WAN"],
    "DATAENGINEER": ["Python", "SQL", "Hadoop", "Spark", "NoSQL", "Airflow", "Tableau", "Pandas", "Kafka"],
    "DESAINER": ["CorelDraw", "Canva", "Figma", "AutoCAD", "Blender", "SketchUp"],
    "MULTIMEDIA": ["Capcut", "Photoshop", "Premiere Pro", "Kamera Fujifilm", "Kamera Canon", "CorelDraw", "Canva", "Figma", "AutoCAD", "Blender", "SketchUp"]
};

var centerX = 150, centerY = 150, radius = 100;
const labelStyles = [
    "top: 0; left: 50%; transform: translateX(-50%);",
    "top: 35%; right: -20px;",
    "bottom: 10%; right: 20px;",
    "bottom: 10%; left: 20px;",
    "top: 35%; left: -20px;"
];

function getCoords(values) {
    return values.map((val, i) => {
        const angle = (Math.PI * 2 / 5) * i - (Math.PI / 2);
        const r = (val / 100) * radius;
        return { x: centerX + r * Math.cos(angle), y: centerY + r * Math.sin(angle) };
    });
}

function updateRadar(key) {
    const data = skillDatabase[key];

    // 1. Update Title & Radar Map
    document.getElementById('radar-title').textContent = data.title;
    const coords = getCoords(data.stats.map(s => s.value));
    document.getElementById('radar-value').setAttribute('points', coords.map(c => `${c.x},${c.y}`).join(' '));

    // 2. Update Kesimpulan Dinamis
    const kesimpulanTitle = document.getElementById('kesimpulan-title');
    const kesimpulanText = document.getElementById('kesimpulan-text');

    kesimpulanTitle.style.opacity = 0;
    kesimpulanText.style.opacity = 0;
    setTimeout(() => {
        kesimpulanTitle.textContent = " - " + data.conclusionTitle;
        kesimpulanText.textContent = data.conclusion;
        kesimpulanTitle.style.opacity = 1;
        kesimpulanText.style.opacity = 1;
    }, 200);

    // 3. Update Tech Stack Div Dinamis
    const stackContainer = document.getElementById('tech-stack-container');
    stackContainer.style.opacity = 0;

    setTimeout(() => {
        stackContainer.innerHTML = '';
        if (techStacks[key]) {
            techStacks[key].forEach(tech => {
                const span = document.createElement('span');
                span.className = 'px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2';

                // Icon mapping basic
                let iconClass = 'fas fa-code text-gray-500';
                const tLower = tech.toLowerCase();
                if (tLower.includes('html')) iconClass = 'fab fa-html5 text-orange-500';
                else if (tLower.includes('css')) iconClass = 'fab fa-css3-alt text-blue-500';
                else if (tLower.includes('js') || tLower.includes('javascript')) iconClass = 'fab fa-js text-yellow-400';
                else if (tLower.includes('python')) iconClass = 'fab fa-python text-blue-400';
                else if (tLower.includes('java ') || tLower === 'java') iconClass = 'fab fa-java text-red-500';
                else if (tLower.includes('react')) iconClass = 'fab fa-react text-cyan-400';
                else if (tLower.includes('android')) iconClass = 'fab fa-android text-green-500';
                else if (tLower.includes('figma')) iconClass = 'fab fa-figma text-purple-400';
                else if (tLower.includes('linux')) iconClass = 'fab fa-linux text-gray-200';
                else if (tLower.includes('windows')) iconClass = 'fab fa-windows text-blue-400';
                else if (tLower.includes('kamera') || tLower.includes('fujifilm') || tLower.includes('canon')) iconClass = 'fas fa-camera text-gray-300';
                else if (tLower.includes('sql') || tLower.includes('database')) iconClass = 'fas fa-database text-blue-300';
                else if (key === 'SEMUA') iconClass = 'fas fa-info-circle text-blue-400';

                span.innerHTML = `<i class="${iconClass}"></i> ${tech}`;
                stackContainer.appendChild(span);
            });
        }
        stackContainer.style.opacity = 1;
    }, 200);

    // 4. Render Labels
    const labelBox = document.getElementById('radar-labels');
    labelBox.innerHTML = '';
    data.stats.forEach((s, i) => {
        const el = document.createElement('div');
        el.className = 'label-pos';
        el.style.cssText = labelStyles[i];
        el.textContent = s.label;
        labelBox.appendChild(el);
    });

    // 5. Render Dots & Tooltip
    const dotBox = document.getElementById('radar-dots');
    dotBox.innerHTML = '';
    coords.forEach((c, i) => {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("cx", c.x); dot.setAttribute("cy", c.y); dot.setAttribute("r", "4");
        dot.setAttribute("fill", "#fbbf24"); dot.setAttribute("class", "dot-trigger");

        dot.onmouseover = () => {
            const tt = document.getElementById('radar-tooltip');
            document.getElementById('tooltip-title').textContent = data.stats[i].label;
            document.getElementById('tooltip-value').textContent = data.stats[i].value;
            tt.style.left = (c.x + 20) + 'px'; tt.style.top = (c.y - 20) + 'px';
            tt.classList.remove('hidden'); setTimeout(() => tt.style.opacity = '1', 10);
        };
        dot.onmouseout = () => {
            const tt = document.getElementById('radar-tooltip');
            tt.style.opacity = '0'; setTimeout(() => tt.classList.add('hidden'), 300);
        };
        dotBox.appendChild(dot);
    });
}

function toggleDropdown(open) {
    const container = document.getElementById('skill-dropdown');
    const loop = document.getElementById('dropdown-loop');
    const list = document.getElementById('dropdown-list');

    if (open) {
        container.style.height = '21rem';
        loop.style.opacity = '0';
        loop.style.pointerEvents = 'none';

        setTimeout(() => {
            list.style.opacity = '1';
            list.style.pointerEvents = 'auto';
        }, 200);
    } else {
        list.style.opacity = '0';
        list.style.pointerEvents = 'none';
        container.style.height = '3rem';

        setTimeout(() => {
            loop.style.opacity = '1';
            loop.style.pointerEvents = 'auto';
        }, 400);
    }
}

function selectSkill(key) {
    updateRadar(key);
    toggleDropdown(false);
}

document.getElementById('radar-bg').setAttribute('points', getCoords([100, 100, 100, 100, 100]).map(c => `${c.x},${c.y}`).join(' '));
document.getElementById('level-80').setAttribute('points', getCoords([80, 80, 80, 80, 80]).map(c => `${c.x},${c.y}`).join(' '));
document.getElementById('level-60').setAttribute('points', getCoords([60, 60, 60, 60, 60]).map(c => `${c.x},${c.y}`).join(' '));
document.getElementById('level-40').setAttribute('points', getCoords([40, 40, 40, 40, 40]).map(c => `${c.x},${c.y}`).join(' '));

document.getElementById('kesimpulan-title').style.transition = 'opacity 0.3s ease';
document.getElementById('kesimpulan-text').style.transition = 'opacity 0.3s ease';
document.getElementById('tech-stack-container').style.transition = 'opacity 0.3s ease';

setTimeout(() => { updateRadar("SEMUA"); }, 500);

// Logika untuk Project Manager (Alpine.js)
function projectManager() {
    // Membuat dummy data (5 project per kategori) agar Anda mudah mengkustomisasinya nanti
    const dummyData = [];
    const categories = ['FULLSTACK', 'IT SUPPORT', 'DATA ENGINEER', 'DESAINER', 'MULTIMEDIA'];
    const icons = ['fa-code', 'fa-server', 'fa-database', 'fa-paint-brush', 'fa-video'];
    const images = [
        'poto.webp',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=600&h=400&fit=crop'
    ];

    let idCounter = 1;
    categories.forEach((cat, index) => {
        for (let i = 1; i <= 5; i++) {
            dummyData.push({
                id: idCounter++,
                title: `Project ${cat} ${i}`,
                category: cat,
                icon: 'fas ' + icons[index],
                img: images[(i - 1) % 5],
                desc: `Ini adalah deskripsi detail untuk Project ${cat} ${i}. Anda dapat mengedit teks ini di dalam array dummyData pada script. Project ini mendemonstrasikan keahlian dalam bidang ${cat}.`,
                demoLink: 'https://github.com/SambaHadiDaya' // Link yang dituju jika kategori FULLSTACK
            });
        }
    });

    return {
        activeCategory: 'SEMUA',
        categories: ['SEMUA', ...categories],
        isModalOpen: false,
        isFullScreen: false,
        selectedProject: null,
        projects: dummyData, // Edit array projects di sini jika ingin mengubah data asli

        filteredProjects() {
            if (this.activeCategory === 'SEMUA') {
                return this.projects;
            }
            return this.projects.filter(p => p.category === this.activeCategory);
        },

        openModal(proj) {
            this.selectedProject = proj;
            this.isModalOpen = true;
            this.isFullScreen = false;
            document.body.style.overflow = 'hidden'; // Mencegah scroll pada body saat modal terbuka
        },

        closeModal() {
            this.isModalOpen = false;
            this.isFullScreen = false;
            document.body.style.overflow = '';
            setTimeout(() => { this.selectedProject = null; }, 300); // Menunggu transisi selesai
        }
    }
}

// Ganti dengan URL dan Anon Key dari Project Supabase Anda (Settings -> API)
const supabaseUrl = 'URL_PROJECT_SUPABASE_ANDA';
const supabaseKey = 'ANON_KEY_SUPABASE_ANDA';
let supabaseClient = null;

// Mengamankan inisialisasi agar tidak crash jika URL masih dummy
try {
    if (supabaseUrl.startsWith('http')) {
        // Pada CDN, cukup panggil supabase.createClient
        supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
    } else {
        console.warn("Supabase belum terhubung: URL tidak valid.");
    }
} catch (error) {
    console.error("Gagal menginisialisasi Supabase:", error);
}

function contactFormHandler() {
    return {
        form: { name: '', email: '', message: '' },
        isLoading: false,
        notif: { show: false, text: '', isError: false },

        async submitForm() {
            this.isLoading = true;
            this.notif.show = false;

            // Validasi Email Ketat
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                this.notif = { show: true, text: "Format email tidak valid.", isError: true };
                this.isLoading = false;
                return;
            }

            // Cegah pengiriman jika Supabase belum disetting
            if (!supabaseClient) {
                this.notif = { show: true, text: "Sistem pengiriman pesan belum dikonfigurasi.", isError: true };
                this.isLoading = false;
                return;
            }

            try {
                const { error } = await supabaseClient.from('contacts').insert([this.form]);
                if (error) throw error;

                this.notif = { show: true, text: "Pesan berhasil terkirim!", isError: false };
                this.form = { name: '', email: '', message: '' }; // Reset form
            } catch (err) {
                this.notif = { show: true, text: "Gagal mengirim pesan: " + err.message, isError: true };
            } finally {
                this.isLoading = false;
                setTimeout(() => { this.notif.show = false; }, 5000); // Hilangkan notif setelah 5 detik
            }
        }
    }
}
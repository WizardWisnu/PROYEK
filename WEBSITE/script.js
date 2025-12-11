document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // DATA KUIS DAN GERAKAN
    // ===================================

    // Data Detail Gerakan untuk bagian #gerakan (TETAP SAMA)
    const detailGerakanData = {
        guncang: {
            judul: "Pukul Tangan (Guncang): Kekuatan Kolektif",
            deskripsi: "Gerakan ini melibatkan tepukan tangan ke dada, ke paha, dan ke lantai. Kecepatan dan kekompakan tepukan ini menghasilkan suara perkusi yang memompa semangat, melambangkan energi yang tersinkronisasi."
        },
        kirep: {
            judul: "Gerakan Kepala (Kirep): Fokus dan Kecepatan",
            deskripsi: "Kirep adalah gerakan cepat memiringkan kepala. Menuntut fokus luar biasa agar semua penari bergerak pada hitungan yang sama persis, mewakili kedisiplinan mental."
        },
        lingang: {
            judul: "Berbaring (Lingang): Kerendahan Hati",
            deskripsi: "Gerakan paling rendah dalam Saman, di mana penari merunduk hingga hampir menyentuh lantai. Ini adalah tanda penghormatan dan kerendahan hati kepada Sang Pencipta."
        }
    };
    
    // Database Soal Kuis Saman (MENGGUNAKAN 18 SOAL TERAKHIR)
    const questions = [
        { question: "Tari Saman diciptakan oleh ulama Aceh bernama...", answers: [{ text: "Syekh Saman", correct: true }, { text: "Teuku Umar", correct: false }, { text: "Sultan Iskandar Muda", correct: false }, { text: "Cut Nyak Dien", correct: false }], image: "saman-syekh.jpg" },
        { question: "Tari Saman berasal dari suku mana?", answers: [{ text: "Suku Aceh Pesisir", correct: false }, { text: "Suku Gayo", correct: true }, { text: "Suku Alas", correct: false }, { text: "Suku Minang", correct: false }], image: "saman-aceh.jpg" },
        { question: "Apa nama nyanyian atau irama yang dibawakan penari?", answers: [{ text: "Ratoeh", correct: false }, { text: "Rengum", correct: true }, { text: "Didong", correct: false }, { text: "Seudati", correct: false }], image: "saman-vokal.jpg" },
        { question: "Tari Saman diakui UNESCO pada tahun...", answers: [{ text: "2007", correct: false }, { text: "2011", correct: true }, { text: "2015", correct: false }, { text: "2019", correct: false }], image: "saman-unesco.jpg" },
        { question: "Makna utama formasi rapat Tari Saman adalah...", answers: [{ text: "Kekuasaan", correct: false }, { text: "Persatuan dan Persaudaraan", correct: true }, { text: "Keteraturan Alam", correct: false }, { text: "Ketangkasan Fisik", correct: false }], image: "saman-filosofi.jpg" },
        { question: "Alat musik yang digunakan untuk mengiringi Saman adalah...", answers: [{ text: "Gendang", correct: false }, { text: "Rapa'i", correct: false }, { text: "Perkusi tubuh dan vokal", correct: true }, { text: "Canang", correct: false }], image: "saman-perkusi.jpg" },
        { question: "Gerakan 'Kirep' adalah gerakan apa?", answers: [{ text: "Menggoyangkan bahu", correct: false }, { text: "Menyentuh lantai", correct: false }, { text: "Menggerakkan kepala cepat", correct: true }, { text: "Melambaikan tangan", correct: false }], image: "saman-kirep.jpg" },
        { question: "Berapa jumlah penari Saman tradisional yang umum?", answers: [{ text: "Ganjil (5, 7, 9, 11...)", correct: true }, { text: "Genap (6, 8, 10, 12...)", correct: false }, { text: "Bebas, tergantung panggung", correct: false }, { text: "Selalu 12 orang", correct: false }], image: "saman-formasi.jpg" },
        { question: "Apa nama dari penutup kepala penari Saman wanita?", answers: [{ text: "Tangkulok", correct: false }, { text: "Bulang Sunting", correct: false }, { text: "Ketopong", correct: false }, { text: "Tali Temali (Bisa disebut juga Ketupat)", correct: true }], image: "saman-kostum-kepala.jpg" },
        { question: "Tarian Saman biasanya dipertunjukkan untuk acara...", answers: [{ text: "Penyambutan tamu asing", correct: false }, { text: "Perayaan panen dan adat", correct: true }, { text: "Upacara pernikahan kerajaan", correct: false }, { text: "Ritual pengobatan", correct: false }], image: "saman-acara.jpg" },
        { question: "Gerakan Saman saat tangan kanan menampar paha dan tangan kiri menampar lantai disebut...", answers: [{ text: "Guncang", correct: false }, { text: "Petik", correct: false }, { text: "Dering", correct: true }, { text: "Redet", correct: false }], image: "saman-dering.jpg" },
        { question: "Siapa yang bertanggung jawab memimpin kelompok dan memulai Rengum/Syair Saman?", answers: [{ text: "Raja", correct: false }, { text: "Syekh", correct: true }, { text: "Guru", correct: false }, { text: "Penari paling kanan", correct: false }], image: "saman-syekh-lead.jpg" },
        { question: "Tarian Saman sering disebut juga sebagai tarian 'Seribu...'?", answers: [{ text: "Tangan", correct: false }, { text: "Malam", correct: false }, { text: "Kekompakan", correct: false }, { text: "Tepukan", correct: true }], image: "saman-tepukan.jpg" },
        { question: "Kostum penari Saman tradisional didominasi warna...", answers: [{ text: "Kuning dan Cokelat", correct: false }, { text: "Putih dan Biru", correct: false }, { text: "Hitam, Merah, dan Hijau", correct: true }, { text: "Merah muda dan Ungu", correct: false }], image: "saman-kostum-warna.jpg" },
        { question: "Gerakan 'Kipah' adalah gerakan Saman yang menggunakan...", answers: [{ text: "Bahu", correct: false }, { text: "Kaki", correct: false }, { text: "Tangan dan Telapak Tangan", correct: true }, { text: "Kepala", correct: false }], image: "saman-kipah.jpg" },
        { question: "Apa bahasa yang digunakan dalam syair Rengum Tari Saman?", answers: [{ text: "Bahasa Aceh Pesisir", correct: false }, { text: "Bahasa Indonesia", correct: false }, { text: "Bahasa Gayo", correct: true }, { text: "Bahasa Arab", correct: false }], image: "saman-gayo-language.jpg" },
        { question: "Selain tepukan, gerakan di dada yang sering dilakukan penari Saman adalah...", answers: [{ text: "Memijat", correct: false }, { text: "Menggenggam", correct: false }, { text: "Tepuk atau Pukul Dada", correct: true }, { text: "Menggaruk", correct: false }], image: "saman-dada.jpg" },
        { question: "Apa istilah untuk gerakan transisi atau jeda dalam Tari Saman?", answers: [{ text: "Syahwat", correct: false }, { text: "Baring", correct: false }, { text: "Suling", correct: false }, { text: "Ngaleng", correct: true }], image: "saman-ngaleng.jpg" },
    ];

    // ===================================
    // INISIALISASI KUIS
    // ===================================

    const startCard = document.getElementById('start-card');
    const questionCard = document.getElementById('question-card');
    const resultCard = document.getElementById('result-card');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const questionText = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const answerButtons = document.getElementById('answer-buttons');
    const progressText = document.getElementById('progress-text');
    const scoreDisplay = document.getElementById('score-display');
    const feedbackText = document.getElementById('feedback-text');
    const restartBtn = document.getElementById('restart-btn');
    const gerakanItems = document.querySelectorAll('.gerakan-item');
    const gerakanDetail = document.getElementById('gerakan-detail');

    let currentQuestionIndex = 0;
    let score = 0;
    let shuffledQuestions = [];
    const TOTAL_QUESTIONS = 10;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startQuiz() {
        startCard.classList.add('hidden');
        questionCard.classList.remove('hidden');
        resultCard.classList.add('hidden');
        
        shuffledQuestions = shuffleArray([...questions]).slice(0, TOTAL_QUESTIONS);
        
        currentQuestionIndex = 0;
        score = 0;
        nextBtn.disabled = true;
        showQuestion();
    }

    function showQuestion() {
        resetState();
        
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        
        progressText.textContent = `Soal ${currentQuestionIndex + 1} dari ${TOTAL_QUESTIONS}`;
        questionText.textContent = currentQuestion.question;

        questionImage.style.backgroundImage = `url('images/${currentQuestion.image}')`; 

        const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        nextBtn.disabled = true;
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === 'true';

        if (isCorrect) {
            score++;
            selectedButton.classList.add('correct');
        } else {
            selectedButton.classList.add('wrong');
        }

        // Tampilkan Jawaban Benar & Non-aktifkan semua tombol
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });

        // ==========================================================
        // PERUBAHAN UTAMA: HILANGKAN TOMBOL LANJUT DAN TAMBAHKAN JEDA OTOMATIS
        // nextBtn.disabled = false; // Baris ini Dihilangkan
        
        // Panggil handleNextButton setelah jeda 1000 milidetik (1 detik)
        setTimeout(() => {
            handleNextButton();
        }, 1000); 
        // ==========================================================
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionCard.classList.add('hidden');
        resultCard.classList.remove('hidden');

        scoreDisplay.textContent = score;
        let feedback = "";
        
        if (score >= 8) {
            feedback = "Luar Biasa! Sinkronisasi Anda sempurna!";
            feedbackText.classList.add('good');
        } else if (score >= 5) {
            feedback = "Cukup Baik! Irama Anda mulai terasa, tingkatkan lagi kekompakannya!";
            feedbackText.classList.add('average');
        } else {
            feedback = "Perlu Latihan Intensif! Ritme Anda masih kurang kompak, coba lagi!";
            feedbackText.classList.add('poor');
        }
        feedbackText.textContent = feedback;
    }

    // Interaksi Gerakan
    gerakanItems.forEach(item => {
        item.addEventListener('click', function() {
            gerakanItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const gerakanKey = this.getAttribute('data-gerakan');
            const data = detailGerakanData[gerakanKey];

            gerakanDetail.style.opacity = 0;

            setTimeout(() => {
                gerakanDetail.innerHTML = `
                    <h4>${data.judul}</h4>
                    <p>${data.deskripsi}</p>
                `;
                gerakanDetail.style.opacity = 1;
            }, 300);
        });
    });

    // Scroll-Triggered Animation (Intersection Observer)
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Event Listeners Kuis
    startBtn.addEventListener('click', startQuiz);
    // nextBtn.addEventListener('click', handleNextButton); // Baris ini Dihilangkan fungsinya
    restartBtn.addEventListener('click', startQuiz);
   
});

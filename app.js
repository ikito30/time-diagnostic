'use strict';

(() => {
    const questions = [
        {
            id: 1,
            text: 'Как вы обычно планируете свою неделю?',
            options: [
                { text: 'Определяю главные задачи недели, расставляю приоритеты и планирую время на их выполнение.', score: 3 },
                { text: 'Составляю список задач и примерно распределяю их по дням.', score: 2 },
                { text: 'В первую очередь берусь за задачи, которые требуют скорейшего выполнения.', score: 1 },
                { text: 'Начинаю с поступающих поручений, писем и сообщений, а дальнейшие действия определяю по ситуации.', score: 0 }
            ]
        },
        {
            id: 2,
            text: 'Вы запланировали важную для вас задачу, но неожиданно получаете срочное поручение. Как вы поступаете?',
            options: [
                { text: 'Уточняю срочность просьбы, оцениваю свою загрузку и договариваюсь о возможных сроках помощи.', score: 3 },
                { text: 'Соглашаюсь помочь и предлагаю время, когда смогу уделить внимание задаче.', score: 2 },
                { text: 'Стараюсь помочь сразу, даже если ради этого приходится переносить запланированные задачи.', score: 1 },
                { text: 'Берусь за просьбу коллеги, а свои задачи часто приходится завершать после рабочего дня.', score: 0 }
            ]
        },
        {
            id: 3,
            text: 'В конце рабочего дня вы понимаете, что не успели завершить одну из запланированных задач. Как вы обычно поступаете?',
            options: [
                { text: 'Анализирую, что помешало, оцениваю оставшийся объём работы и определяю новый срок завершения.', score: 3 },
                { text: 'Переношу задачу на следующий день и стараюсь выделить время на её завершение.', score: 2 },
                { text: 'Оставляю задачу в общем списке дел и возвращаюсь к ней, когда появляется возможность.', score: 1 },
                { text: 'Стараюсь закончить задачу после рабочего дня, даже если приходится задерживаться.', score: 0 }
            ]
        },
        {
            id: 4,
            text: 'В вашем списке 10 задач, но времени хватит только на пять. Как вы выбираете, что выполнить?',
            options: [
                { text: 'Определяю, какие задачи принесут наибольшую пользу, и оцениваю последствия переноса остальных.', score: 3 },
                { text: 'В первую очередь выбираю задачи, которые нужно завершить раньше остальных.', score: 2 },
                { text: 'Сначала берусь за задачи, которые можно выполнить быстрее и с меньшими усилиями.', score: 1 },
                { text: 'Пытаюсь выполнить как можно больше задач, даже если для этого придётся пожертвовать личным временем.', score: 0 }
            ]
        },
        {
            id: 5,
            text: 'Вам необходимо выполнить сложную задачу, требующую двух часов сосредоточенной работы. Как вы обычно организуете её выполнение?',
            options: [
                { text: 'Заранее выделяю время для работы и по возможности исключаю отвлекающие факторы.', score: 3 },
                { text: 'Стараюсь найти подходящее время, но периодически прерываюсь на другие дела.', score: 2 },
                { text: 'Выполняю задачу небольшими частями между звонками, сообщениями и текущими поручениями.', score: 1 },
                { text: 'Часто откладываю такую работу до конца дня, когда становится меньше отвлечений.', score: 0 }
            ]
        },
        {
            id: 6,
            text: 'Коллега просит помочь с задачей в рамках вашей профессиональной компетенции, когда у вас уже запланировано много работы. Как вы обычно реагируете?',
            options: [
                { text: 'Уточняю срочность просьбы, оцениваю свою загрузку и договариваюсь о возможных сроках помощи.', score: 3 },
                { text: 'Соглашаюсь помочь и предлагаю время, когда смогу уделить внимание задаче.', score: 2 },
                { text: 'Стараюсь помочь сразу, даже если ради этого приходится откладывать собственные задачи.', score: 1 },
                { text: 'Мне сложно отказывать коллегам, поэтому я часто беру на себя дополнительную работу, даже когда времени не хватает.', score: 0 }
            ]
        },
        {
            id: 7,
            text: 'Вспомните свою последнюю рабочую неделю. Насколько вам удалось придерживаться намеченных планов?',
            options: [
                { text: 'Большинство запланированных задач выполнил(а) вовремя, а непредвиденные ситуации не помешали завершить главное.', score: 3 },
                { text: 'Основные задачи выполнил(а), хотя часть пришлось переносить или завершать позже.', score: 2 },
                { text: 'Значительную часть времени занимали незапланированные дела, поэтому многие задачи остались незавершёнными.', score: 1 },
                { text: 'Постоянно приходилось реагировать на срочные запросы, а на запланированные задачи практически не оставалось времени.', score: 0 }
            ]
        }
    ];

    const profiles = [
        {
            min: 18, max: 21,
            name: '«Часовой механизм»',
            description: 'Ваш рабочий день обычно идёт по плану! Вы умеете распределять время, определять приоритеты и справляться с неожиданными задачами. На тренинге вы сможете узнать, как сделать свою систему планирования ещё более гибкой и эффективной.'
        },
        {
            min: 13, max: 17,
            name: '«Почти на ходу»',
            description: 'У вас уже есть привычки, которые помогают управлять временем. Однако срочные дела и неожиданные обстоятельства иногда нарушают планы. На тренинге вы освоите способы сохранять фокус на главном и быстрее возвращаться к запланированным задачам.'
        },
        {
            min: 7, max: 12,
            name: '«Песочные часы»',
            description: 'Вы много работаете, но время не всегда расходуется так, как хотелось бы. Незапланированные дела могут отнимать внимание от намеченных задач. На тренинге вы познакомитесь с инструментами, которые помогут разумнее распределять нагрузку и успевать больше без лишней спешки.'
        },
        {
            min: 0, max: 6,
            name: '«В водовороте задач»',
            description: 'Похоже, рабочий день часто складывается не так, как вы планировали. Срочные поручения, просьбы коллег и текущие дела оставляют мало времени на собственные задачи. На тренинге вы узнаете, как выстроить понятную систему планирования и постепенно вернуть контроль над своим временем.'
        }
    ];

    const skills = [
        { key: 'planning', label: 'Планирование и приоритизация', questions: [1, 4], maxRaw: 6 },
        { key: 'change', label: 'Управление изменениями и нагрузкой', questions: [2, 6], maxRaw: 6 },
        { key: 'control', label: 'Контроль выполнения задач', questions: [3, 7], maxRaw: 6 },
        { key: 'focus', label: 'Концентрация внимания', questions: [5], maxRaw: 3 }
    ];

    const allowedScores = new Set([0, 1, 2, 3]);
    const wrapper = document.getElementById('questionWrapper');
    const form = document.getElementById('quizForm');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const toast = document.getElementById('formToast');
    const results = document.getElementById('results');
    const profilePill = document.getElementById('profilePill');
    const summaryText = document.getElementById('summaryText');
    const totalScore = document.getElementById('totalScore');
    const profileName = document.getElementById('profileName');
    const profileDescription = document.getElementById('profileDescription');
    const skillGrid = document.getElementById('skillGrid');
    const retakeBtn = document.getElementById('retakeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const currentNum = document.getElementById('currentNum');
    const downloadResultBtn = document.getElementById('downloadResultBtn');

    let currentIndex = 0;
    let lastResult = null;
    const slides = [];

    function createQuestionSlide(question, index) {
        const slide = document.createElement('div');
        slide.className = 'question-slide';
        if (index === 0) slide.classList.add('active');
        slide.dataset.index = String(index);

        const row = document.createElement('section');
        row.className = 'question-row';
        row.dataset.qid = String(question.id);

        const head = document.createElement('div');
        head.className = 'question-head';

        const number = document.createElement('span');
        number.className = 'qnum';
        number.textContent = String(question.id);

        const text = document.createElement('div');
        text.className = 'question-text';
        text.textContent = question.text;

        head.append(number, text);

        const answers = document.createElement('div');
        answers.className = 'answers time-answers';

        question.options.forEach((option, optionIndex) => {
            const item = document.createElement('div');
            item.className = 'answer time-answer';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${question.id}`;
            input.id = `q${question.id}_${optionIndex}`;
            input.value = String(option.score);

            const label = document.createElement('label');
            label.htmlFor = input.id;

            const copy = document.createElement('span');
            copy.className = 'answer-copy';
            copy.textContent = option.text;

            label.append(copy);
            item.append(input, label);
            answers.appendChild(item);
        });

        row.append(head, answers);
        slide.appendChild(row);
        return slide;
    }

    questions.forEach((question, index) => {
        const slide = createQuestionSlide(question, index);
        wrapper.appendChild(slide);
        slides.push(slide);
    });

    function answeredCount() {
        return questions.reduce((count, question) => count + (form.querySelector(`input[name="q${question.id}"]:checked`) ? 1 : 0), 0);
    }

    function updateProgress() {
        const count = answeredCount();
        progressText.textContent = `${count} из ${questions.length}`;
        progressFill.style.width = `${Math.round(count / questions.length * 100)}%`;
    }

    function showToast(message, type = 'info') {
        toast.textContent = message;
        toast.className = `toast inline-toast show ${type}`;
    }

    function hideToast() {
        toast.textContent = '';
        toast.className = 'toast inline-toast';
    }

    function updateSubmitVisibility() {
        const isLastQuestion = currentIndex === slides.length - 1;
        const lastQuestion = questions[questions.length - 1];
        const lastAnswered = Boolean(form.querySelector(`input[name="q${lastQuestion.id}"]:checked`));
        submitBtn.hidden = !(isLastQuestion && lastAnswered);
    }

    function goToSlide(index) {
        const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
        slides.forEach((slide, i) => slide.classList.toggle('active', i === safeIndex));
        currentIndex = safeIndex;
        currentNum.textContent = String(safeIndex + 1);
        prevBtn.disabled = safeIndex === 0;
        updateProgress();
        updateSubmitVisibility();
    }

    function getSelectedScore(questionId) {
        const selected = form.querySelector(`input[name="q${questionId}"]:checked`);
        if (!selected) return null;
        const value = Number(selected.value);
        return Number.isInteger(value) && allowedScores.has(value) ? value : null;
    }

    function collectAnswers() {
        const scores = {};
        let valid = true;
        questions.forEach(question => {
            const score = getSelectedScore(question.id);
            if (score === null) valid = false;
            else scores[question.id] = score;
        });
        return { scores, valid };
    }

    function getProfile(total) {
        return profiles.find(profile => total >= profile.min && total <= profile.max) || null;
    }

    function getSkillLevel(percent) {
        if (percent >= 75) return 'Сформированная рабочая привычка';
        if (percent >= 50) return 'Навык применяется непоследовательно';
        if (percent >= 25) return 'Зона развития';
        return 'Приоритетная зона развития';
    }

    function calculateSkills(scores) {
        return skills.map(skill => {
            const raw = skill.questions.reduce((sum, questionId) => sum + scores[questionId], 0);
            const percent = Math.round(raw / skill.maxRaw * 100);
            return { ...skill, raw, percent, level: getSkillLevel(percent) };
        });
    }

    function clearResults() {
        results.classList.remove('show');
        skillGrid.replaceChildren();
        profilePill.textContent = 'Самодиагностика';
        summaryText.textContent = '';
        totalScore.textContent = '0';
        profileName.textContent = '';
        profileDescription.textContent = '';
        downloadResultBtn.disabled = true;
        downloadResultBtn.setAttribute('aria-disabled', 'true');
        lastResult = null;
    }

    function renderResults(data) {
        profilePill.textContent = data.profile.name;
        totalScore.textContent = String(data.total);
        profileName.textContent = data.profile.name;
        profileDescription.textContent = data.profile.description;
        summaryText.textContent = `Ваш результат — ${data.total} из 21. Ниже показано соотношение четырёх рабочих привычек, которые оценивает эта экспресс-самодиагностика.`;

        skillGrid.replaceChildren();
        data.skills.forEach(skill => {
            const card = document.createElement('article');
            card.className = 'skill-card';
            if (data.strongest.length < data.skills.length && data.strongest.some(item => item.key === skill.key)) card.classList.add('strong');
            if (data.weakest.length < data.skills.length && data.weakest.some(item => item.key === skill.key)) card.classList.add('priority');

            const label = document.createElement('div');
            label.className = 'skill-label';
            label.textContent = skill.label;

            const value = document.createElement('div');
            value.className = 'skill-value';
            value.textContent = `${skill.percent}%`;

            const level = document.createElement('div');
            level.className = 'skill-level';
            level.textContent = skill.level;

            const bar = document.createElement('div');
            bar.className = 'skill-bar';
            const fill = document.createElement('div');
            fill.className = 'fill';
            fill.dataset.width = String(skill.percent);
            bar.appendChild(fill);

            card.append(label, value, level, bar);
            skillGrid.appendChild(card);
        });

        downloadResultBtn.disabled = false;
        downloadResultBtn.setAttribute('aria-disabled', 'false');
        results.classList.add('show');

        requestAnimationFrame(() => {
            skillGrid.querySelectorAll('.fill').forEach(fill => {
                const width = Number(fill.dataset.width);
                fill.style.width = `${Number.isFinite(width) ? Math.max(0, Math.min(width, 100)) : 0}%`;
            });
        });

        results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function calculate() {
        hideToast();
        slides.forEach(slide => slide.querySelector('.question-row')?.classList.remove('missing'));
        const { scores, valid } = collectAnswers();

        if (!valid) {
            const firstMissingIndex = questions.findIndex(question => getSelectedScore(question.id) === null);
            if (firstMissingIndex >= 0) {
                slides[firstMissingIndex].querySelector('.question-row')?.classList.add('missing');
                goToSlide(firstMissingIndex);
            }
            showToast(`Вы ответили на ${answeredCount()} из ${questions.length} вопросов. Пожалуйста, ответьте на все.`, 'error');
            return;
        }

        const values = Object.values(scores);
        const total = values.reduce((sum, value) => sum + value, 0);
        if (!Number.isInteger(total) || total < 0 || total > 21) {
            clearResults();
            showToast('Не удалось рассчитать результат: обнаружены некорректные данные ответа.', 'error');
            return;
        }

        const profile = getProfile(total);
        if (!profile) {
            clearResults();
            showToast('Не удалось определить профиль для рассчитанного балла.', 'error');
            return;
        }

        const skillResults = calculateSkills(scores);
        const maxPercent = Math.max(...skillResults.map(item => item.percent));
        const minPercent = Math.min(...skillResults.map(item => item.percent));
        const strongest = skillResults.filter(item => item.percent === maxPercent);
        const weakest = skillResults.filter(item => item.percent === minPercent);

        lastResult = { total, profile, skills: skillResults, strongest, weakest };
        renderResults(lastResult);
        showToast('Результат рассчитан. Данные остаются только в этой вкладке браузера.', 'success');
    }

    function roundedRect(ctx, x, y, width, height, radius) {
        const r = Math.min(radius, width / 2, height / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + width, y, x + width, y + height, r);
        ctx.arcTo(x + width, y + height, x, y + height, r);
        ctx.arcTo(x, y + height, x, y, r);
        ctx.arcTo(x, y, x + width, y, r);
        ctx.closePath();
    }

    function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 8) {
        const words = text.split(/\s+/);
        const lines = [];
        let line = '';
        for (const word of words) {
            const test = line ? `${line} ${word}` : word;
            if (ctx.measureText(test).width <= maxWidth || !line) {
                line = test;
            } else {
                lines.push(line);
                line = word;
                if (lines.length >= maxLines - 1) break;
            }
        }
        if (line && lines.length < maxLines) lines.push(line);
        lines.forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
        return y + lines.length * lineHeight;
    }

    function drawResultCanvas(data) {
        const width = 1240;
        const height = 1754;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas unavailable');

        const copper = '#c8977f';
        const copperDark = '#b07d65';
        const ink = '#2d2b2a';
        const muted = '#6f655b';
        const soft = '#f7f2ec';
        const line = '#e6ddd4';
        const margin = 88;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = soft;
        ctx.fillRect(0, 0, width, 260);
        ctx.fillStyle = copper;
        ctx.fillRect(0, 0, 18, height);

        ctx.fillStyle = copperDark;
        ctx.font = '700 28px Arial, sans-serif';
        ctx.fillText('САМОДИАГНОСТИКА', margin, 86);
        ctx.fillStyle = ink;
        ctx.font = '700 48px Arial, sans-serif';
        ctx.fillText('Кто управляет вашим временем?', margin, 150);
        ctx.fillStyle = muted;
        ctx.font = '24px Arial, sans-serif';
        ctx.fillText('Личный результат · без сохранения данных', margin, 202);

        // Итоговая карточка: численный результат, профиль и интерпретация в одном блоке.
        roundedRect(ctx, margin, 320, width - margin * 2, 330, 28);
        ctx.fillStyle = soft;
        ctx.fill();
        ctx.strokeStyle = line;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = muted;
        ctx.font = '700 22px Arial, sans-serif';
        ctx.fillText('ОБЩИЙ БАЛЛ', margin + 34, 370);

        ctx.fillStyle = copperDark;
        ctx.font = '700 58px Arial, sans-serif';
        ctx.fillText(String(data.total), margin + 34, 440);

        ctx.fillStyle = muted;
        ctx.font = '24px Arial, sans-serif';
        ctx.fillText('из 21', margin + 106, 438);

        ctx.fillStyle = ink;
        ctx.font = '700 34px Arial, sans-serif';
        ctx.fillText(data.profile.name, margin + 330, 416);

        // Интерпретация располагается непосредственно под численным результатом.
        ctx.fillStyle = muted;
        ctx.font = '22px Arial, sans-serif';
        wrapText(
            ctx,
            data.profile.description,
            margin + 34,
            500,
            width - margin * 2 - 68,
            31,
            4
        );

        ctx.fillStyle = ink;
        ctx.font = '700 30px Arial, sans-serif';
        ctx.fillText('Показатели по направлениям', margin, 735);

        const startY = 795;
        const rowGap = 145;
        const barX = margin + 410;
        const barWidth = width - margin * 2 - 560;
        data.skills.forEach((skill, index) => {
            const y = startY + index * rowGap;
            ctx.fillStyle = ink;
            ctx.font = '700 23px Arial, sans-serif';
            wrapText(ctx, skill.label, margin, y + 18, 330, 30, 2);
            ctx.fillStyle = muted;
            ctx.font = '20px Arial, sans-serif';
            ctx.fillText(skill.level, margin, y + 82);

            roundedRect(ctx, barX, y + 18, barWidth, 34, 17);
            ctx.fillStyle = '#eae3da';
            ctx.fill();
            const fillWidth = Math.max(0, Math.min(barWidth, barWidth * skill.percent / 100));
            if (fillWidth > 0) {
                roundedRect(ctx, barX, y + 18, fillWidth, 34, Math.min(17, fillWidth / 2));
                ctx.fillStyle = copper;
                ctx.fill();
            }
            ctx.fillStyle = copperDark;
            ctx.textAlign = 'right';
            ctx.font = '700 25px Arial, sans-serif';
            ctx.fillText(`${skill.percent}%`, width - margin, y + 45);
            ctx.textAlign = 'start';
        });

        const dateText = new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date());
        ctx.fillStyle = muted;
        ctx.font = '20px Arial, sans-serif';
        ctx.fillText(`Дата формирования: ${dateText}`, margin, 1540);
        ctx.fillText('Результат предназначен для личной самооценки. Данные не сохраняются и не передаются на сервер.', margin, 1590);
        return canvas;
    }

    function dataUrlToBytes(dataUrl) {
        const comma = dataUrl.indexOf(',');
        if (comma < 0) throw new Error('Invalid image data');
        const binary = atob(dataUrl.slice(comma + 1));
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
        return bytes;
    }

    function concatBytes(parts) {
        const total = parts.reduce((sum, part) => sum + part.length, 0);
        const out = new Uint8Array(total);
        let offset = 0;
        parts.forEach(part => { out.set(part, offset); offset += part.length; });
        return out;
    }

    function buildSingleImagePdf(jpegBytes, imageWidth, imageHeight) {
        const enc = new TextEncoder();
        const chunks = [];
        const offsets = [0];
        let byteLength = 0;
        const add = part => {
            const bytes = typeof part === 'string' ? enc.encode(part) : part;
            chunks.push(bytes);
            byteLength += bytes.length;
        };
        const addObject = (number, parts) => {
            offsets[number] = byteLength;
            add(`${number} 0 obj\n`);
            parts.forEach(add);
            add('\nendobj\n');
        };

        add('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
        addObject(1, ['<< /Type /Catalog /Pages 2 0 R >>']);
        addObject(2, ['<< /Type /Pages /Kids [3 0 R] /Count 1 >>']);
        addObject(3, ['<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>']);
        addObject(4, [`<< /Type /XObject /Subtype /Image /Width ${imageWidth} /Height ${imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`, jpegBytes, '\nendstream']);
        const content = 'q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ\n';
        addObject(5, [`<< /Length ${enc.encode(content).length} >>\nstream\n${content}endstream`]);

        const xrefOffset = byteLength;
        add('xref\n0 6\n');
        add('0000000000 65535 f \n');
        for (let i = 1; i <= 5; i += 1) add(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
        add(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
        return concatBytes(chunks);
    }

    function downloadResultPdf() {
        if (!lastResult) {
            showToast('Сначала завершите опросник и рассчитайте результат.', 'error');
            return;
        }
        try {
            const canvas = drawResultCanvas(lastResult);
            const jpegBytes = dataUrlToBytes(canvas.toDataURL('image/jpeg', 0.94));
            const pdfBytes = buildSingleImagePdf(jpegBytes, canvas.width, canvas.height);
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Самодиагностика_управление_временем.pdf';
            link.rel = 'noopener';
            document.body.appendChild(link);
            link.click();
            link.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            showToast('PDF с результатом сформирован локально.', 'success');
        } catch (error) {
            console.error('PDF generation failed', error);
            showToast('Не удалось сформировать PDF в этом браузере.', 'error');
        }
    }

    function resetAll() {
        form.reset();
        slides.forEach(slide => slide.querySelector('.question-row')?.classList.remove('missing'));
        clearResults();
        hideToast();
        goToSlide(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    form.addEventListener('change', event => {
        if (!(event.target instanceof HTMLInputElement) || event.target.type !== 'radio') return;
        hideToast();
        slides[currentIndex].querySelector('.question-row')?.classList.remove('missing');
        updateProgress();
        updateSubmitVisibility();
        if (currentIndex < slides.length - 1) setTimeout(() => goToSlide(currentIndex + 1), 250);
    });

    prevBtn.addEventListener('click', () => {
        hideToast();
        if (currentIndex > 0) goToSlide(currentIndex - 1);
    });


    form.addEventListener('submit', event => {
        event.preventDefault();
        calculate();
    });

    retakeBtn.addEventListener('click', resetAll);
    downloadResultBtn.addEventListener('click', downloadResultPdf);

    goToSlide(0);
})();

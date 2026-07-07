// Main JavaScript for AI Question Paper Generator

// Handle form submission
document.getElementById('generateForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    try {
        const response = await fetch('/api/generate-paper', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            displayQuestions(data.data);
            document.getElementById('results').style.display = 'block';
            
            // Update count
            const count = data.data.questions?.length || 0;
            document.querySelector('.results-header h2').textContent = 
                `Generated Questions (${count} questions)`;
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while generating the paper');
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
});

function displayQuestions(data) {
    const container = document.getElementById('questionsDisplay');
    
    if (!data.questions || data.questions.length === 0) {
        container.innerHTML = '<p>No questions generated. Please try again.</p>';
        return;
    }
    
    let html = '';
    
    data.questions.forEach((q, index) => {
        const qNumber = index + 1;
        const co = q.co || `CO${(index % 6) + 1}`;
        const marks = q.marks || 1;
        const type = q.type || 'descriptive';
        
        // Get type icon
        let typeIcon = 'fa-pencil';
        let typeLabel = 'Descriptive';
        if (type === 'mcq') {
            typeIcon = 'fa-list-check';
            typeLabel = 'MCQ';
        } else if (type === 'true_false') {
            typeIcon = 'fa-check-circle';
            typeLabel = 'True/False';
        } else if (type === 'fill_up') {
            typeIcon = 'fa-edit';
            typeLabel = 'Fill-up';
        }
        
        html += `
            <div class="question-item">
                <div class="q-header">
                    <div class="q-number">Q${qNumber}. <span class="q-type"><i class="fas ${typeIcon}"></i> ${typeLabel}</span></div>
                    <div class="q-meta">
                        <span>${co}</span>
                        <span>${marks} marks</span>
                    </div>
                </div>
                <div class="q-text">${q.question}</div>
        `;
        
        // Add options for MCQ
        if (type === 'mcq' && q.options) {
            html += `<ul class="q-options">`;
            q.options.forEach(opt => {
                html += `<li>• ${opt}</li>`;
            });
            if (q.answer) {
                html += `<li><strong>Answer: ${q.answer}</strong></li>`;
            }
            html += `</ul>`;
        }
        
        html += `</div>`;
    });
    
    container.innerHTML = html;
}

// Download paper
async function downloadPaper(format) {
    try {
        const response = await fetch(`/api/download-paper/${format}`);
        
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `question_paper_${new Date().toISOString().slice(0,10)}.${format === 'pdf' ? 'pdf' : 'docx'}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            const error = await response.json();
            alert('Download failed: ' + (error.error || 'Unknown error'));
        }
    } catch (error) {
        console.error('Download error:', error);
        alert('Download failed. Please try again.');
    }
}

// Regenerate paper
function regeneratePaper() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('generateForm').dispatchEvent(new Event('submit'));
}

// File upload preview
document.getElementById('syllabus_file')?.addEventListener('change', function(e) {
    const file = this.files[0];
    if (file) {
        const label = document.querySelector('.file-label span');
        if (label) {
            label.textContent = file.name;
        }
        const size = (file.size / 1024).toFixed(1);
        const helpText = document.querySelector('.file-label small');
        if (helpText) {
            helpText.textContent = `${file.type} | ${size} KB`;
        }
    }
});

// Auto-resize textarea
document.querySelector('textarea')?.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+Enter to submit
    if (e.ctrlKey && e.key === 'Enter') {
        const form = document.getElementById('generateForm');
        if (form) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    }
});
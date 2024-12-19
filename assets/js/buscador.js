document.getElementById('query').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();  // Получаем значение из поля ввода, приводим к нижнему регистру
    const rows = document.querySelectorAll('table tbody tr');  // Получаем все строки таблицы
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');  // Получаем все ячейки строки
        
        let matchFound = false;
        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(query)) {
                matchFound = true;  // Если хотя бы в одной ячейке есть совпадение
            }
        });
        
        // Показываем строку, если есть совпадение, иначе скрываем
        if (matchFound) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// CSV dosyasının yolu
const csvFilePath = 'yakit.csv';

// HTML içinde gösterilecek elementi seç
const brentElement = document.getElementById('brent');

// CSV dosyasını okuma işlemi
fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    // CSV verisini parse et
    const rows = csvData.split('\n');

    // 2. satır ve 2. sütundaki veriyi al
    const targetValue = rows[1].split(',')[2].trim();

    // HTML içinde 'csvData' idsine sahip elemente veriyi yerleştir
    brentElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

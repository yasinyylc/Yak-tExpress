// Konya Benzin
const csvFilePath = 'yakit.csv';

const konyaBenzinElement = document.getElementById('konyaBenzin');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[3].split(',')[1].trim();

    konyaBenzinElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Ankara Benzin
  
const ankaraBenzinElement = document.getElementById('ankaraBenzin');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[1].split(',')[1].trim();

    ankaraBenzinElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Bilecik Benzin
  
const bilecikBenzinElement = document.getElementById('bilecikBenzin');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[2].split(',')[1].trim();

    bilecikBenzinElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Konya motorin
  
const konyaMotorinElement = document.getElementById('konyaMotorin');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[3].split(',')[3].trim();

    konyaMotorinElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Konya motorin
  
const ankaraMotorinElement = document.getElementById('ankaraMotorin');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[1].split(',')[3].trim();

    ankaraMotorinElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Bilecik motorin
  
const bilecikMotorinElement = document.getElementById('bilecikMotorin');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[2].split(',')[3].trim();

    bilecikMotorinElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Konya LPG
  
const konyaLpgElement = document.getElementById('konyaLpg');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[3].split(',')[4].trim();

    konyaLpgElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Ankara Lpg
  
const ankaraLpgElement = document.getElementById('ankaraLpg');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[1].split(',')[4].trim();

    ankaraLpgElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));

  // Bilecik Lpg
  
const bilecikLpgElement = document.getElementById('bilecikLpg');

fetch(csvFilePath)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n');

    const targetValue = rows[2].split(',')[4].trim();

    bilecikLpgElement.textContent = `${targetValue}`;
  })
  .catch(error => console.error('CSV dosyasını alma sırasında bir hata oluştu:', error));







  

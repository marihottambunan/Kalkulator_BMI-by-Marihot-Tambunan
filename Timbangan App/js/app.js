function calculateBMI() {
    // Mengambil nilai input dari formulir
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;

    // Memeriksa apakah ada input yang kosong atau tidak valid
    if (weight === "" || height === "" || age === "" || weight <= 0 || height <= 0 || age <= 0) {
        // Menampilkan pesan error jika ada input yang tidak valid
        document.getElementById('error-message').style.display = 'block';
        return;
    } else {
        // Menyembunyikan pesan error jika semua input valid
        document.getElementById('error-message').style.display = 'none';
    }

    // Menghitung nilai BMI
    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    var status = '';

    // Menentukan status BMI berdasarkan nilai BMI
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    // Menampilkan hasil penghitungan BMI
    document.querySelector('.bmi-status').innerText = status;
    document.querySelector('.bmi-value').innerText = bmi;
    document.getElementById('result').style.display = 'block';

    // Menampilkan informasi konsultasi jika berat badan kelebihan
    if (bmi >= 25 && bmi <= 29.9) {
        showConsultation();
    } else {
        hideConsultation();
    }

    // Menampilkan informasi penyakit akibat kekurangan berat badan
    if (bmi < 18.5) {
        showUnderweightInfo();
        hideObesityInfo();
    } else {
        hideUnderweightInfo();
    }

    // Menampilkan informasi penyakit akibat obesitas
    if (bmi > 30) {
        showObesityInfo();
    } else {
        hideObesityInfo();
    }
}

// Menampilkan informasi konsultasi
function showConsultation() {
    document.getElementById('consultation').style.display = 'flex';
    document.getElementById('disease-info').style.display = 'block';
}

// Menyembunyikan informasi konsultasi
function hideConsultation() {
    document.getElementById('consultation').style.display = 'none';
    document.getElementById('disease-info').style.display = 'none';
}

// Menampilkan informasi penyakit akibat kekurangan berat badan
function showUnderweightInfo() {
    document.getElementById('consultation').style.display = 'flex';
    document.getElementById('underweight-info').style.display = 'block';
}

// Menyembunyikan informasi penyakit akibat kekurangan berat badan
function hideUnderweightInfo() {
    document.getElementById('underweight-info').style.display = 'none';
}

// Menampilkan informasi penyakit akibat obesitas
function showObesityInfo() {
    document.getElementById('consultation').style.display = 'flex';
    document.getElementById('obesity-info').style.display = 'block';
}

// Menyembunyikan informasi penyakit akibat obesitas
function hideObesityInfo() {
    document.getElementById('obesity-info').style.display = 'none';
}
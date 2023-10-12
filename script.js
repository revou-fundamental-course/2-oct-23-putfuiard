document.addEventListener("DOMContentLoaded", function () {
    //elemen-elemen HTML
    const temperatureForm = document.getElementById("temperatureForm"); // Formulir input suhu.
    const temperatureInput = document.getElementById("temperature"); // Input suhu.
    const conversionResult = document.getElementById("conversionResult"); // Hasil konversi.
    const conversionExplanation = document.getElementById("conversionExplanation"); // Penjelasan konversi.
    const resetButton = document.getElementById("resetButton"); // Tombol reset.
    const reverseButton = document.getElementById("reverseButton"); // Tombol untuk membalik konversi.

    let isCelsius = true; // Awal Celsius

    function updateLabels() {
        if (isCelsius) {
            // Mengatur placeholder dan label untuk suhu dalam Celsius.
            temperatureInput.placeholder = "Masukkan Suhu (Celsius)";
            temperatureInput.labels[0].textContent = "Masukkan Suhu (Celsius):";
            reverseButton.textContent = "Reverse to Fahrenheit"; 
        } else {
            // Mengatur placeholder dan label untuk suhu dalam Fahrenheit.
            temperatureInput.placeholder = "Masukkan Suhu (Fahrenheit)";
            temperatureInput.labels[0].textContent = "Masukkan Suhu (Fahrenheit):";
            reverseButton.textContent = "Reverse to Celsius"; 
        }
    }

    updateLabels(); 

    temperatureForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const inputTemperature = parseFloat(temperatureInput.value); 

        if (!isNaN(inputTemperature)) {
            let result, explanation;

            if (isCelsius) {
                // Menghitung konversi dari Celsius ke Fahrenheit.
                const fahrenheit = (inputTemperature * 9/5) + 32;
                result = `${inputTemperature} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit.`;
                explanation = "Rumus: (Celsius x 9/5) + 32";
            } else {
                // Menghitung konversi dari Fahrenheit ke Celsius.
                const celsius = (inputTemperature - 32) * 5/9;
                result = `${inputTemperature} Fahrenheit = ${celsius.toFixed(2)} Celsius.`;
                explanation = "Rumus: (Fahrenheit - 32) x 5/9";
            }

            conversionResult.textContent = result; // Menampilkan hasil konversi.
            conversionExplanation.textContent = explanation; // Menampilkan penjelasan konversi.
        } else {
            conversionResult.textContent = "Masukkan suhu dalam angka.";
            conversionExplanation.textContent = "";
        }
    });

    resetButton.addEventListener("click", function () {
        temperatureInput.value = "";
        conversionResult.textContent = "";
        conversionExplanation.textContent = "";
    });

    reverseButton.addEventListener("click", function () {
        isCelsius = !isCelsius;
        updateLabels(); 
        conversionResult.textContent = ""; 
        conversionExplanation.textContent = ""; 
    });
});

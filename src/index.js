// Ambil elemen yang perlu di-update
const cardNumberElement = document.getElementById("card-number");
const cardNameElement = document.getElementById("card-name");
const cardExpiryElement = document.getElementById("card-expiry");

// Ambil elemen input dari form
const nameInput = document.getElementById("input-name");
const numberInput = document.getElementById("input-number");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");
const cvcInput = document.getElementById("input-cvc");

// Fungsi untuk update kartu
function updateCardName() {
  cardNameElement.textContent = nameInput.value.trim() || "Full Name";
}

function updateCardNumber() {
  cardNumberElement.textContent = numberInput.value || "0000 0000 0000 0000";
}

function updateCardExpiry() {
  const month = monthInput.value || "MM";
  const year = yearInput.value || "YY";
  cardExpiryElement.textContent = `${month}/${year}`;
}

// Validasi nomor kartu
function validateCardNumber() {
  const cardNumberPattern = /^[0-9\s]{19}$/; // Pola untuk 16 digit dengan spasi
  const cardNumberValue = numberInput.value;
  const cardNumberError = document.getElementById("numberError");

  if (!cardNumberPattern.test(cardNumberValue)) {
    cardNumberError.style.display = "block";
    numberInput.classList.add("border-red-600");
  } else {
    cardNumberError.style.display = "none";
    numberInput.classList.remove("border-red-600");
  }
}

// Validasi bulan
function validateMonth() {
  const month = parseInt(monthInput.value, 10);
  const monthError = document.getElementById("monthError");

  if (month < 1 || month > 12 || isNaN(month)) {
    monthError.style.display = "block";
    monthInput.classList.add("border-red-600");
  } else {
    monthError.style.display = "none";
    monthInput.classList.remove("border-red-600");
  }
}

// Validasi tahun
function validateYear() {
  const year = parseInt(yearInput.value, 10);
  const yearError = document.getElementById("yearError");

  if (year < 0 || year > 99 || isNaN(year)) {
    yearError.style.display = "block";
    yearInput.classList.add("border-red-600");
  } else {
    yearError.style.display = "none";
    yearInput.classList.remove("border-red-600");
  }
}

// Validasi CVC
function validateCVC() {
  const cvc = parseInt(cvcInput.value, 10);
  const cvcError = document.getElementById("cvcError");

  if (cvc < 100 || cvc > 999 || isNaN(cvc)) {
    cvcError.style.display = "block";
    cvcInput.classList.add("border-red-600");
  } else {
    cvcError.style.display = "none";
    cvcInput.classList.remove("border-red-600");
  }
}

// Event listeners
nameInput.addEventListener("input", updateCardName);
numberInput.addEventListener("input", function () {
  updateCardNumber();
  validateCardNumber();
});
monthInput.addEventListener("input", function () {
  updateCardExpiry();
  validateMonth();
});
yearInput.addEventListener("input", function () {
  updateCardExpiry();
  validateYear();
});
cvcInput.addEventListener("input", validateCVC);

// Ambil elemen form dan success message
const formElement = document.getElementById("card-form");
const successMessageElement = document.getElementById("success-message");
const continueButton = document.getElementById("continue-button");

// Event listener untuk tombol Submit
formElement.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Cek validasi untuk semua input
  validateCardNumber();
  validateMonth();
  validateYear();
  validateCVC();

  // Jika semua validasi sukses (tidak ada error), tampilkan halaman sukses
  if (
    document.getElementById("numberError").style.display === "none" &&
    document.getElementById("monthError").style.display === "none" &&
    document.getElementById("yearError").style.display === "none" &&
    document.getElementById("cvcError").style.display === "none"
  ) {
    formElement.classList.add("hidden"); // Sembunyikan form
    successMessageElement.classList.remove("hidden"); // Tampilkan pesan sukses
  }
});

// Event listener untuk tombol Continue
continueButton.addEventListener("click", function () {
  window.location.href = "/"; // Arahkan ke halaman root
});

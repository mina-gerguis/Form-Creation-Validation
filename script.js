
document.addEventListener("DOMContentLoaded", function () {
  // 🧩 1. تحديد العناصر من الـ DOM
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // 🧠 2. مستمع الحدث عند إرسال النموذج
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // منع الإرسال للخادم

    // 📝 3. استرجاع القيم بعد التشذيب
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // ✅ 4. التحقق من صحة البيانات
    let isValid = true;
    let messages = [];

    // التحقق من اسم المستخدم
    if (username.length < 3) {
      isValid = false;
      messages.push("❌ Username must be at least 3 characters long.");
    }

    // التحقق من البريد الإلكتروني
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("❌ Please enter a valid email address.");
    }

    // التحقق من كلمة المرور
    if (password.length < 8) {
      isValid = false;
      messages.push("❌ Password must be at least 8 characters long.");
    }

    // 💬 5. عرض النتائج للمستخدم
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "✅ Registration successful!";
      feedbackDiv.style.color = "#28a745"; // أخضر
      feedbackDiv.style.backgroundColor = "#d4edda";
      form.reset(); // مسح الحقول بعد النجاح
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // أحمر
      feedbackDiv.style.backgroundColor = "#f8d7da";
    }
  });
});

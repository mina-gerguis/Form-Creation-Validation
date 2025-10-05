// دالة غير متزامنة لجلب بيانات المستخدمين
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    // جلب البيانات من واجهة API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // مسح رسالة التحميل
    dataContainer.innerHTML = '';

    // إنشاء قائمة المستخدمين
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // عرض القائمة داخل الصفحة
    dataContainer.appendChild(userList);

  } catch (error) {
    // في حال حدوث خطأ أثناء الجلب
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching data:', error);
  }
}

// تشغيل الكود بعد تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', fetchUserData);

 // تبديل التبويبات بدون إعادة تحميل الصفحة
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // إزالة النشاط من جميع الأزرار والمحتويات
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // إضافة النشاط للزر والمحتوى المحدد
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // البحث عن الكورسات
        const searchInput = document.querySelector('.search-box input');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                const description = card.querySelector('.course-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // تحديث عدد الكورسات المعروضة
            const visibleCourses = document.querySelectorAll('.course-card[style="display: block;"]').length;
            document.querySelector('.courses-count').textContent = `عرض 1-${visibleCourses} من ${visibleCourses} كورس`;
        });
        
        // تأثير التمرير لشريط التنقل
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // إخفاء مؤشر التحميل بعد تحميل الصفحة
        window.addEventListener('load', function() {
            const loader = document.getElementById('page-loader');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
        
        // منع الشراء إلا بعد تسجيل الدخول
        // document.querySelectorAll('.course-action').forEach(btn => {
        //     btn.addEventListener('click', function(e) {
        //         if (!localStorage.getItem('user_id')) {
        //             e.preventDefault();
        //             alert("يجب تسجيل الدخول أولاً لشراء هذا الكورس.");
        //             window.location.href = "../login.html";
        //         }
        //     });
        // });
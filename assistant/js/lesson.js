// تنفيذ التبويبات
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.course-tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // إزالة الفعالية من جميع التبويبات
                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // إضافة الفعالية للتبويب المحدد
                    tab.classList.add('active');
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // تنفيذ القوائم القابلة للطي
            const syllabusItems = document.querySelectorAll('.syllabus-item-header');
            syllabusItems.forEach(item => {
                item.addEventListener('click', () => {
                    const parent = item.parentElement;
                    const content = parent.querySelector('.syllabus-item-content');
                    
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
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
            
            // إخفاء مؤشر التحميل
            setTimeout(() => {
                const loader = document.getElementById('page-loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
        // فتح وإغلاق النوافذ المنبثقة
$(document).ready(function() {
    // فتح نافذة الشراء بكود
    $('.add-to-cart').click(function(e) {
        e.preventDefault();
        $('#code-purchase-modal').fadeIn();
    });
    
    // فتح نافذة الدفع الإلكتروني
    $('.buy-now').click(function(e) {
        e.preventDefault();
        $('#online-payment-modal').fadeIn();
    });
    
    // إغلاق النوافذ
    $('.close-modal').click(function() {
        $(this).closest('.modal').fadeOut();
    });
    
    // إغلاق النافذة عند النقر خارجها
    $(window).click(function(e) {
        if ($(e.target).hasClass('modal')) {
            $('.modal').fadeOut();
        }
    });
    
    // تغيير طريقة الدفع
    $('.payment-method').click(function() {
        $('.payment-method').removeClass('active');
        $(this).addClass('active');
        
        const method = $(this).data('method');
        $('.payment-form').removeClass('active');
        $(`#${method}-payment-form`).addClass('active');
    });
    
    // معالجة الشراء بكود
    $('#code-purchase-form').submit(function(e) {
        e.preventDefault();
        const code = $('#purchase-code').val().trim();
        
        if (code.length === 0) {
            alert('الرجاء إدخال كود الشراء');
            return;
        }
        
        // هنا يمكنك إضافة اتصال بالسيرفر للتحقق من الكود
        $.ajax({
            url: '/api/validate-code',
            method: 'POST',
            data: { code: code },
            success: function(response) {
                if (response.valid) {
                    alert('تم تفعيل الكورس بنجاح!');
                    $('#code-purchase-modal').fadeOut();
                    // يمكنك هنا توجيه المستخدم أو تحديث واجهة المستخدم
                } else {
                    alert('كود غير صالح أو مستخدم من قبل');
                }
            },
            error: function() {
                alert('حدث خطأ أثناء التحقق من الكود، الرجاء المحاولة لاحقاً');
            }
        });
    });
    
    // معالجة الدفع بالبطاقة
    $('#credit-payment-form').submit(function(e) {
        e.preventDefault();
        
        // هنا يمكنك إضافة التحقق من بيانات البطاقة
        const cardNumber = $('#card-number').val().trim();
        const expiryDate = $('#expiry-date').val().trim();
        const cvv = $('#cvv').val().trim();
        const cardName = $('#card-name').val().trim();
        
        if (!cardNumber || !expiryDate || !cvv || !cardName) {
            alert('الرجاء إدخال جميع بيانات البطاقة');
            return;
        }
        
        // محاكاة عملية الدفع
        $('#online-payment-modal').fadeOut();
        alert('جاري معالجة الدفع...');
        
        // هنا يمكنك إضافة اتصال ببوابة الدفع
        setTimeout(function() {
            alert('تمت عملية الدفع بنجاح! تم تفعيل الكورس.');
        }, 2000);
    });
    
    // معالجة الدفع بفودافون كاش
    $('#vodafone-payment-form').submit(function(e) {
        e.preventDefault();
        const phone = $('#vodafone-number').val().trim();
        
        if (!phone || phone.length !== 11) {
            alert('الرجاء إدخال رقم هاتف صحيح');
            return;
        }
        
        $('#online-payment-modal').fadeOut();
        alert('سيتم إرسال رسالة تأكيد إلى رقمك، الرجاء متابعتها لإتمام الدفع');
    });
    
    // معالجة الدفع بفوري
    $('#fawry-payment-form').submit(function(e) {
        e.preventDefault();
        const option = $('#fawry-option').val();
        
        $('#online-payment-modal').fadeOut();
        alert('تم إنشاء كود الدفع: 123456789\nيمكنك استخدامه في أي منفذ فوري');
    });
});
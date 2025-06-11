# دليل رفع مشروع "موضة AI" على GitHub وربطه بـ Netlify

هذا الدليل يشرح خطوات رفع مشروع الواجهة الأمامية لموقع "موضة AI" على GitHub وربطه بـ Netlify لتمكين النشر التلقائي وتسهيل تحديث متغيرات البيئة.

## الملفات المرفقة

- **fashion_ai_frontend_github.zip**: نسخة كاملة من مشروع الواجهة الأمامية جاهزة للرفع على GitHub (بدون node_modules وbuild)

## خطوات الرفع على GitHub وربطه بـ Netlify

### 1. إنشاء مستودع GitHub جديد

1. قم بتسجيل الدخول إلى حسابك على [GitHub](https://github.com/)
2. انقر على زر "+" في الزاوية العليا اليمنى، ثم اختر "New repository"
3. أدخل اسم المستودع (مثال: `fashion-ai-frontend`)
4. اختر "Public" أو "Private" حسب تفضيلك
5. انقر على "Create repository"

### 2. رفع المشروع إلى GitHub

#### باستخدام واجهة GitHub

1. قم بفك ضغط ملف `fashion_ai_frontend_github.zip` على جهازك
2. في صفحة المستودع الجديد، انقر على "uploading an existing file"
3. اسحب جميع الملفات والمجلدات من المشروع وأفلتها في المنطقة المخصصة
4. انقر على "Commit changes"

#### باستخدام Git (للمستخدمين المتقدمين)

```bash
git clone https://github.com/username/fashion-ai-frontend.git
cd fashion-ai-frontend
# نسخ محتويات المشروع المفكوك إلى هذا المجلد
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. ربط المشروع بـ Netlify

1. قم بتسجيل الدخول إلى حسابك على [Netlify](https://app.netlify.com/)
2. انقر على "New site from Git"
3. اختر "GitHub" كمصدر للمشروع
4. اختر المستودع الذي أنشأته للتو (`fashion-ai-frontend`)
5. في إعدادات النشر:
   - **Base directory**: اتركه فارغاً
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. انقر على "Deploy site"

### 4. إعداد متغيرات البيئة في Netlify

1. بعد اكتمال النشر، انتقل إلى "Site settings"
2. اختر "Environment variables" من القائمة الجانبية
3. انقر على "Add a variable"
4. أضف المتغير:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://fashion-ai-backend-vk8g.onrender.com`
5. انقر على "Save"
6. عد إلى "Deploys" وانقر على "Trigger deploy" ثم "Deploy site" لإعادة بناء الموقع مع المتغيرات الجديدة

## كيفية تحديث الموقع مستقبلاً

### تعديل الكود وتحديث الموقع

1. قم بتنزيل المستودع من GitHub أو تعديل الملفات مباشرة عبر واجهة GitHub
2. قم بإجراء التعديلات المطلوبة على الملفات
3. ارفع التغييرات إلى GitHub:
   - عبر واجهة GitHub: انقر على "Add file" ثم "Upload files" أو "Create new file"
   - باستخدام Git: `git add .`, `git commit -m "وصف التعديلات"`, `git push`
4. سيقوم Netlify تلقائياً ببناء ونشر النسخة الجديدة من الموقع

### تغيير رابط الخلفية

1. انتقل إلى إعدادات موقعك على Netlify
2. اختر "Environment variables" من القائمة الجانبية
3. قم بتعديل قيمة المتغير `REACT_APP_API_URL`
4. انقر على "Save"
5. انتقل إلى "Deploys" وانقر على "Trigger deploy" لإعادة بناء الموقع

## إضافة مكونات أو تحسين التصميم

لإضافة مكونات جديدة أو تحسين التصميم:

1. قم بتعديل الملفات في مجلد `src/components` أو إضافة مكونات جديدة
2. قم بتعديل ملفات CSS في `src/App.css` أو إضافة ملفات CSS جديدة
3. يمكنك إضافة مكتبات تصميم مثل Material-UI أو Bootstrap عبر:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   # أو
   npm install bootstrap
   ```
4. قم بتحديث ملف `package.json` في المستودع بعد إضافة أي مكتبات جديدة
5. ارفع التغييرات إلى GitHub وسيقوم Netlify تلقائياً ببناء ونشر النسخة الجديدة

## استكشاف الأخطاء وإصلاحها

إذا واجهت أي مشاكل أثناء النشر:

1. تحقق من سجلات البناء في Netlify للاطلاع على تفاصيل الأخطاء
2. تأكد من أن جميع التبعيات مذكورة في ملف `package.json`
3. تأكد من أن متغيرات البيئة مضبوطة بشكل صحيح
4. إذا كانت هناك مشاكل في الربط مع الخلفية، تأكد من أن الخلفية تعمل وأن عنوان URL صحيح

باتباع هذه الخطوات، ستتمكن من إدارة وتحديث موقع "موضة AI" بسهولة، وتغيير متغيرات البيئة، وإضافة مكونات جديدة دون الحاجة إلى بناء خارجي أو رفع ملفات build فقط.

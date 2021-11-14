### Font- Color - Icon

## Font 
تستطيع ان تضمن الخط في كل من الطرق التاليه :
# import 
هذه الطريقه تمم عندما تريد تضمين الخط من سرفر ما مثل google fonts وهذه الطريقه هي الاسهل لكن لاتعمل الخطوط الا في حاله وجود اتصال بالانترنت في حاله ما كان المشروع المراد انشائه يسمح بالعمل بدون اتصال في الانترنت فهذه الطريقه غير مجديه .
----
```
@import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

```
font-family : font-family:  'Italiana' ;

هناك طريقه اخرى لهذه الطريقه وهي تضمين الخط في صفحه html 
بدلا من الcss 

# css rule 
هذا الطريقه تستخدم في حاله اذا ماردنا ان تضمن بقاء الخط حتى بعد انقطاع الاتصال بالانترنت وايضا تستخدم في حاله شراء خطوط خاصه غير مجانيه مثل google fonts 
---
@font-face {
    font-family: MyFont;
    src: url('../fonts/NotoSansArabic-Thin-1.ttf');
    font-weight: bold;
 }

 حيث ان ال


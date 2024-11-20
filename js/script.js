let skills = {
    maximum : 2000000,
    skill : [
        {
            "title" : "Laravel Framework",
            "description" : "Laravel adalah",
            "image" : "image/laravel.jpeg",
            "purchase" : 2000000 
        },
        {
            "title" : "Vue.js",
            "description" : "Vue.js adalah",
            "image" : "image/vue.png",
            "purchase" : 3000000 
        },
        {
            "title" : "Tailwindcss",
            "description" : "Tailwind adalah",
            "image" : "image/tailwind.jpg",
            "purchase" : 1000000 
        }
    ]
}
// vue
let app = new Vue({
    el : '#application',
    data : skills
});
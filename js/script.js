let starboy = {
    profile : [
        {
            "name": "steven muhamad",
            "skills": ["web developer","cyber security"],
            "framework" : [
                "laravel","vue.js","tailwindcss"
            ],
            "price" : 1000000,
            "image" : "image/messi.jpg"
        }
    ]
}
// vue
let app = new Vue({
    el : '#application',
    data : starboy
});
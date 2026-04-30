
var countSegments = function(s) {
    return s.trim()==="" ? 0 : s.trim().split(/\s+/).length;
};

console.log(countSegments("Hello deva how are you?"));

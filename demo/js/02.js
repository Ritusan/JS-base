// 查找字符串中出现最多的字符和个数
// 例如：ndfgtyuhjrnnenrnnn  字符最多的是n ,出现了7次
// 1.字符串方法
var str = 'ndfgtyuhjrnnenrnnn';
function test(str){
    var obj = {};
    var num = 0;
    var val = '';
    for(var i=0; i<str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = [];
        }
        obj[str[i]].push(str[i]);
    };
    for(var attr in obj){
        if(num < obj[attr].length){
            num = obj[attr].length;
            val = obj[attr][0];
        };
    }
    return '最多的字符是：' + val + ' ；出现了：' + num + '次';
};
alert(test(str));

// 2.正则方法
var str1 = 'ndfgtyuhjrnnenrnnn';
function test1(str1){
    var arr = str.split('');
    var num = 0;
    var val = 0;
    arr.sort();
    str1 = arr.join('');
    // \1:和前面子项相同，+：出现多次
    var reg = /(\w)\1+/g;
    str1.replace(reg, function($0,$1){
        if(num < $0.length){
            num = $0.length;
            val = $1;
        };
    });
    return '最多的字符是：' + val + ' ；出现了：' + num + '次';
}
alert(test1(str1));
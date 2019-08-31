function solution(s) {
    var stack = [];
    for(var i = 0; i<s.length; i++){
        stack[stack.length-1] === s[i] ? stack.pop() : stack.push(s[i]);
    }

    return stack.length ? 0 : 1;
}

console.log(solution('aabbdlaskmdlsamfklsaaa'))
function solution(my_string, is_suffix) {
    return [...my_string].splice(my_string.length - is_suffix.length).join('') === is_suffix ? 1 : 0;
}
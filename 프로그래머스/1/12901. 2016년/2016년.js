const solution = (a, b) => {
    const date = new Date(`2016-${a}-${b}`);
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return day[date.getDay()];
}
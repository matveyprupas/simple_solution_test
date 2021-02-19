let arr = [
    {date: "02.01.2015", sum: 10},
    {date: "05.01.2015", sum: 11},
    {date: "25.01.2015", sum: 5},
    {date: "01.02.2015", sum: 20},
    {date: "09.02.2015", sum: 30},
    {date: "20.03.2015", sum: 40},
    {date: "25.03.2015", sum: 1},
    {date: "02.04.2015", sum: 5},
    {date: "24.04.2015", sum: 9},
    {date: "27.12.2020", sum: 10},
    {date: "28.12.2020", sum: 5},
    {date: "18.01.2021", sum: 5},
];

function period(startYear, endYear) {
    let start, end;
    let period = [];

    for (let i = startYear; i <= endYear; i++) {
        for (let k = 0; k <= 11; k++){        
            start = new Date(i, k, 25);

            if (start.getMonth() == 11) {
                end = new Date(i + 1, 0, 24);
                period.push({"start": start, "end": end})
                continue;
            }

            end = new Date(i, start.getMonth() + 1, 24);
            period.push({"start": start, "end": end})
        }
    }
    return period;
}

function sort(a, b) {
    let year, month, day;
    let sum;
    let date;
    let per = period(a, b);
    let res = ``;

    for (let k = 0; k < per.length; k++) {
        res = ``;
        sum = 0;
        for (let i = 0; i < arr.length; i++) {
            year = +arr[i].date.split('.')[2];
            month = +arr[i].date.split('.')[1];
            day = +arr[i].date.split('.')[0];
            date = new Date(year, month, day);

            if (date >= per[k].start && date <= per[k].end) {
                sum += arr[i].sum;
                res = res + `${arr[i].date} ${arr[i].sum}\n`;
            }
        }

        if (res == '') continue;
        console.log(res + `Итого: ${sum}`);
    }
}

sort(2014, 2021);
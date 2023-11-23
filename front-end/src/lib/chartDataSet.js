

const colors = [
    {
        borderColor: "rgba(13, 75, 244, 1)",
        pointBackgroundColor: "rgba(13, 75, 244, 0.7)",
        gradient: {
            start: "rgba(13, 75, 244, 0.7)",
            end: "rgba(13, 75, 244, 0.0)"
        }

    },

    {
        borderColor: "rgba(255, 0, 0, 1)",
        pointBackgroundColor: "rgba(255, 0, 0, 1)",
        gradient: {
            start: "rgba(255, 0, 0, 1)",
            end: "rgba(255, 0, 0, 0.0)"
        }

    },

    {
        borderColor: "rgba(0, 255, 0, 0.7)",
        pointBackgroundColor: "rgba(0, 255, 0, 0.7)",
        gradient: {
            start: "rgba(0, 255, 0, 0.7)",
            end: "rgba(0, 0, 0, 0.0)"
        }

    },

]



export function getChartData(labels, max, titles) {


    const dataSets = []



    Array.from(titles).forEach((title, index) => {

        let intialValue = 0

        const temp = []
        Array.from(labels).forEach((element, index) => {

            if (index % 2 !== 0) {
                intialValue += (Math.random() * max).toFixed() * 10
            }

            if (index % 2 == 0 && index !== 0) {
                intialValue -= index * 500
            }


            temp.push(intialValue)

        })

        dataSets.push(
            {
                label: title,
                borderRadius: 5,
                data: temp,
                pointRadius: 3,
                pointHoverRadius: 10,
                pointBackgroundColor: colors[index].pointBackgroundColor,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 255);
                    gradient.addColorStop(0, colors[index].gradient.start);
                    gradient.addColorStop(1, colors[index].gradient.end);
                    return gradient;
                },
                borderColor: colors[index].borderColor,
                fill: true,
                cubicInterpolationMode: 'monotone',
            })
    })





    const data = {
        labels: labels,

        datasets: dataSets
    };





    return data
}


export function createData(mainLabel, labels, values ) {
    const data = {
        labels: labels,
        datasets: [
            {
                label: mainLabel,
                borderRadius: 5,
                data: values,
                pointRadius: 3,
                pointHoverRadius: 10,
                pointBackgroundColor: colors[0].pointBackgroundColor,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 255);
                    gradient.addColorStop(0, colors[0].gradient.start);
                    gradient.addColorStop(1, colors[0].gradient.end);
                    return gradient;
                },
                borderColor: colors[0].borderColor,
                fill: true,
                cubicInterpolationMode: 'monotone',
            },
        ],
    }

    return data
}



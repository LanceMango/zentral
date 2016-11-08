let charts = {

    init(){
        let charts = {};
        let urls = Array();

        $('.chart').each(function (index, canvas) {
            canvas = $(canvas);
            let app = canvas.data('app');
            let dataset = canvas.data('dataset');

            if (!charts.hasOwnProperty(app)) {
                charts[app] = {};
                urls.push('/app/' + app + '/hist_data/day/14/');
            }

            charts[app][dataset] = canvas;
        });


        for (let idx in urls) {
            if (urls.hasOwnProperty(idx)) {
                get_data_and_make_chart(urls[idx], charts);
            }
        }

        function get_data_and_make_chart(url, charts) {

            $.getJSON(url, function (data) {

                for (let dataset in data.datasets) {

                    if (data.datasets.hasOwnProperty(dataset)) {
                        let canvas = charts[data.app][dataset];
                        let chart = new Chart(canvas, {
                            type: 'bar',
                            data: {
                                labels: data.labels,
                                datasets: [data.datasets[dataset]],
                            },
                            options: {}
                        });
                    }
                }
            });
        }
    },
};

export default charts;

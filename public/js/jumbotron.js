var jumbotron_app = new Vue({
    el: '#jumbotron',
    data: {
        time: null,
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    methods: {
        initApp: function () {
            this.getTime()
        },
        
        getTime() {
            //let date = this.convertUTCDateToLocalDate(new Date());
            let date = this.getToday()
            this.time = this.months[date.month] + "/" + date.date + "/" + date.year + " - " + date.time
            setTimeout(() => {
                this.getTime()
            }, 60000)
        },

        getToday() {
            var currentdate = new Date();
            var date = {
                date: currentdate.getDate(),
                month: currentdate.getMonth(),
                year: currentdate.getFullYear(),
                time: this.formatAMPM(currentdate)
            }
            return date
        },

        formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
    }
})

jumbotron_app.initApp()
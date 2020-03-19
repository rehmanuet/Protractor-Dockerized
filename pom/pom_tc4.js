var hotel = {
    hotelPage: function () {
        return element(by.css('[aria-label="Hotels"]'));
    },
    origin: function () {
        //   await element(by.css("div[id$=fieldGridLocationCol]")).click()
        return element.all(by.css('._iVhselectTextOnFocus')).first()
    },
    guestText: function () {
        return element.all(by.css(".col.js-label._ibU._ibV._idj")).first()
    },
    startDate: function () {
        var myStartDate = new Date(new Date().getTime());
        return myStartDate.toJSON().split("T")[0]
    },
    endDate: function () {
        var myEndDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
        return myEndDate.toJSON().split("T")[0]
    },
    formatingDates: function (input) {
        //
        var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
        if (!input || !input.match(pattern)) {
            return null;
        }
        return input.replace(pattern, '$2/$3/$1');
    },
    firstDate: function () {
        return element.all(by.css('.input._ihh._idE._jlv._id7._ial._ii0._iQj._iaj._isn._iso')).get(0);
    },
    lastDate: function () {
        return element.all(by.css('.input._ihh._idE._jlv._id7._ial._ii0._iQj._iaj._isn._iso')).get(1);
    },
    searchButton: function () {
        return element(by.xpath("//button[@title='Search hotels']"))
    }
}
module.exports = hotel;
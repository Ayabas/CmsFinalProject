/*
 * simpleWeather
 * http://simpleweatherjs.com
 *
 * A simple jQuery plugin to display current weather data
 * for any location and doesn't get in your way.
 *
 * Developed by James Fleeting <@fleetingftw> <http://iwasasuperhero.com>
 * Another project from monkeeCreate <http://monkeecreate.com>
 *
 * Version 2.7.0 - Last updated: April 17 2014
 */
!function(e) {
    "use strict";
    e.extend({
        simpleWeather: function(t) {
            t = e.extend({
                location: "",
                woeid: "2357536",
                unit: "f",
                success: function() {},
                error: function() {}
            }, t);
            var o = new Date, i = "//query.yahooapis.com/v1/public/yql?format=json&rnd=" + o.getFullYear() + o.getMonth() + o.getDay() + o.getHours() + "&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";
            if ("" !== t.location)
                i += 'select * from weather.forecast where woeid in (select woeid from geo.placefinder where text="' + t.location + '" and gflags="R") and u="' + t.unit + '"';
            else {
                if ("" === t.woeid)
                    return t.error("Could not retrieve weather due to an invalid location."), !1;
                i += "select * from weather.forecast where woeid=" + t.woeid + ' and u="' + t.unit + '"'
            }
            return e.getJSON(encodeURI(i), function(o) {
                null !== o && null !== o.query && null !== o.query.results && "Yahoo! Weather Error" !== o.query.results.channel.description ? e.each(o.query.results, function(e, o) {
                    -1 !== o.constructor.toString().indexOf("Array") && (o = o[0]);
                    var i, a = [], r = [], s = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"], c = s[Math.round(o.wind.direction / 22.5)];
                    i = o.item.condition.temp < 80 && o.atmosphere.humidity < 40?-42.379 + 2.04901523 * o.item.condition.temp + 10.14333127 * o.atmosphere.humidity - .22475541 * o.item.condition.temp * o.atmosphere.humidity-6.83783 * Math.pow(10, -3) * Math.pow(o.item.condition.temp, 2)-5.481717 * Math.pow(10, -2) * Math.pow(o.atmosphere.humidity, 2) + 1.22874 * Math.pow(10, -3) * Math.pow(o.item.condition.temp, 2) * o.atmosphere.humidity + 8.5282 * Math.pow(10, -4) * o.item.condition.temp * Math.pow(o.atmosphere.humidity, 2)-1.99 * Math.pow(10, -6) * Math.pow(o.item.condition.temp, 2) * Math.pow(o.atmosphere.humidity, 2) : o.item.condition.temp, "f" === t.unit ? (a.unit = "c", a.temp = Math.round(5 / 9 * (o.item.condition.temp-32)), a.high = Math.round(5 / 9 * (o.item.forecast[0].high-32)), a.low = Math.round(5 / 9 * (o.item.forecast[0].low-32)), a.forecastOneHigh = Math.round(5 / 9 * (o.item.forecast[1].high-32)), a.forecastOneLow = Math.round(5 / 9 * (o.item.forecast[1].low-32)), a.forecastTwoHigh = Math.round(5 / 9 * (o.item.forecast[2].high-32)), a.forecastTwoLow = Math.round(5 / 9 * (o.item.forecast[2].low-32)), a.forecastThreeHigh = Math.round(5 / 9 * (o.item.forecast[3].high-32)), a.forecastThreeLow = Math.round(5 / 9 * (o.item.forecast[3].low-32)), a.forecastFourHigh = Math.round(5 / 9 * (o.item.forecast[4].high-32)), a.forecastFourLow = Math.round(5 / 9 * (o.item.forecast[4].low-32))) : (a.unit = "f", a.temp = Math.round(1.8 * o.item.condition.temp + 32), a.high = Math.round(1.8 * o.item.forecast[0].high + 32), a.low = Math.round(1.8 * o.item.forecast[0].low + 32), a.forecastOneHigh = Math.round(1.8 * (o.item.forecast[1].high + 32)), a.forecastOneLow = Math.round(1.8 * (o.item.forecast[1].low + 32)), a.forecastTwoHigh = Math.round(1.8 * (o.item.forecast[2].high + 32)), a.forecastTwoLow = Math.round(1.8 * (o.item.forecast[2].low + 32)), a.forecastThreeHigh = Math.round(1.8 * (o.item.forecast[3].high + 32)), a.forecastThreeLow = Math.round(1.8 * (o.item.forecast[3].low + 32)), a.forecastFourHigh = Math.round(1.8 * (o.item.forecast[4].high + 32)), a.forecastFourLow = Math.round(1.8 * (o.item.forecast[4].low + 32))), "3200" == o.item.condition.code ? (r.thumbnail = "//s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png", r.image = "//s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png") : (r.thumbnail = "//l.yimg.com/a/i/us/nws/weather/gr/" + o.item.condition.code + "ds.png", r.image = "//l.yimg.com/a/i/us/nws/weather/gr/" + o.item.condition.code + "d.png"), r.forecastOne = "3200" == o.item.forecast[1].code ? "//s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png" : "//l.yimg.com/a/i/us/nws/weather/gr/" + o.item.forecast[1].code + "d.png", r.forecastTwo = "3200" == o.item.forecast[2].code ? "//s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png" : "//l.yimg.com/a/i/us/nws/weather/gr/" + o.item.forecast[2].code + "d.png", r.forecastThree = "3200" == o.item.forecast[3].code ? "//s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png" : "//l.yimg.com/a/i/us/nws/weather/gr/" + o.item.forecast[3].code + "d.png", r.forecastFour = "3200" == o.item.forecast[4].code ? "//s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png" : "//l.yimg.com/a/i/us/nws/weather/gr/" + o.item.forecast[4].code + "d.png";
                    var m = {
                        title: o.item.title,
                        temp: o.item.condition.temp,
                        tempAlt: a.temp,
                        code: o.item.condition.code,
                        todayCode: o.item.forecast[0].code,
                        units: {
                            temp: o.units.temperature,
                            distance: o.units.distance,
                            pressure: o.units.pressure,
                            speed: o.units.speed,
                            tempAlt: a.unit
                        },
                        currently: o.item.condition.text,
                        high: o.item.forecast[0].high,
                        highAlt: a.high,
                        low: o.item.forecast[0].low,
                        lowAlt: a.low,
                        forecast: o.item.forecast[0].text,
                        wind: {
                            chill: o.wind.chill,
                            direction: c,
                            speed: o.wind.speed
                        },
                        humidity: o.atmosphere.humidity,
                        heatindex: i,
                        pressure: o.atmosphere.pressure,
                        rising: o.atmosphere.rising,
                        visibility: o.atmosphere.visibility,
                        sunrise: o.astronomy.sunrise,
                        sunset: o.astronomy.sunset,
                        description: o.item.description,
                        thumbnail: r.thumbnail,
                        image: r.image,
                        tomorrow: {
                            high: o.item.forecast[1].high,
                            highAlt: a.forecastOneHigh,
                            low: o.item.forecast[1].low,
                            lowAlt: a.forecastOneLow,
                            forecast: o.item.forecast[1].text,
                            code: o.item.forecast[1].code,
                            date: o.item.forecast[1].date,
                            day: o.item.forecast[1].day,
                            image: r.forecastOne
                        },
                        forecasts: {
                            one: {
                                high: o.item.forecast[1].high,
                                highAlt: a.forecastOneHigh,
                                low: o.item.forecast[1].low,
                                lowAlt: a.forecastOneLow,
                                forecast: o.item.forecast[1].text,
                                code: o.item.forecast[1].code,
                                date: o.item.forecast[1].date,
                                day: o.item.forecast[1].day,
                                image: r.forecastOne
                            },
                            two: {
                                high: o.item.forecast[2].high,
                                highAlt: a.forecastTwoHigh,
                                low: o.item.forecast[2].low,
                                lowAlt: a.forecastTwoLow,
                                forecast: o.item.forecast[2].text,
                                code: o.item.forecast[2].code,
                                date: o.item.forecast[2].date,
                                day: o.item.forecast[2].day,
                                image: r.forecastTwo
                            },
                            three: {
                                high: o.item.forecast[3].high,
                                highAlt: a.forecastThreeHigh,
                                low: o.item.forecast[3].low,
                                lowAlt: a.forecastThreeLow,
                                forecast: o.item.forecast[3].text,
                                code: o.item.forecast[3].code,
                                date: o.item.forecast[3].date,
                                day: o.item.forecast[3].day,
                                image: r.forecastThree
                            },
                            four: {
                                high: o.item.forecast[4].high,
                                highAlt: a.forecastFourHigh,
                                low: o.item.forecast[4].low,
                                lowAlt: a.forecastFourLow,
                                forecast: o.item.forecast[4].text,
                                code: o.item.forecast[4].code,
                                date: o.item.forecast[4].date,
                                day: o.item.forecast[4].day,
                                image: r.forecastFour
                            }
                        },
                        city: o.location.city,
                        country: o.location.country,
                        region: o.location.region,
                        updated: o.item.pubDate,
                        link: o.item.link
                    };
                    t.success(m)
                }) : t.error(null === o.query.results ? "An invalid WOEID or location was provided." : "There was an error retrieving the latest weather information. Please try again.")
            }), this
        }
    })
}(jQuery);

const request = require('request')
const csv = require('csvtojson')
const _ = require('lodash')
var fs = require('fs');

const urls = [];
for (i = 232; i < 293; i++) {
    urls.push(`https://nrt4.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/viirs/Global/VIIRS_I_Global_VNP14IMGTDL_NRT_2019${i}.txt`);
};
const headers = { Authorization: "Bearer XXX" }
let count = 0;

exports.handler = function(event, context, callback) {
    const data = {}
    const result = {}
    urls.forEach((url) => {
        const options = {
            url: url,
            headers: headers,
        }
        csv()
            .fromStream(request(options))
            .subscribe((json)=>{
                return new Promise((resolve,reject)=>{
                    const location = `${Math.round(json.latitude)},${Math.round(json.longitude)}`
                    const lastFire = `${json.acq_date}.${json.acq_time}`
                    if (!data[location]) {
                        data[location] = { count: 1, lastFire: lastFire };
                    }
                    // if same location at same time, just skip
                    if (data[location].lastFire === lastFire) { resolve() }

                    data[location].count = data[location].count + 1;
                    resolve()
                })
            },
            null,
            () => {
                count++;
                if (count === urls.length) {
                    const max = Object.values(data).reduce((a, {count}) => a > count ? a : count, 0 );
                    _.forIn(data, ({ count }, key) => {
                        data[key] = { count: count, score: Math.round(count/max*100)}
                    })
                    data["max"] = max;
                    json = JSON.stringify(data, null, 2);
                    fs.writeFile('data.json', json, function(err, result) {
                        if(err) console.log('error', err);
                      });
                }
            });
    })
}
// @flow

type City = {
    ID: number,
    parentID?: number,
    Phone: string,
    City: string,
    Name: string
};

export default function(cityList: Array<City>): Array {
    if (cityList && cityList.length > 0) {
        const parentList = cityList.filter(city => {
            return !city.parentID;
        });
        const childList = cityList.filter(city => {
            return city.parentID;
        });

        const mappedCityList = parentList.map(city => {
            const mappedCity = city;
            const children = childList.filter(childCity => {
                return childCity.parentID === city.ID
            });
            mappedCity.subcities = children;
            return mappedCity;
        })

        return mappedCityList;
    }
    return null;
}

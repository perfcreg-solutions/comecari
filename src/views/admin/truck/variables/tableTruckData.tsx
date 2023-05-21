import Truck from 'img/trucks/van01.png'
import Truck2 from 'img/trucks/van02.png'
import Truck3 from 'img/trucks/van03.png'
import Truck4 from 'img/trucks/van04.png'
import Truck5 from 'img/trucks/van05.png'
import Truck6 from 'img/trucks/van06.png'

export const TruckData = [
    {
        "id": "T001",
        "type": "Flatbed",
        truck: Truck,
        "make": "Volvo",
        "model": "FH16",
        "year": 2022,
        "licensePlate": "ABC123",
        "vin": "1234567890ABCDE",
        "capacity": {
            "weight": 20000,
            "volume": 80
        },
        "dimensions": {
            "length": 12,
            "width": 2.5,
            "height": 3
        },
        "availability": "available",
        "location": {
            "latitude": 6.5244,
            "longitude": 3.3792
        },
        "carrierID": "C001",
        "driverID": "D001",
        "additionalInfo": "Well-maintained truck",
        "status": "Unavailable",
        "created": "2022",
        "datModified": "2022",
    },
    {
        "id": "T002",
        truck: Truck3,
        "type": "Refrigerated",
        "make": "Mercedes-Benz",
        "model": "Actros",
        "year": 2021,
        "licensePlate": "BCD234",
        "vin": "1234567890ABCDF",
        "capacity": {
            "weight": 18000,
            "volume": 75
        },
        "dimensions": {
            "length": 11,
            "width": 2.4,
            "height": 2.8
        },
        "availability": "available",
        "location": {
            "latitude": 6.5245,
            "longitude": 3.3793
        },
        "carrierID": "C002",
        "driverID": "D002",
        "additionalInfo": "Temperature controlled truck",
        "status": "Unavailable",
        "created": "2022",
        "dateModified": "2022",
    },
    {
        "id": "T003",
        "type": "Flatbed",
        truck: Truck5,
        "make": "Volvo",
        "model": "FH16",
        "year": 2020,
        "licensePlate": "CDE345",
        "vin": "1234567890ABCDG",
        "capacity": {
            "weight": 21000,
            "volume": 85
        },
        "dimensions": {
            "length": 13,
            "width": 2.6,
            "height": 3.1
        },
        "availability": "available",
        "location": {
            "latitude": 6.5246,
            "longitude": 3.3794
        },
        "carrierID": "C003",
        "driverID": "D003",
        "additionalInfo": "New tires installed",
        "created": "2022",
        "dateModified": "2022",
    },
    {
        "id": "T004",
        truck: Truck2,
        "type": "Refrigerated",
        "make": "Mercedes-Benz",
        "model": "Actros",
        "year": 2019,
        "licensePlate": "DEF456",
        "vin": "1234567890ABCDH",
        "capacity": {
            "weight": 19000,
            "volume": 78
        },
        "dimensions": {
            "length": 10,
            "width": 2.3,
            "height": 2.7
        },
        "availability": "available",
        "location": {
            "latitude": 6.5247,
            "longitude": 3.3795
        },
        "carrierID": "C004",
        "driverID": "D004",
        "additionalInfo": "Recently serviced",
        "created": "2022",
        "dateModified": "2022",
    },
    {
        "id": "T005",
        "type": "Flatbed",
        truck: Truck,
        "make": "Volvo",
        "model": "FH16",
        "year": 2018,
        "licensePlate": "EFG567",
        "vin": "1234567890ABCDI",
        "capacity": {
            "weight": 22000,
            "volume": 90
        },
        "dimensions": {
            "length": 14,
            "width": 2.7,
            "height": 3.2
        },
        "availability": "available",
        "location": {
            "latitude": 6.5248,
            "longitude": 3.3796
        },
        "carrierID": "C005",
        "driverID": "D005",
        "additionalInfo": "Clean and well-maintained",
        "created": "2022",
        "dateModified": "2022",
    },
    {
        "id": "T006",
        "type": "Refrigerated",
        truck: Truck4,
        "make": "Mercedes-Benz",
        "model": "Actros",
        "year": 2017,
        "licensePlate": "FGH678",
        "vin": "1234567890ABCDJ",
        "capacity": {
            "weight": 17000,
            "volume": 70
        },
        "dimensions": {
            "length": 9,
            "width": 2.2,
            "height": 2.6
        },
        "availability": "available",
        "location": {
            "latitude": 6.5249,
            "longitude": 3.3797
        },
        "carrierID": "C006",
        "driverID": "D006",
        "additionalInfo": "Cold chain compliant",
        "created": "2022",
        "dateModified": "2022",
    },
    {
        "id": "T007",
        truck: Truck6,
        "type": "Flatbed",
        "make": "Volvo",
        "model": "FH16",
        "year": 2016,
        "licensePlate": "GHI789",
        "vin": "1234567890ABCDK",
        "capacity": {
            "weight": 23000,
            "volume": 95
        },
        "dimensions": {
            "length": 15,
            "width": 2.8,
            "height": 3.3
        },
        "availability": "available",
        "location": {
            "latitude": 6.5250,
            "longitude": 3.3798
        },
        "carrierID": "C007",
        "driverID": "D007",
        "additionalInfo": "Regularly serviced",
        "created": "2022",
        "dateModified": "2022",
    },
    {
        "id": "T008",
        "type": "Refrigerated",
        truck: Truck3,
        "make": "Mercedes-Benz",
        "model": "Actros",
        "year": 2015,
        "licensePlate": "HIJ890",
        "vin": "1234567890ABCDL",
        "capacity": {
            "weight": 16000,
            "volume": 65
        },
        "dimensions": {
            "length": 8,
            "width": 2.1,
            "height": 2.5
        },
        "availability": "available",
        "location": {
            "latitude": 6.5251,
            "longitude": 3.3799
        },
        "carrierID": "C008",
        "driverID": "D008",
        "additionalInfo": "Ideal for perishables",
        "created": "2022",
        "dateModified": "2022",
    }
]
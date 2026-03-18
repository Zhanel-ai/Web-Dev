class Vehicle:
    def __init__(self, brand, speed, year):
        self.brand = brand
        self.speed = speed
        self.year = year


    def move(self):
        return "Vehicle is moving"

    def info(self):
        return f"{self.brand} ({self.year}) speed {self.speed} km/h"

    def __str__(self):
        return f"Vehicle: {self.brand}, Year: {self.year}, Speed: {self.speed} km/h"


class Car(Vehicle):
    def __init__(self, brand, speed, year, doors):
        super().__init__(brand, speed, year)
        self.doors = doors

    def move(self):
        return f"Car {self.brand} is driving on the road"

    def open_trunk(self):
        return f"Car {self.brand} opened the trunk"

    def __str__(self):
        return f"Car: {self.brand}, Year: {self.year}, Speed: {self.speed} km/h, Doors: {self.doors}"


class Bike(Vehicle):
    def __init__(self, brand, speed, year, bike_type):
        super().__init__(brand, speed, year)
        self.bike_type = bike_type

    def move(self):
        return f"Bike {self.brand} is riding fast"

    def ring_bell(self):
        return f"Bike {self.brand} rings the bell"

    def __str__(self):
        return f"Bike: {self.brand}, Year: {self.year}, Speed: {self.speed} km/h, Type: {self.bike_type}"
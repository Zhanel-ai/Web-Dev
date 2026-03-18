from models import Vehicle, Car, Bike


def main():
    car1 = Car("Toyota", 180, 2020, 4)
    bike1 = Bike("Yamaha", 120, 2022, "Sport")
    vehicle1 = Vehicle("Generic", 100, 2015)

    vehicles = [car1, bike1, vehicle1]

    for v in vehicles:
        print(v)
        print(v.info())
        print(v.move())

        if isinstance(v, Car):
            print(v.open_trunk())
        elif isinstance(v, Bike):
            print(v.ring_bell())

        print()


if __name__ == "__main__":
    main()
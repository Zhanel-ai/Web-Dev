#Исключающее ИЛИ
def xor(x, y):
    return (x == 1 and y == 0) or (x == 0 and y == 1)

x = int(input())
y = int(input())

print(int(xor(x, y)))
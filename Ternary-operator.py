num1 = 20
num2 = 5

BiggestNumber = num1 if num1 > num2 else num2
# Ternary operator ☝
# Same this with normal if else statement 👇
if num1 > num2:
    print(num1)
else:
    print(num2)

print("Result =",BiggestNumber)
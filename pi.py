n = str(input('enter a number: '))


for i in n:
    print((ord(i) - ord('0')) % 3)
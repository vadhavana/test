def rev(num):
    rev = 0
    while(num>0):
        rem = num % 10
        rev = (rev * 10)+rem
        num = num//10
    print(rev)  

rev(9819123456)

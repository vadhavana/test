def paln(num):
    n = num
    rev = 0
    while num>0:
        rem = num%10
        rev = (rev*10)+rem
        num = num//10
   # print(rev)
   # print(num)
    if n==rev :
        print(rev)
    else:
        print("no is not palindrom")

        

paln(122222121)
